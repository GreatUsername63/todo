import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
    params: { id: string }
}

export async function GET(request: Request, { params }: Params) {
    try {
        const task = await prisma.task.findFirst({
            where: {
                id: Number(params.id),
            },
        });

        if (!task)
            return NextResponse.json({message: "Task not found" }, {status: 404});

        return NextResponse.json(task)
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

export async function DELETE(request: Request, { params }: Params) {
    try {
        const task = await prisma.task.delete({
            where: {
                id: Number(params.id),
            },
        });

        if (!task)
            return NextResponse.json({message: "Task not found" }, {status: 404});

        return NextResponse.json(task)
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

export async function PUT(request: Request, { params }: Params) {
    try{
        const { name, description, dueDate, userId, complete } = await request.json()

        const task = await prisma.task.update({
            where: {
                id: Number(params.id),
            },
            data: {
                name,
                description,
                dueDate: new Date(dueDate),
                userId,
                complete
            }
        });

        if (!task)
            return NextResponse.json({message: "Task not found" }, {status: 404});

        return NextResponse.json(task)
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