"use client";

import { motion } from "framer-motion";
import { Camera, Mic, Lightbulb, Monitor, Zap } from "lucide-react";

const equipment = [
    {
        category: "Camera System",
        items: ["Sony A7S III Cinema Line", "Canon EOS R5", "G Master Lenses"],
        icon: Camera,
        color: "text-red-500"
    },
    {
        category: "Audio System",
        items: ["Sennheiser MKH 416", "Sony UWP-D21 Wireless", "Zoom F6 Recorder"],
        icon: Mic,
        color: "text-blue-500"
    },
    {
        category: "Lighting System",
        items: ["Aputure 600d Pro", "Nanlite Forza 60B", "Professional Softbox"],
        icon: Lightbulb,
        color: "text-yellow-500"
    },
    {
        category: "Edit Workstation",
        items: ["Mac Studio M2 Ultra", "Pro Display XDR", "DaVinci Resolve Studio"],
        icon: Monitor,
        color: "text-purple-500"
    }
];

export default function StudioEquipment() {
    return (
        <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px]"></div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 text-blue-400 mb-6">
                            <Zap className="w-5 h-5" />
                            <span className="font-bold tracking-wider uppercase">Pro Gear</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            압도적인 퀄리티의<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                시네마틱 장비
                            </span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                            장비가 실력을 대변하진 않지만,<br />
                            최고의 결과물은 최고의 장비에서 시작됩니다.<br />
                            총 5,000만원 상당의 시네마 라인 장비를 투입합니다.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">4K</div>
                                <div className="text-slate-500 text-sm">Ultra HD Resolution</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">10bit</div>
                                <div className="text-slate-500 text-sm">Color Depth</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {equipment.map((cat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-4 ${cat.color}`}>
                                    <cat.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{cat.category}</h3>
                                <ul className="space-y-2">
                                    {cat.items.map((item, i) => (
                                        <li key={i} className="text-sm text-slate-400 flex items-center">
                                            <span className="w-1 h-1 bg-slate-500 rounded-full mr-2"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
