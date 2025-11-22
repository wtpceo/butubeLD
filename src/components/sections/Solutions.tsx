"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Camera, Mic, Star, TrendingUp } from "lucide-react";

export default function Solutions() {
    return (
        <section className="py-24 bg-slate-900" id="solutions">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Badge className="mb-4 bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 border-yellow-500/20">Our Solutions</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            소장님의 성향에 맞는 <span className="text-yellow-500">맞춤형 전략</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            모든 중개사가 카메라 앞에서 연기를 할 필요는 없습니다.<br />
                            가장 자연스럽고 전문적인 모습을 담아드립니다.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Track A */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="h-full bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden group hover:border-yellow-500/50 transition-colors">
                            <div className="h-2 bg-gradient-to-r from-yellow-400 to-orange-500" />
                            <CardHeader>
                                <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Star className="w-6 h-6 text-yellow-500" />
                                </div>
                                <CardTitle className="text-2xl text-white">Track A. 스타 중개사</CardTitle>
                                <p className="text-slate-400">퍼스널 브랜딩에 집중하고 싶은 분</p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-3">
                                    <li className="flex items-start text-slate-300">
                                        <Camera className="w-5 h-5 mr-3 text-yellow-500 shrink-0" />
                                        <span>전문적인 인터뷰 및 브이로그 촬영</span>
                                    </li>
                                    <li className="flex items-start text-slate-300">
                                        <TrendingUp className="w-5 h-5 mr-3 text-yellow-500 shrink-0" />
                                        <span>지역 내 인지도 급상승 전략</span>
                                    </li>
                                </ul>
                                <div className="mt-6 p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                                    <p className="text-sm text-slate-400">
                                        "카메라 앞에서는 것이 두렵지 않고, 나 자신을 브랜드로 만들고 싶은 소장님께 추천합니다."
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Track B */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Card className="h-full bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden group hover:border-blue-500/50 transition-colors">
                            <div className="h-2 bg-gradient-to-r from-blue-400 to-cyan-500" />
                            <CardHeader>
                                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Mic className="w-6 h-6 text-blue-500" />
                                </div>
                                <CardTitle className="text-2xl text-white">Track B. 전문가 중개사</CardTitle>
                                <p className="text-slate-400">얼굴 노출 없이 신뢰를 얻고 싶은 분</p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-3">
                                    <li className="flex items-start text-slate-300">
                                        <Mic className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                                        <span>고품격 보이스오버 & 자료 화면</span>
                                    </li>
                                    <li className="flex items-start text-slate-300">
                                        <TrendingUp className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                                        <span>시장 분석 및 정보 전달 중심</span>
                                    </li>
                                </ul>
                                <div className="mt-6 p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                                    <p className="text-sm text-slate-400">
                                        "얼굴 노출은 부담스럽지만, 목소리와 전문 지식만으로 고객의 신뢰를 얻고 싶은 소장님께 추천합니다."
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
