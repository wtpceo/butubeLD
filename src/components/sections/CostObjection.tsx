"use client";

import { motion } from "framer-motion";

export default function CostObjection() {
    return (
        <section className="py-32 bg-slate-950 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        "이 정도 서비스면<br />
                        <span className="text-slate-600 line-through decoration-red-500 decoration-4">수백만원</span> 하지 않나요?"
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        대형 기획사 수준의 팀이 움직이지만,<br />
                        <span className="text-yellow-500 font-bold">시스템화된 프로세스</span>로 합리적인 비용을 실현했습니다.
                    </p>
                    <div className="mt-12">
                        <p className="text-lg text-slate-500">
                            견적서를 받아보시면 깜짝 놀라실 겁니다.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
