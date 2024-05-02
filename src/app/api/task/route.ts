import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
    try {
        const tasks = await prisma.task.findMany()
        return NextResponse.json(tasks)
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    message: error.message,
                },
                {
                    status: 500,
                }
            );
        }
    }
}

export async function POST(request: Request) {
    try {
        const { name, description, dueDate, userId } = await request.json()
        const newTask = await prisma.task.create({
            data: {
                name,
                description,
                dueDate: new Date(dueDate),
                userId
            }
        })

        return NextResponse.json(newTask);
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    message: error.message,
                },
                {
                    status: 500,
                }
            );
        }
    }
}