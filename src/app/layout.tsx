import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "(주)위즈더플래닝 - 부동산 전문 마케팅 솔루션",
  description: "공인중개사님을 지역 1등 전문가로 만들어드립니다. 촬영부터 편집, 채널 관리까지 원스톱 부동산 마케팅 서비스.",
  keywords: ["부동산마케팅", "공인중개사마케팅", "유튜브촬영", "블로그마케팅", "위즈더플래닝", "부동산유튜브", "중개사브랜딩"],
  openGraph: {
    title: "(주)위즈더플래닝 - 부동산 전문 마케팅 솔루션",
    description: "공인중개사님을 지역 1등 전문가로 만들어드립니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "위즈더플래닝",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
