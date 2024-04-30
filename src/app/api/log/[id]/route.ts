import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        message: 'Get all logs'
    })
}

//Todo: get logs for specific user

export function POST() {
    return NextResponse.json({
        message: 'Post logs'
    })
}