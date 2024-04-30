import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        message: 'Get single task'
    })
}

export function DELETE() {
    return NextResponse.json({
        message: 'Delete single task'
    })
}

export function PUT() {
    return NextResponse.json({
        message: 'Update single task'
    })
}