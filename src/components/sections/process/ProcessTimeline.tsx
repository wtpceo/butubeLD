"use client";

import { motion } from "framer-motion";
import { Calendar, MessageSquare, Video, Upload, CheckCircle2 } from "lucide-react";

const timeline = [
    {
        day: "Day 1",
        title: "계약 및 착수",
        desc: "계약서 작성 및 단톡방 개설",
        icon: Calendar,
        color: "bg-blue-500"
    },
    {
        day: "Day 3",
        title: "기획 회의",
        desc: "콘텐츠 주제 및 일정 확정",
        icon: MessageSquare,
        color: "bg-purple-500"
    },
    {
        day: "Day 7",
        title: "촬영 진행",
        desc: "전문 촬영팀 방문 (2~3시간)",
        icon: Video,
        color: "bg-pink-500"
    },
    {
        day: "Day 14",
        title: "첫 업로드",
        desc: "편집 완료 및 채널 배포",
        icon: Upload,
        color: "bg-green-500"
    }
];

export default function ProcessTimeline() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 mb-6">
                        <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                        <span className="text-sm font-medium">Fast Track System</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        계약부터 첫 영상까지 <span className="text-blue-600">단 2주</span>
                    </h2>
                    <p className="text-xl text-slate-600">
                        복잡한 준비 과정 없이, 사장님은 문만 열어주세요.
                    </p>
                </motion.div>

                {/* Timeline Visual */}
                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 rounded-full">
                        <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 w-full opacity-20"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative group"
                            >
                                {/* Card */}
                                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center md:text-left">
                                    {/* Icon Bubble */}
                                    <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-6 mx-auto md:mx-0 transform group-hover:rotate-6 transition-transform`}>
                                        <item.icon className="w-8 h-8" />
                                    </div>

                                    {/* Day Badge */}
                                    <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-bold mb-3">
                                        {item.day}
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Arrow (Mobile Only) */}
                                {index < timeline.length - 1 && (
                                    <div className="md:hidden flex justify-center py-4 text-slate-300">
                                        ↓
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 text-slate-500 bg-slate-50 px-6 py-3 rounded-full border border-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm">모든 과정은 전담 매니저가 리드합니다</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
