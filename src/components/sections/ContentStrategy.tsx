"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

export default function ContentStrategy() {
    const contents = [
        {
            badge: "아파트 분석",
            badgeColor: "bg-blue-100 text-blue-700",
            title: "마포구 대장 아파트 3곳, 지금 사야 할까요?",
            desc: "지역 시세 분석 • 매수 타이밍",
            image: "/images/content-thumb-1.jpg"
        },
        {
            badge: "상가 투자",
            badgeColor: "bg-purple-100 text-purple-700",
            title: "강남 꼬마빌딩, 수익률 4% 맞추는 비결",
            desc: "상권 분석 • 수익률 계산",
            image: "/images/content-thumb-2.jpg"
        },
        {
            badge: "타운하우스",
            badgeColor: "bg-green-100 text-green-700",
            title: "용인 타운하우스, 살아본 사람만 아는 장단점",
            desc: "실거주 후기 • 체크리스트",
            image: "/images/content-thumb-3.png"
        },
        {
            badge: "토지 투자",
            badgeColor: "bg-yellow-100 text-yellow-700",
            title: "평택 토지 투자, 절대 실패하지 않는 3가지 원칙",
            desc: "개발 호재 • 규제 분석",
            image: "/images/content-thumb-4.jpg"
        },
        {
            badge: "재개발/재건축",
            badgeColor: "bg-red-100 text-red-700",
            title: "한남 뉴타운, 조합원 입주권 프리미엄 분석",
            desc: "사업 진행 현황 • 투자 가치",
            image: "/images/content-thumb-5.jpg"
        },
        {
            badge: "세무/법률",
            badgeColor: "bg-slate-100 text-slate-700",
            title: "양도세 1억 아끼는 '일시적 2주택' 활용법",
            desc: "절세 전략 • 법률 상식",
            image: "/images/content-thumb-6.png"
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                            대한민국 1등이 아닌,<br />
                            <span className="text-blue-600">소장님 지역의 1등</span>을 만들어드립니다
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            모든 지역을 다 잘할 필요는 없습니다.<br />
                            소장님이 계신 그 곳에서, <span className="font-bold text-slate-900">대체 불가능한 전문가</span>로 만들어드립니다.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {contents.map((content, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer bg-white h-full flex flex-col">
                                <div className="relative h-48 bg-slate-200 overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10" />
                                    <div className="absolute inset-0 flex items-center justify-center z-20">
                                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <Play className="w-5 h-5 text-slate-900 ml-1" />
                                        </div>
                                    </div>
                                    <Image
                                        src={content.image}
                                        alt={content.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <CardContent className="p-6 flex-1 flex flex-col">
                                    <div className="mb-auto">
                                        <Badge className={`mb-3 border-none ${content.badgeColor}`}>{content.badge}</Badge>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">
                                            {content.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-4">{content.desc}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
