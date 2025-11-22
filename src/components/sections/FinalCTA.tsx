"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-70 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-900 leading-tight tracking-tight">
                            2026년, 2027년...<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                신뢰 자산이 가장 많은 중개사
                            </span>가<br />
                            시장을 독점하게 됩니다
                        </h2>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                            지금부터 쌓아 올린 영상 기록이 미래의 소장님을 지켜줄 것입니다.<br />
                            더 늦기 전에 '신뢰 아카이브'를 시작하세요.
                        </p>

                        <form className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100 max-w-2xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2 text-left">
                                    <label className="text-sm font-medium text-slate-700 ml-1">성함</label>
                                    <Input placeholder="홍길동" className="bg-slate-50 border-slate-200 h-12" />
                                </div>
                                <div className="space-y-2 text-left">
                                    <label className="text-sm font-medium text-slate-700 ml-1">연락처</label>
                                    <Input placeholder="010-0000-0000" className="bg-slate-50 border-slate-200 h-12" />
                                </div>
                            </div>
                            <div className="space-y-2 text-left mb-8">
                                <label className="text-sm font-medium text-slate-700 ml-1">지역</label>
                                <Input placeholder="예: 서울시 강남구 역삼동" className="bg-slate-50 border-slate-200 h-12" />
                            </div>

                            <Button className="w-full h-16 text-xl font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30 rounded-xl transition-all hover:scale-[1.02]">
                                미래를 위한 무료 상담 신청하기 <ArrowRight className="ml-2 w-6 h-6" />
                            </Button>

                            <p className="mt-6 text-sm text-slate-400">
                                * 상담 신청 시 <span className="text-blue-600 font-semibold">마케팅 진단 리포트</span>를 무료로 제공해드립니다.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
