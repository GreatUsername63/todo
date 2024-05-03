import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
    try {
        const logs = await prisma.log.findMany()
        return NextResponse.json(logs)
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
        const { content, dateTime, userId } = await request.json()
        const newLog = await prisma.log.create({
            data: {
                content,
                dateTime: new Date(dateTime),
                userId
            }
        })

        return NextResponse.json(newLog);
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