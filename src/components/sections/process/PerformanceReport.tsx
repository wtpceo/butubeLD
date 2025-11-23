"use client";

import { motion } from "framer-motion";
import {
    TrendingUp, Users, MousePointerClick, Search,
    ArrowUpRight, BarChart2, PieChart
} from "lucide-react";

export default function PerformanceReport() {
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
                        매월 받아보는 <span className="text-blue-600">성장 리포트</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        막연한 기대가 아닌, 확실한 데이터로 증명합니다.<br />
                        매월 1일, 채널의 성장을 눈으로 확인하세요.
                    </p>
                </motion.div>

                {/* Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-w-5xl mx-auto"
                >
                    {/* Dashboard Header */}
                    <div className="bg-slate-50 border-b border-slate-200 p-6 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <div className="h-6 w-px bg-slate-300 mx-2"></div>
                            <span className="font-bold text-slate-700">11월 성과 리포트 - ○○부동산 TV</span>
                        </div>
                        <div className="text-sm text-slate-500">Last updated: 2024.11.30</div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="p-8 md:p-12">
                        {/* Top Stats */}
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {[
                                { label: "총 조회수", value: "15,420", change: "+24.5%", icon: TrendingUp, color: "text-blue-600", bg: "bg-blue-50" },
                                { label: "신규 구독자", value: "342명", change: "+12.3%", icon: Users, color: "text-purple-600", bg: "bg-purple-50" },
                                { label: "상담 문의", value: "28건", change: "+5건", icon: MousePointerClick, color: "text-green-600", bg: "bg-green-50" },
                            ].map((stat, index) => (
                                <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center ${stat.color}`}>
                                            <stat.icon className="w-5 h-5" />
                                        </div>
                                        <div className={`flex items-center text-sm font-bold ${stat.color} bg-white px-2 py-1 rounded-lg shadow-sm`}>
                                            <ArrowUpRight className="w-3 h-3 mr-1" />
                                            {stat.change}
                                        </div>
                                    </div>
                                    <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                                    <div className="text-slate-500 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Charts Area (Mockup) */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Left Chart */}
                            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                        <BarChart2 className="w-5 h-5 text-slate-400" />
                                        주간 조회수 추이
                                    </h3>
                                </div>
                                <div className="h-48 flex items-end justify-between gap-2 px-2">
                                    {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                                        <div key={i} className="w-full bg-blue-50 rounded-t-lg relative group">
                                            <div
                                                className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-t-lg transition-all duration-1000"
                                                style={{ height: `${h}%` }}
                                            ></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Keywords */}
                            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                        <Search className="w-5 h-5 text-slate-400" />
                                        유입 키워드 TOP 5
                                    </h3>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { k: "○○동 아파트 시세", v: "32%" },
                                        { k: "○○역 전세", v: "24%" },
                                        { k: "부동산 투자 전망", v: "18%" },
                                        { k: "급매물 추천", v: "15%" },
                                        { k: "신축 분양 정보", v: "11%" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-6 text-center font-bold text-slate-300">{i + 1}</div>
                                            <div className="flex-1">
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="font-medium text-slate-700">{item.k}</span>
                                                    <span className="text-slate-500">{item.v}</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                                    <div className="h-full bg-slate-800 rounded-full" style={{ width: item.v }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
