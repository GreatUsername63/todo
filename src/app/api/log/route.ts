import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        message: 'Get single log'
    })
}

export function DELETE() {
    return NextResponse.json({
        message: 'Delete single log'
    })
}

export function PUT() {
    return NextResponse.json({
        message: 'Update single log'
    })
}