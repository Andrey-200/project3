import { NextResponse } from 'next/server';

export async function POST() {
    const response = NextResponse.json({
        message: 'Выход выполнен!'
    });

    // Удаляем куку с токеном
    response.cookies.set('token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 0,
        path: '/',
    });

    return response;
}