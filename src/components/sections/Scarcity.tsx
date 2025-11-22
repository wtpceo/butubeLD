"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function Scarcity() {
    return (
        <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                    >
                        {/* Warning Strip */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500" />

                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-500/10 mb-8 ring-1 ring-yellow-500/30">
                            <AlertTriangle className="w-10 h-10 text-yellow-500" />
                        </div>

                        <h2 className="text-2xl md:text-4xl font-bold mb-6">
                            죄송하지만, <span className="text-yellow-500">모든 분과 함께할 수 없습니다</span>
                        </h2>

                        <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                            저희는 공장형 마케팅 대행사가 아닙니다.<br />
                            한 분 한 분의 브랜딩에 집중하기 위해<br />
                            <span className="font-bold text-white bg-slate-700/50 px-2 py-1 rounded">담당 지역이 겹칠 경우 진행이 불가능합니다.</span>
                        </p>

                        <div className="inline-block bg-slate-950 rounded-lg px-8 py-4 border border-slate-800 shadow-inner">
                            <p className="text-sm text-slate-400 font-medium">
                                <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2 animate-pulse" />
                                현재 귀하 지역의 TO가 남아있는지 확인해보세요.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
