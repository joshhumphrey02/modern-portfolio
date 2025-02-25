import { NextRequest, NextResponse, userAgent } from 'next/server';

export async function GET(req: NextRequest) {
	const { device } = userAgent(req);
	console.log(device);
	return NextResponse.json(device);
}
