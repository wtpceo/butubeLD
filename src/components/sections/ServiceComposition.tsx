"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Camera, Clapperboard, FileText, Megaphone, Share2, Youtube } from "lucide-react";

const services = [
    {
        icon: Camera,
        title: "월 1회 정기 방문 촬영",
        desc: "전문 촬영팀이 직접 방문하여 고퀄리티 영상 소스를 확보합니다.",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10"
    },
    {
        icon: Clapperboard,
        title: "프리미엄 콘텐츠 제작",
        desc: "기획 영상 2편 + 고정 시리즈 1편 (시세/정보) + 매물 영상 4편 (자료 제공 시)",
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        icon: Share2,
        title: "멀티 채널 배포",
        desc: "유튜브(롱폼/쇼츠), 인스타그램(릴스), 네이버 클립 동시 업로드",
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        icon: FileText,
        title: "블로그 원고 제공",
        desc: "영상 내용을 바탕으로 블로그 포스팅이 가능한 원고를 제공해드립니다.",
        color: "text-green-500",
        bg: "bg-green-500/10"
    }
];

export default function ServiceComposition() {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden" id="service">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-900 to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-slate-900 to-transparent opacity-50" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Badge className="mb-4 bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20">All-in-One Service</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            촬영부터 배포까지,<br />
                            <span className="text-blue-500">완벽한 원스톱 시스템</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            소장님은 중개에만 집중하세요. 마케팅의 모든 과정은 저희가 알아서 처리해드립니다.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors group">
                                <CardContent className="p-8 flex items-start space-x-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${service.bg} group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className={`w-7 h-7 ${service.color}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                        <p className="text-slate-400 leading-relaxed word-keep-all">
                                            {service.desc}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Detailed Breakdown */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl border border-slate-800 p-8 md:p-12"
                >
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">월간 제공 서비스 상세</h3>
                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                            <div className="flex items-center mb-4 md:mb-0">
                                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mr-4">
                                    <Youtube className="w-5 h-5 text-red-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">유튜브 콘텐츠</h4>
                                    <p className="text-sm text-slate-400">롱폼 영상 & 쇼츠</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-white font-bold">기획 영상 2편 + 고정 시리즈 1편</div>
                                <div className="text-slate-400 text-sm">+ 매물 영상 4편 (자료 제공 시)</div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                            <div className="flex items-center mb-4 md:mb-0">
                                <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center mr-4">
                                    <Share2 className="w-5 h-5 text-pink-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">숏폼 확산</h4>
                                    <p className="text-sm text-slate-400">인스타그램 릴스 & 네이버 클립</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-white font-bold">모든 영상 숏폼 재가공</div>
                                <div className="text-slate-400 text-sm">3개 플랫폼 동시 업로드</div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                            <div className="flex items-center mb-4 md:mb-0">
                                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mr-4">
                                    <FileText className="w-5 h-5 text-green-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">블로그 마케팅</h4>
                                    <p className="text-sm text-slate-400">SEO 최적화 원고</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-white font-bold">영상 기반 블로그 원고 제공</div>
                                <div className="text-slate-400 text-sm">키워드 상위 노출 전략 반영</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
