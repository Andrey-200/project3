import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

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

        // 1. Проверка: есть ли такой пользователь уже?
        const existingUser = await prisma.user.findUnique({
            where: { login }
        });

        if (existingUser) {
            return NextResponse.json(
                { error: 'Пользователь с таким логином уже существует' },
                { status: 400 }
            );
        }

        // 2. Хэшируем пароль (соль 10 раундов)
        const hashedPassword = await bcrypt.hash(password, 10);

        // 3. Сохраняем в базу SQLite
        const user = await prisma.user.create({
            data: {
                login,
                password: hashedPassword,
            },
        });

        // 4. Возвращаем успех (пароль не отправляем обратно!)
        return NextResponse.json({
            message: 'Регистрация успешна!',
            user: { id: user.id, login: user.login }
        });

    } catch (error) {
        return NextResponse.json(
            { error: 'Ошибка сервера' },
            { status: 500 }
        );
    }
}