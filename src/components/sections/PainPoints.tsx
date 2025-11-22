"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AlertTriangle, Lock, EyeOff, Siren } from "lucide-react";

const painPoints = [
    {
        icon: Siren,
        title: "끊이지 않는 전세 사기 뉴스",
        description: "매일 쏟아지는 부동산 사기 뉴스로 인해 고객들의 불안감은 극에 달해 있습니다."
    },
    {
        icon: EyeOff,
        title: "보이지 않는 중개사",
        description: "블로그 글과 사진만으로는 '누가' 중개하는지 알 수 없습니다. 익명성은 곧 불신입니다."
    },
    {
        icon: Lock,
        title: "검증되지 않은 안전성",
        description: "수억 원이 오가는 거래, 고객은 '사고 없는 안전한 부동산'이라는 증거를 원합니다."
    },
    {
        icon: AlertTriangle,
        title: "매물 중심 마케팅의 한계",
        description: "매물은 누구나 올릴 수 있습니다. 하지만 '신뢰'는 아무나 줄 수 없습니다."
    }
];

export default function PainPoints() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                    >
                        수억 원이 오가는 거래, 고객은<br />
                        <span className="text-red-600">'내 결정을 도와줄 전문가'</span>를 찾고 있습니다
                    </motion.h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        화려한 매물 사진보다 중요한 것은, 내 자산을 지켜줄 수 있는 '확실한 전문가'입니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                                <CardContent className="p-8 text-center">
                                    <div className="w-16 h-16 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center">
                                        <point.icon className="w-8 h-8 text-red-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{point.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed word-keep-all">
                                        {point.description}
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
