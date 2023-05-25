import { NextResponse } from 'next/server'

export async function GET (): Promise<NextResponse> {
  const data = {
    message: 'Hello World!'
  }
  return NextResponse.json({ data })
}
