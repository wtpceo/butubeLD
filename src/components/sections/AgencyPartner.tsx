"use client";

import { motion } from "framer-motion";
import { Clapperboard, Edit, MonitorPlay, PenTool, ArrowRight } from "lucide-react";

export default function AgencyPartner() {
    const steps = [
        {
            icon: PenTool,
            title: "시나리오 기획",
            desc: "소장님의 전문성을\n극대화하는 대본"
        },
        {
            icon: Clapperboard,
            title: "전문 촬영",
            desc: "시네마틱한 영상미와\n편안한 촬영 분위기"
        },
        {
            icon: Edit,
            title: "영상 편집",
            desc: "지루할 틈 없는\n트렌디한 컷 편집"
        },
        {
            icon: MonitorPlay,
            title: "채널 운영",
            desc: "썸네일, 업로드,\n댓글 관리까지 한번에"
        },
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <span className="text-red-600 font-bold tracking-wider text-base md:text-lg uppercase mb-4 block">One-Stop Solution</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                        부동산 <span className="text-red-600">유튜브</span> 운영 대행 파트너
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                        복잡한 유튜브, 이제 <span className="text-slate-900 font-bold border-b-4 border-red-200">전문가에게 맡기고 본업에 집중하세요.</span><br className="hidden md:block" />
                        기획부터 운영까지 완벽하게 해결해드립니다.
                    </p>
                </motion.div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 -z-10 transform translate-y-1/2"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center relative z-10">
                                    <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:rotate-3 transition-all duration-300 shadow-sm">
                                        <step.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed whitespace-pre-line text-sm">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Arrow for Mobile */}
                                {index < steps.length - 1 && (
                                    <div className="md:hidden flex justify-center py-4">
                                        <ArrowRight className="w-6 h-6 text-slate-300 transform rotate-90" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
