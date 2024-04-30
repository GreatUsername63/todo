import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        message: 'Get all tasks'
    })
}

//Todo: get tasks for specific user

export function POST() {
    return NextResponse.json({
        message: 'Post task'
    })
}