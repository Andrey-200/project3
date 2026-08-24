import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

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

        // Проверка: есть ли такой пользователь уже?
        const existingUser = await prisma.user.findUnique({
            where: { login }
        });

        if (existingUser) {
            return NextResponse.json(
                { error: 'Пользователь с таким логином уже существует' },
                { status: 400 }
            );
        }

        // Хэшируем пароль
        const hashedPassword = await bcrypt.hash(password, 10);

        // Сохраняем в базу
        const user = await prisma.user.create({
            data: {
                login,
                password: hashedPassword,
            },
        });

        // Возвращаем успех (пароль не отправляем!)
        return NextResponse.json({
            message: 'Регистрация успешна!',
            user: { id: user.id, login: user.login }
        }, { status: 201 });

    } catch (error) {
        console.error('Register error:', error);
        return NextResponse.json(
            { error: 'Ошибка сервера' },
            { status: 500 }
        );
    }
}