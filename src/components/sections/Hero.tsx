"use client";

import { Button } from "@/components/ui/button";
import EbookModal from "@/components/modals/EbookModal";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function Hero() {
    const [isEbookModalOpen, setIsEbookModalOpen] = useState(false);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 z-0" />

            {/* Abstract Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-flex items-center py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium mb-6">
                        <ShieldCheck className="w-4 h-4 mr-2 text-yellow-500" />
                        신뢰가 곧 매출이 되는 시대
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white leading-tight tracking-tight">
                        전세 사기, 부동산 불안...<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                            고객은 '안전한 중개사'를 찾고 있습니다
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        매물만으로는 더 이상 신뢰를 얻을 수 없습니다.<br />
                        <span className="text-white font-semibold">영상 기록</span>으로 증명된 투명한 중개만이 살아남습니다.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            onClick={() => setIsEbookModalOpen(true)}
                            size="lg"
                            className="h-14 px-8 text-lg bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold rounded-full"
                        >
                            부동산 마케팅 트랜드 2026 전자책 받기
                        </Button>
                    </div>
                </motion.div>
            </div>

            <EbookModal
                isOpen={isEbookModalOpen}
                onClose={() => setIsEbookModalOpen(false)}
            />
        </section>
    );
}
