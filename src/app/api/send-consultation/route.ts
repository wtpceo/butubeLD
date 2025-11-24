import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // Initialize Resend inside the handler to avoid build-time errors if env var is missing
    const resend = new Resend('re_DiE3N5X3_DtTPW4V8mVn7i5WFJNXLT7qU');

    try {
        const body = await request.json();
        const { name, phone, inquiry } = body;

        if (!name || !phone) {
            return NextResponse.json(
                { error: '이름과 연락처는 필수입니다.' },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: '위즈더플래닝 <onboarding@resend.dev>',
            to: ['ceo@wiztheplanning.com'],
            subject: `[상담신청] ${name}님의 부동산 유튜브 상담 문의`,
            html: `
                <h1>새로운 상담 신청이 접수되었습니다.</h1>
                <p><strong>이름/부동산명:</strong> ${name}</p>
                <p><strong>연락처:</strong> ${phone}</p>
                <p><strong>문의 내용:</strong></p>
                <p>${inquiry || '내용 없음'}</p>
            `,
        });

        if (error) {
            console.error('Resend API error:', error);
            return NextResponse.json(
                { error: '이메일 전송에 실패했습니다.', details: error },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Server error details:', error);
        return NextResponse.json(
            { error: '서버 오류가 발생했습니다.', details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}
