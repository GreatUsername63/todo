import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        message: 'Get all users'
    })
}

export function POST() {
    return NextResponse.json({
        message: 'Post user'
    })
}