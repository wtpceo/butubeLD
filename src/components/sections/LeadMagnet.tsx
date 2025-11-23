"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function LeadMagnet() {
    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden" id="lead-magnet">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left: 3D Book Mockup Area */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-[300px] md:w-[400px] aspect-[1/1.4] group perspective-1000">
                            <div className="relative w-full h-full transform transition-transform duration-500 group-hover:rotate-y-12 preserve-3d">
                                {/* Book Cover Image */}
                                <div className="absolute inset-0 rounded-r-lg rounded-l-sm shadow-2xl overflow-hidden">
                                    <Image
                                        src="/images/ebook-cover.jpg"
                                        alt="Real Estate Content Bible"
                                        fill
                                        sizes="(max-width: 768px) 300px, 400px"
                                        className="object-cover"
                                        unoptimized
                                    />
                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                                </div>

                                {/* Book Spine (Simulated) */}
                                <div className="absolute left-0 top-0 bottom-0 w-4 bg-slate-800 -translate-x-full origin-right transform rotate-y-90 rounded-l-sm" />
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -top-6 -right-6 md:right-12 bg-yellow-500 text-slate-900 font-bold py-2 px-4 rounded-full shadow-lg transform rotate-12 z-20">
                            Free Download
                        </div>
                    </motion.div>

                    {/* Right: Copy & Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            부동산 콘텐츠 아이디어<br />
                            <span className="text-yellow-500">40가지를 무료로 드립니다</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            "무슨 영상을 찍어야 할지 모르겠어요."<br />
                            더 이상 고민하지 마세요. 조회수가 보장된 검증된 주제들을 모았습니다.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "지역 호재 분석 템플릿",
                                "초보자도 할 수 있는 브이로그 가이드",
                                "고객 문의를 부르는 썸네일 공식",
                                "유튜브 알고리즘 필수 체크리스트"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <form className="space-y-4 bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <div className="grid grid-cols-2 gap-4">
                                <Input placeholder="성함" className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500" />
                                <Input placeholder="연락처" className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500" />
                            </div>
                            <Button className="w-full h-12 text-lg font-bold bg-yellow-500 hover:bg-yellow-600 text-slate-900">
                                지금 바로 이메일로 받기
                            </Button>
                            <p className="text-xs text-center text-slate-500">
                                * 스팸 문자는 절대 보내지 않습니다.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
