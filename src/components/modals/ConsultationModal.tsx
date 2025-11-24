"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Send, X, MessageSquare } from "lucide-react";
import { useState } from "react";

interface ConsultationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [inquiry, setInquiry] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/send-consultation", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, phone, inquiry }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "전송 중 오류가 발생했습니다.");
            }

            setIsSuccess(true);
            setTimeout(() => {
                onClose();
                setIsSuccess(false);
                setName("");
                setPhone("");
                setInquiry("");
            }, 3000);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    if (typeof window !== "undefined") {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
                            <div className="p-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white relative">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                                <div className="flex items-center space-x-3 mb-2">
                                    <MessageSquare className="w-8 h-8" />
                                    <h3 className="text-2xl font-bold">무료 상담 신청</h3>
                                </div>
                                <p className="text-yellow-50">전문가가 직접 채널을 진단해드립니다.</p>
                            </div>

                            <div className="p-6">
                                {!isSuccess ? (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                이름 / 부동산명
                                            </label>
                                            <Input
                                                type="text"
                                                placeholder="위플부동산 홍길동"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                                className="w-full"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                연락처
                                            </label>
                                            <Input
                                                type="tel"
                                                placeholder="010-1234-5678"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                required
                                                className="w-full"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                문의 내용 (선택)
                                            </label>
                                            <Textarea
                                                placeholder="궁금하신 점을 자유롭게 적어주세요."
                                                value={inquiry}
                                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInquiry(e.target.value)}
                                                className="w-full h-24 resize-none"
                                            />
                                        </div>

                                        {error && (
                                            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                                                {error}
                                            </div>
                                        )}

                                        <Button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full h-12 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                    전송 중...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5 mr-2" />
                                                    상담 신청하기
                                                </>
                                            )}
                                        </Button>

                                        <p className="text-xs text-center text-slate-500">
                                            신청 후 24시간 이내에 연락드립니다.
                                        </p>
                                    </form>
                                ) : (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Send className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">
                                            신청 완료!
                                        </h4>
                                        <p className="text-slate-600">
                                            상담 신청이 접수되었습니다.<br />
                                            빠른 시일 내에 연락드리겠습니다.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
