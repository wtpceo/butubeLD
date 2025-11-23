"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Clock, Coffee, ArrowRight } from "lucide-react";

export default function OfficeVisit() {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            언제든지 편하게<br />
                            <span className="text-blue-600">방문해주세요</span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                            투명성이 곧 신뢰입니다.<br />
                            실제 작업 공간을 직접 확인하시고 상담받으세요.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">오시는 길</h3>
                                    <p className="text-slate-600">서울시 금천구 디지털로 178 가산퍼블릭 A동 2518호</p>
                                    <p className="text-slate-500 text-sm mt-1">가산디지털단지역 도보 5분 / 주차 가능</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">운영 시간</h3>
                                    <p className="text-slate-600">평일 10:00 ~ 18:00</p>
                                    <p className="text-slate-500 text-sm mt-1">주말/공휴일 사전 예약 시 가능</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                    <Coffee className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">방문 혜택</h3>
                                    <p className="text-slate-600">웰컴 드링크 & 포트폴리오 시연</p>
                                    <p className="text-slate-500 text-sm mt-1">실제 촬영/편집 장비 체험 가능</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <Button className="h-14 px-8 text-lg bg-slate-900 hover:bg-slate-800 rounded-full">
                                방문 예약하기
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Map/Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative">
                            {/* Map Placeholder */}
                            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                                    <p className="text-slate-500 font-medium">지도 영역</p>
                                </div>
                            </div>

                            {/* Overlay Card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-xs font-bold text-blue-600 mb-1">OFFICE</div>
                                        <div className="font-bold text-slate-900">위즈더플래닝 본사</div>
                                    </div>
                                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                                        <ArrowRight className="w-5 h-5 text-slate-600" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
