import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; // скоро установим

import { PrismaClient } from '@prisma/client';

// Передаём URL из конфига
const prisma = new PrismaClient({
    datasources: {
        db: {
            url: 'file:./prisma/dev.db', // Тот же путь, что в prisma.config.ts
        },
    },
});

export async function POST(request: Request) {
    try {
        const { login, password } = await request.json();

        // 1. Ищем пользователя в SQLite
        const user = await prisma.user.findUnique({
            where: { login }
        });

        if (!user) {
            return NextResponse.json(
                { error: 'Неверный логин или пароль' },
                { status: 401 }
            );
        }

        // 2. Сравниваем пароль с хэшем в БД
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json(
                { error: 'Неверный логин или пароль' },
                { status: 401 }
            );
        }

        // 3. Генерируем JWT-токен (устанавливаем библиотеку ниже)
        const token = jwt.sign(
            { userId: user.id, login: user.login },
            process.env.JWT_SECRET || 'secret_key',
            { expiresIn: '7d' }
        );

        // 4. Отправляем токен в защищенной куке (httpOnly!)
        const response = NextResponse.json({
            message: 'Вход выполнен!',
            user: { id: user.id, login: user.login}
        });

        response.cookies.set('token', token, {
            httpOnly: true,   // защита от XSS
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // 7 дней
            path: '/',
        });

        return response;

    } catch (error) {
        return NextResponse.json(
            { error: 'Ошибка сервера' },
            { status: 500 }
        );
    }
}