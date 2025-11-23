"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ProcessHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-950 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-5xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-sm font-medium">Premium Real Estate Marketing</span>
                    </motion.div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight mb-8">
                        부동산 유튜브,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            프로세스가 다릅니다
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                        계약부터 촬영, 편집, 업로드까지.<br className="md:hidden" />
                        모든 과정을 투명하게 공개하고 체계적으로 관리합니다.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mb-12">
                        {[
                            { label: "월 콘텐츠", value: "16개", desc: "롱폼+쇼츠+블로그" },
                            { label: "제작 기간", value: "2주", desc: "첫 영상 업로드" },
                            { label: "전담 팀", value: "4명", desc: "기획/촬영/편집/관리" },
                            { label: "소통", value: "24h", desc: "실시간 피드백" },
                        ].map((stat, index) => (
                            <div key={index} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm font-medium text-blue-400 mb-1">{stat.label}</div>
                                <div className="text-xs text-slate-500">{stat.desc}</div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            size="lg"
                            className="h-16 px-8 text-lg bg-blue-600 hover:bg-blue-500 text-white rounded-full w-full sm:w-auto"
                        >
                            프로세스 자세히 보기
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-16 px-8 text-lg border-white/20 text-white hover:bg-white/10 rounded-full w-full sm:w-auto"
                        >
                            무료 상담 신청하기
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
