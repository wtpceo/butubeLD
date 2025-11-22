"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Clapperboard, PenTool, MonitorPlay, Lightbulb } from "lucide-react";

const teamMembers = [
    {
        role: "Planner",
        title: "총괄 기획",
        desc: "채널의 방향성과 브랜딩 전략 수립",
        icon: Lightbulb
    },
    {
        role: "Scriptwriter",
        title: "전문 작가",
        desc: "고객의 마음을 움직이는 스토리텔링",
        icon: PenTool
    },
    {
        role: "Director",
        title: "촬영 감독",
        desc: "콘텐츠 주제와 맞는 영상미 연출",
        icon: Clapperboard
    },
    {
        role: "Editor",
        title: "편집 감독",
        desc: "시선을 사로잡는 고퀄리티 편집",
        icon: MonitorPlay
    }
];

export default function Team() {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900/50 skew-x-12 transform origin-top-right" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
                    >
                        웹드라마, 영화, 유튜브 제작 경험이 풍부한<br />
                        <span className="text-yellow-500">전문 제작팀</span>이 함께합니다
                    </motion.h2>
                    <p className="text-slate-400">
                        각 분야 최고의 전문가들이 소장님을 위해 하나의 팀으로 움직입니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="bg-slate-900 border-slate-800 hover:border-yellow-500/50 transition-all duration-300 group">
                                <CardContent className="p-8 text-center">
                                    <div className="w-16 h-16 mx-auto mb-6 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                                        <member.icon className="w-8 h-8 text-slate-400 group-hover:text-yellow-500 transition-colors" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1">{member.role}</h3>
                                    <p className="text-yellow-500 text-sm font-medium mb-4">{member.title}</p>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {member.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
