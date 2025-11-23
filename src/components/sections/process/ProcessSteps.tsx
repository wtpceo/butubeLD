"use client";

import { motion } from "framer-motion";
import {
    FileText, Users, Lightbulb, FileEdit, MonitorPlay,
    Camera, Scissors, Palette, Upload, BarChart,
    Home, MessageCircle
} from "lucide-react";

const steps = [
    {
        step: "01",
        title: "계약 & 온보딩",
        desc: "계약서 작성 및 고객 정보 수집",
        icon: FileText,
        time: "30분"
    },
    {
        step: "02",
        title: "채널 단톡방 생성",
        desc: "기획자, 촬영/편집 감독 배정",
        icon: Users,
        time: "즉시"
    },
    {
        step: "03",
        title: "기획 회의",
        desc: "첫 달 콘텐츠 4개 주제 확정",
        icon: Lightbulb,
        time: "60분"
    },
    {
        step: "04",
        title: "대본 제작",
        desc: "전문 작가의 시나리오 작성",
        icon: FileEdit,
        time: "2~3일"
    },
    {
        step: "05",
        title: "OBS 세팅",
        desc: "화면 구성 및 녹화 교육",
        icon: MonitorPlay,
        time: "30분"
    },
    {
        step: "06",
        title: "촬영 진행",
        desc: "전문 장비 세팅 및 촬영",
        icon: Camera,
        time: "3시간"
    },
    {
        step: "07",
        title: "영상 편집",
        desc: "컷편집, 자막, 효과 작업",
        icon: Scissors,
        time: "3~5일"
    },
    {
        step: "08",
        title: "채널 디자인",
        desc: "로고, 배너, 인트로 제작",
        icon: Palette,
        time: "3일"
    },
    {
        step: "09",
        title: "업로드 & 배포",
        desc: "유튜브, 인스타, 블로그 배포",
        icon: Upload,
        time: "즉시"
    },
    {
        step: "10",
        title: "월간 리포트",
        desc: "성과 분석 및 다음 달 전략",
        icon: BarChart,
        time: "매월 1일"
    },
    {
        step: "11",
        title: "매물 영상",
        desc: "급매물 숏폼 영상 제작",
        icon: Home,
        time: "수시"
    },
    {
        step: "12",
        title: "실시간 소통",
        desc: "24시간 피드백 및 케어",
        icon: MessageCircle,
        time: "상시"
    }
];

export default function ProcessSteps() {
    return (
        <section className="py-32 bg-slate-900 text-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        12단계 <span className="text-blue-400">상세 프로세스</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        체계적인 시스템으로 빈틈없이 관리합니다.
                        <br />어떤 과정도 놓치지 않고 꼼꼼하게 챙겨드립니다.
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300"
                        >
                            {/* Step Number */}
                            <div className="absolute top-6 right-6 text-4xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors select-none">
                                {step.step}
                            </div>

                            {/* Icon */}
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                                <step.icon className="w-6 h-6" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                                {step.title}
                            </h3>
                            <p className="text-slate-400 text-sm mb-4 relative z-10 h-10">
                                {step.desc}
                            </p>

                            {/* Time Badge */}
                            <div className="inline-flex items-center text-xs font-medium text-slate-500 bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-700">
                                ⏱ 소요시간: {step.time}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
