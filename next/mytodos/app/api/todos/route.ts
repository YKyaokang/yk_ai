import {
    NextResponse
} from 'next/server';

import {
    PrismaClient
} from '@prisma/client';

import { type Todo } from '@/types/todo';
// 这里就是controller层， 而prisma帮我完成mapper层
const prisma = new PrismaClient();

export async function POST(request: Request) {
    const { title } = await request.json();
    const todo = await prisma.todo.create({
        data: {
            title
        }
    });
    return NextResponse.json(todo);
}

export async function GET() {
    // 取所有的
    const todos = await prisma.todo.findMany({
        orderBy: {
            createAt: 'desc'
        }
    });
    return NextResponse.json(todos);
}