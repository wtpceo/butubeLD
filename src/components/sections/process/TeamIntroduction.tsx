"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Users, Award, Briefcase, Sparkles, Star } from "lucide-react";

const team = [
    {
        name: "김○○",
        role: "대표 / 총괄 프로듀서",
        experience: "20년 영상 경력",
        achievement: "200+ 채널 제작",
        desc: "부동산 마케팅의 판도를 바꿉니다.",
        icon: Briefcase,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        name: "이○○",
        role: "콘텐츠 전략 기획자",
        experience: "부동산 마케팅 5년",
        achievement: "월 30건 기획",
        desc: "팔리는 콘텐츠를 기획합니다.",
        icon: Sparkles,
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        name: "박○○",
        role: "촬영 디렉터",
        experience: "방송국 출신",
        achievement: "전문 장비 보유",
        desc: "최상의 앵글을 찾아냅니다.",
        icon: Award,
        color: "text-pink-500",
        bg: "bg-pink-500/10"
    },
    {
        name: "최○○",
        role: "편집 디렉터",
        experience: "1,000+ 영상 편집",
        achievement: "평균 3일 납품",
        desc: "시선을 사로잡는 편집.",
        icon: Users,
        color: "text-green-500",
        bg: "bg-green-500/10"
    }
];

export default function TeamIntroduction() {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        최고의 전문가들이 <span className="text-blue-600">함께합니다</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        각 분야 10년 이상의 베테랑들이<br />
                        사장님의 유튜브 채널을 성공으로 이끕니다.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 ${member.bg} ${member.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <member.icon className="w-8 h-8" />
                            </div>

                            {/* Role & Name */}
                            <div className="mb-4">
                                <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">{member.role}</div>
                                <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                            </div>

                            {/* Description */}
                            <p className="text-slate-600 mb-6 italic">
                                "{member.desc}"
                            </p>

                            {/* Stats */}
                            <div className="space-y-3 pt-6 border-t border-slate-100">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-500">경력</span>
                                    <span className="font-bold text-slate-900">{member.experience}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-500">실적</span>
                                    <span className="font-bold text-blue-600">{member.achievement}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 flex justify-center"
                >
                    <div className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full shadow-xl">
                        <div className="flex -space-x-2">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-xs">
                                    <Users className="w-4 h-4" />
                                </div>
                            ))}
                        </div>
                        <span className="font-medium border-l border-slate-700 pl-3">
                            총 12명의 전문가 대기 중
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
