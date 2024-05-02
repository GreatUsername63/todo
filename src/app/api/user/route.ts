import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
    try {
        const users = await prisma.user.findMany()
        return NextResponse.json(users)
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
        const { name } = await request.json()
        const newUser = await prisma.user.create({
            data: {
                name
            }
        })

        return NextResponse.json(newUser);
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