import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        console.error("RESEND_API_KEY가 설정되지 않았습니다.");
        return NextResponse.json(
            { error: "서버 설정 오류: 이메일 서비스를 사용할 수 없습니다." },
            { status: 500 }
        );
    }

    const resend = new Resend(apiKey);

    try {
        const { email, name } = await request.json();

        // 이메일 유효성 검증
        if (!email || !name) {
            return NextResponse.json(
                { error: "이름과 이메일을 모두 입력해주세요." },
                { status: 400 }
            );
        }

        // 이메일 형식 검증
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "올바른 이메일 형식이 아닙니다." },
                { status: 400 }
            );
        }

        // Resend를 통한 이메일 전송
        const data = await resend.emails.send({
            from: "위즈더플래닝 <wiz@wiztheplanning.com>",
            to: [email],
            subject: "📘 부동산 마케팅 트렌드 2026 전자책",
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <style>
                        body {
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                            line-height: 1.6;
                            color: #333;
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }
                        .header {
                            background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
                            color: white;
                            padding: 30px;
                            text-align: center;
                            border-radius: 10px 10px 0 0;
                        }
                        .content {
                            background: #f8fafc;
                            padding: 30px;
                            border-radius: 0 0 10px 10px;
                        }
                        .button {
                            display: inline-block;
                            background: #2563eb;
                            color: white;
                            padding: 15px 30px;
                            text-decoration: none;
                            border-radius: 8px;
                            font-weight: bold;
                            margin: 20px 0;
                        }
                        .footer {
                            text-align: center;
                            margin-top: 30px;
                            padding-top: 20px;
                            border-top: 1px solid #e2e8f0;
                            color: #64748b;
                            font-size: 14px;
                        }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1 style="margin: 0; font-size: 28px;">📘 부동산 마케팅 트렌드 2026</h1>
                    </div>
                    <div class="content">
                        <p>안녕하세요, <strong>${name}</strong>님!</p>
                        <p>위즈더플래닝입니다. 전자책을 요청해주셔서 감사합니다.</p>
                        
                        <p><strong>부동산 마케팅 트렌드 2026</strong> 전자책에는 다음 내용이 포함되어 있습니다:</p>
                        <ul>
                            <li>2026년 부동산 마케팅 주요 트렌드</li>
                            <li>고객 신뢰를 얻는 콘텐츠 전략</li>
                            <li>유튜브 & 블로그 활용 가이드</li>
                            <li>성공 사례 및 실전 팁</li>
                        </ul>

                        <p><strong>※ 현재는 전자책 PDF 파일을 첨부하는 기능이 아직 추가되지 않았습니다.</strong><br>
                        실제 운영 전에 PDF 파일을 준비하고 아래 코드에 첨부 기능을 추가해야 합니다.</p>

                        <p>궁금하신 점이 있으시면 언제든지 연락주세요!</p>
                        
                        <a href="https://wiztheplanning.com" class="button">홈페이지 방문하기</a>
                    </div>
                    <div class="footer">
                        <p><strong>(주)위즈더플래닝</strong></p>
                        <p>서울시 금천구 디지털로 178 가산퍼블릭 A동 2518호 2519호</p>
                        <p>고객센터: 1670-0704 | 이메일: wiz@wiztheplanning.com</p>
                    </div>
                </body>
                </html>
            `,
        });

        return NextResponse.json(
            { success: true, data },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("이메일 전송 실패:", error);
        return NextResponse.json(
            { error: "이메일 전송에 실패했습니다. 나중에 다시 시도해주세요." },
            { status: 500 }
        );
    }
}
