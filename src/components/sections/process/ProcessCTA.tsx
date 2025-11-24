"use client";

import { Button } from "@/components/ui/button";
import ConsultationModal from "@/components/modals/ConsultationModal";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function ProcessCTA() {
    const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

    return (
        <section className="py-32 bg-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-900 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>

            <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        이제 시작할<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                            준비가 되셨나요?
                        </span>
                    </h2>

                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        더 이상 고민하지 마세요.<br />
                        지금 시작해야 경쟁 부동산보다 앞서갈 수 있습니다.
                    </p>

                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            onClick={() => setIsConsultationModalOpen(true)}
                            size="lg"
                            className="h-16 px-10 text-lg bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold rounded-full w-full sm:w-auto shadow-lg shadow-yellow-900/20"
                        >
                            무료 상담 신청하기
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-16 px-10 text-lg border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white rounded-full w-full sm:w-auto"
                        >
                            포트폴리오 보기
                        </Button>
                    </div>

                    <div className="pt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-slate-400">
                        <div className="flex items-center gap-3 bg-slate-800/50 px-6 py-3 rounded-full border border-slate-700">
                            <Phone className="w-5 h-5 text-yellow-500" />
                            <span className="font-medium">1670-0704</span>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-800/50 px-6 py-3 rounded-full border border-slate-700">
                            <Mail className="w-5 h-5 text-orange-400" />
                            <span className="font-medium">wiz@wiztheplanning.com</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <ConsultationModal
                isOpen={isConsultationModalOpen}
                onClose={() => setIsConsultationModalOpen(false)}
            />
        </section>
    );
}
