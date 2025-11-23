"use client";

import { motion } from "framer-motion";
import {
    Video, Scissors, Share2, Layout,
    BarChart3, MessageCircle
} from "lucide-react";

const services = [
    {
        icon: Video,
        title: "전문 촬영",
        desc: "방송국 출신 감독 방문",
        items: ["월 1회 방문 촬영", "4K 고화질 장비", "전문 조명/음향", "OBS 세팅 지원"],
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        icon: Scissors,
        title: "영상 편집",
        desc: "트렌디한 예능형 편집",
        items: ["메인 영상 4편", "쇼츠 영상 4편", "썸네일 4개", "자막/BGM/효과"],
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    },
    {
        icon: Share2,
        title: "멀티 배포",
        desc: "원소스 멀티유즈",
        items: ["유튜브 롱폼/쇼츠", "인스타 릴스", "네이버 클립", "블로그 포스팅"],
        color: "text-pink-500",
        bg: "bg-pink-500/10",
        border: "border-pink-500/20"
    },
    {
        icon: Layout,
        title: "채널 브랜딩",
        desc: "전문적인 채널 디자인",
        items: ["로고/배너 제작", "인트로/아웃트로", "채널 키워드 세팅", "재생목록 관리"],
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20"
    },
    {
        icon: BarChart3,
        title: "성과 관리",
        desc: "데이터 기반 성장",
        items: ["월간 성과 리포트", "조회수/구독자 분석", "SEO 최적화", "키워드 전략"],
        color: "text-green-500",
        bg: "bg-green-500/10",
        border: "border-green-500/20"
    },
    {
        icon: MessageCircle,
        title: "전담 케어",
        desc: "24시간 밀착 관리",
        items: ["1:1 전담 기획자", "실시간 단톡방", "콘텐츠 기획 회의", "즉각 피드백 반영"],
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20"
    }
];

export default function ServiceIncludes() {
    return (
        <section className="py-32 bg-slate-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        월 55만원으로 누리는<br />
                        <span className="text-blue-600">완벽한 마케팅 팀</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        편집자 한 명 인건비의 1/6 가격으로<br />
                        기획, 촬영, 편집, 디자인, 마케팅 전문가를 모두 고용하세요.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <service.icon className="w-7 h-7" />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-slate-500 font-medium mb-6">
                                {service.desc}
                            </p>

                            {/* Items */}
                            <ul className="space-y-3">
                                {service.items.map((item, i) => (
                                    <li key={i} className="flex items-center text-slate-600">
                                        <div className={`w-1.5 h-1.5 rounded-full mr-3 ${service.color.replace('text-', 'bg-')}`}></div>
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 max-w-4xl mx-auto bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        이 모든 것이 월 55만원 (VAT 별도)
                    </h3>
                    <p className="text-slate-400 mb-8">
                        추가 비용 0원, 3개월 계약 후 월 단위 연장 가능
                    </p>
                    <div className="flex justify-center gap-8 text-sm md:text-base text-slate-300">
                        <div className="flex items-center gap-2">
                            <span className="text-blue-400">✓</span> 총 16개 콘텐츠
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-400">✓</span> 블로그 연동
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-400">✓</span> 채널 관리 포함
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
