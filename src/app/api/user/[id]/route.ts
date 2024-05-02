import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
    params: { id: string }
}

export async function GET(request: Request, { params }: Params) {
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: Number(params.id),
            },
        });

        if (!user)
            return NextResponse.json({message: "User not found" }, {status: 404});

        return NextResponse.json(user)
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
        const user = await prisma.user.delete({
            where: {
                id: Number(params.id),
            },
        });

        if (!user)
            return NextResponse.json({message: "User not found" }, {status: 404});

        return NextResponse.json(user)
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
        const { name } = await request.json();

        const user = await prisma.user.update({
            where: {
                id: Number(params.id),
            },
            data: {
                name
            }
        });

        if (!user)
            return NextResponse.json({message: "User not found" }, {status: 404});

        return NextResponse.json(user)
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