"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Video, History } from "lucide-react";
import Image from "next/image";

export default function TrustStrategy() {
    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    {/* Left: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            영상은 조작할 수 없는<br />
                            <span className="text-yellow-500">'투명한 증거'</span>입니다
                        </h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                            블로그의 글은 대필할 수 있고, 사진은 보정할 수 있습니다.<br />
                            하지만 영상 속 소장님의 눈빛, 목소리, 전문성은 거짓말을 하지 않습니다.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0">
                                    <Video className="w-6 h-6 text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">유튜브 & 릴스 아카이브</h3>
                                    <p className="text-slate-400">수년간 쌓아온 영상 기록이 소장님의 성실함과 전문성을 증명합니다.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0">
                                    <History className="w-6 h-6 text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">안전 거래의 역사</h3>
                                    <p className="text-slate-400">"이 부동산은 5년 전부터 사고 없이 꾸준히 활동했구나"라는 확신을 줍니다.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Mobile Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-[300px] h-[600px] border-8 border-slate-800 rounded-[3rem] bg-slate-950 overflow-hidden shadow-2xl">
                            {/* Phone Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20" />

                            {/* Screen Content */}
                            <div className="relative w-full h-full bg-slate-900">
                                <Image
                                    src="/images/trust-archive-mockup.png"
                                    alt="Trust Archive Mobile Mockup"
                                    fill
                                    sizes="(max-width: 768px) 300px, 400px"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
