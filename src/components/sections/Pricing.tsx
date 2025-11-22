"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Starter",
        desc: "부동산 마케팅의 첫걸음",
        price: "150만원",
        features: [
            "매물 촬영 및 편집 (월 4회)",
            "블로그 포스팅 (월 8회)",
            "유튜브 채널 기본 세팅",
            "썸네일 디자인 지원"
        ],
        recommended: false
    },
    {
        name: "Growth",
        desc: "가장 빠른 성장을 위한 선택",
        price: "300만원",
        features: [
            "매물 촬영 및 편집 (월 8회)",
            "기획 영상 (브이로그/정보성) 월 2회",
            "블로그/인스타/유튜브 통합 관리",
            "퍼스널 브랜딩 컨설팅",
            "월간 성과 리포트 제공"
        ],
        recommended: true
    },
    {
        name: "High-End",
        desc: "지역 1등을 위한 독점 파트너십",
        price: "별도 문의",
        features: [
            "촬영/편집 무제한 지원",
            "전담 PD/작가 배정",
            "채널 출연 및 진행 대행",
            "광고 집행 대행 (예산 별도)",
            "경쟁사 분석 및 대응 전략"
        ],
        recommended: false
    }
];

const comparisonFeatures = [
    { name: "매물 영상 촬영/편집", starter: "월 4회", growth: "월 8회", highend: "무제한" },
    { name: "블로그 포스팅", starter: "월 8회", growth: "월 12회", highend: "매일" },
    { name: "기획 영상 (브이로그/정보성)", starter: "-", growth: "월 2회", highend: "월 4회+" },
    { name: "숏폼 (릴스/쇼츠)", starter: "-", growth: "월 4회", highend: "월 8회+" },
    { name: "채널 아트/썸네일 디자인", starter: "O", growth: "O", highend: "O" },
    { name: "퍼스널 브랜딩 컨설팅", starter: "-", growth: "O", highend: "O" },
    { name: "전담 PD/작가 배정", starter: "-", growth: "-", highend: "O" },
    { name: "광고 집행 대행", starter: "-", growth: "-", highend: "O" },
];

export default function Pricing() {
    return (
        <section className="py-24 bg-slate-950" id="pricing">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        성장에 맞는 <span className="text-blue-500">최적의 플랜</span>
                    </motion.h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        단순한 대행이 아닙니다. 소장님의 비즈니스 파트너로서 함께 성장합니다.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={plan.recommended ? "md:-mt-8 md:mb-8" : ""}
                        >
                            <Card className={`h-full flex flex-col bg-slate-900 border-slate-800 ${plan.recommended ? 'border-blue-500 shadow-2xl shadow-blue-900/20 scale-105 relative z-10' : 'hover:border-slate-700 transition-colors'}`}>
                                {plan.recommended && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                        Best Choice
                                    </div>
                                )}
                                <CardHeader className="text-center p-8">
                                    <CardTitle className="text-2xl font-bold text-white mb-2">{plan.name}</CardTitle>
                                    <p className="text-slate-400 text-sm mb-6">{plan.desc}</p>
                                    <div className="text-3xl font-bold text-white">
                                        {plan.price}
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1 p-8 pt-0">
                                    <ul className="space-y-4">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start text-sm text-slate-300">
                                                <Check className={`w-5 h-5 mr-3 shrink-0 ${plan.recommended ? 'text-blue-500' : 'text-slate-500'}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="p-8 pt-0">
                                    <Button className={`w-full h-12 font-bold rounded-xl ${plan.recommended ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>
                                        상담 신청하기
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison Table */}
                <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
                    <div className="p-8 border-b border-slate-800">
                        <h3 className="text-2xl font-bold text-white text-center">기능 상세 비교</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs uppercase bg-slate-900/50 border-b border-slate-800">
                                <tr>
                                    <th className="px-6 py-4 text-slate-400 w-[40%]">주요 기능</th>
                                    <th className="px-6 py-4 text-center text-white font-bold">Starter</th>
                                    <th className="px-6 py-4 text-center text-blue-500 font-bold">Growth</th>
                                    <th className="px-6 py-4 text-center text-white font-bold">High-End</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonFeatures.map((item, index) => (
                                    <tr key={index} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-300">{item.name}</td>
                                        <td className="px-6 py-4 text-center text-slate-400">{item.starter}</td>
                                        <td className="px-6 py-4 text-center text-blue-400 font-medium">{item.growth}</td>
                                        <td className="px-6 py-4 text-center text-slate-400">{item.highend}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
