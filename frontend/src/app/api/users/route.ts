// app/api/hello/route.ts
import { NextResponse } from 'next/server';


// รองรับ Method GET (เวลาเปิดเข้า URL /api/hello)
export async function GET() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        cache: 'no-store', // บังคับดึงข้อมูลสดใหม่ทุกครั้ง
    });
    if (!res.ok) {
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
    const data = await res.json();
    return NextResponse.json(data);
}

// รองรับ Method POST (เวลาส่งข้อมูลมา)
export async function POST(request: Request) {
    const body = await request.json();
    return NextResponse.json({ message: 'ได้รับข้อมูลเรียบร้อย', data: body });
}