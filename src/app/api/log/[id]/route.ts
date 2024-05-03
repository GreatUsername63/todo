import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
    params: { id: string }
}

export async function GET(request: Request, { params }: Params) {
    try {
        const log = await prisma.log.findFirst({
            where: {
                id: Number(params.id),
            },
        });

        if (!log)
            return NextResponse.json({message: "Log not found" }, {status: 404});

        return NextResponse.json(log)
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
        const log = await prisma.log.delete({
            where: {
                id: Number(params.id),
            },
        });

        if (!log)
            return NextResponse.json({message: "Log not found" }, {status: 404});

        return NextResponse.json(log)
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
        const { content, dateTime, userId } = await request.json()

        const log = await prisma.log.update({
            where: {
                id: Number(params.id),
            },
            data: {
                content,
                dateTime: new Date(dateTime),
                userId
            }
        });

        if (!log)
            return NextResponse.json({message: "Log not found" }, {status: 404});

        return NextResponse.json(log)
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