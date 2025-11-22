"use client";

import { motion } from "framer-motion";
import { Lightbulb, MessageSquareQuote, Sparkles } from "lucide-react";

const values = [
    {
        icon: MessageSquareQuote,
        title: "콘텐츠가 곧 소장님입니다",
        description: "화려한 외모나 연기력이 아닌, 소장님이 가진 철학과 전문 지식이 고객의 마음을 움직입니다."
    },
    {
        icon: Lightbulb,
        title: "생각을 꺼내드립니다",
        description: "머릿속에만 있는 수많은 노하우와 경험들, 전문 작가와 기획자가 질문을 통해 명확한 언어로 정리해드립니다."
    },
    {
        icon: Sparkles,
        title: "진정성을 담습니다",
        description: "꾸며진 모습이 아닌, 소장님만의 고유한 매력과 진심이 담긴 콘텐츠만이 고객에게 신뢰를 줄 수 있습니다."
    }
];

export default function CoreValue() {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />

            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight"
                    >
                        출연 여부는 중요하지 않습니다<br />
                        중요한 것은 <span className="text-yellow-500">'메시지'</span>입니다
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        고객은 소장님의 얼굴보다,<br className="md:hidden" /> 소장님이 가진 <span className="text-white font-semibold">'전문성'</span>과 <span className="text-white font-semibold">'통찰력'</span>을 원합니다.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-slate-600 transition-colors duration-300">
                                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <value.icon className="w-7 h-7 text-yellow-500" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
