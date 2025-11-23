"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, MonitorPlay, Users, Settings, Palette, CheckSquare } from "lucide-react";

export default function BehindScenes() {
    const items = [
        { title: "촬영 현장", icon: Camera, desc: "전문 장비와 조명 세팅" },
        { title: "편집 작업", icon: MonitorPlay, desc: "디테일한 컷편집" },
        { title: "기획 회의", icon: Users, desc: "콘텐츠 전략 수립" },
        { title: "장비 세팅", icon: Settings, desc: "최적의 촬영 환경" },
        { title: "디자인 작업", icon: Palette, desc: "채널 브랜딩" },
        { title: "QA 체크", icon: CheckSquare, desc: "최종 퀄리티 검수" }
    ];

    return (
        <section className="py-32 bg-slate-50">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        실제 제작 과정을 <span className="text-blue-600">공개합니다</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        말뿐인 마케팅이 아닙니다.<br />
                        위즈더플래닝은 실제 현장에서 발로 뜁니다.
                    </p>
                </motion.div>

                {/* Main Video/Image Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="aspect-video bg-slate-900 rounded-3xl mb-8 relative overflow-hidden shadow-2xl group"
                >
                    {/* Placeholder for Video */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform cursor-pointer border border-white/20">
                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                        </div>
                        <p className="text-lg font-medium text-slate-300">제작 프로세스 하이라이트</p>
                    </div>
                </motion.div>

                {/* Grid Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="aspect-[4/3] bg-white rounded-2xl overflow-hidden relative group shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
                        >
                            {index === 0 ? (
                                <Image
                                    src="/images/behind-shooting.jpg"
                                    alt="촬영 현장"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    unoptimized
                                />
                            ) : index === 2 ? (
                                <Image
                                    src="/images/planning-meeting.jpg"
                                    alt="기획 회의"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    unoptimized
                                />
                            ) : index === 3 ? (
                                <Image
                                    src="/images/equipment-bag.jpg"
                                    alt="장비 세팅"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    unoptimized
                                />
                            ) : (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 group-hover:bg-slate-100 transition-colors">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-400 mb-3 shadow-sm group-hover:scale-110 transition-transform">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <p className="text-slate-600 font-medium">{item.title}</p>
                                </div>
                            )}

                            {/* Overlay Info */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <div className="text-white font-bold text-lg mb-1">{item.title}</div>
                                <div className="text-slate-300 text-sm">{item.desc}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
