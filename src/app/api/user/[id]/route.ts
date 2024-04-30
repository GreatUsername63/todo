import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        message: 'Get single user'
    })
}

export function DELETE() {
    return NextResponse.json({
        message: 'Delete single user'
    })
}

export function PUT() {
    return NextResponse.json({
        message: 'Update single user'
    })
}