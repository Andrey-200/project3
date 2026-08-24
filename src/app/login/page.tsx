import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const { login, password } = await request.json();

        // Проверка: заполнены ли поля
        if (!login || !password) {
            return NextResponse.json(
                { error: 'Логин и пароль обязательны' },
                { status: 400 }
            );
        }

        // Ищем пользователя по логину
        const user = await prisma.user.findUnique({
            where: { login }
        });

        if (!user) {
            return NextResponse.json(
                { error: 'Неверный логин или пароль' },
                { status: 401 }
            );
        }

        // Сравниваем пароль с хэшем в БД
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json(
                { error: 'Неверный логин или пароль' },
                { status: 401 }
            );
        }

        // Генерируем JWT-токен
        const token = jwt.sign(
            { userId: user.id, login: user.login },
            process.env.JWT_SECRET || 'secret_key',
            { expiresIn: '7d' }
        );

        // Отправляем токен в httpOnly куке
        const response = NextResponse.json({
            message: 'Вход выполнен!',
            user: { id: user.id, login: user.login }
        });

        response.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // 7 дней
            path: '/',
        });

        return response;

    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Ошибка сервера' },
            { status: 500 }
        );
    }
}