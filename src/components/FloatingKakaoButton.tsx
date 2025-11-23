"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingKakaoButton() {
    return (
        <motion.a
            href="#" // 실제 카카오톡 채널 URL로 변경 필요 (예: http://pf.kakao.com/_xxxxxx)
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 z-50 group"
        >
            <div className="relative">
                {/* Pulse Animation */}
                <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-75" />

                {/* Button */}
                <div className="relative bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-full p-4 shadow-2xl transition-all duration-300 flex items-center space-x-3">
                    <MessageCircle className="w-7 h-7" />
                    <span className="hidden group-hover:block font-bold text-sm pr-2 whitespace-nowrap">
                        카카오톡 문의
                    </span>
                </div>
            </div>
        </motion.a>
    );
}
