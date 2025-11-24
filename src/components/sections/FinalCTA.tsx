"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function FinalCTA() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [region, setRegion] = useState("");
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
                body: JSON.stringify({
                    name,
                    phone,
                    inquiry: `지역: ${region}`, // Map region to inquiry
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "전송 중 오류가 발생했습니다.");
            }

            setIsSuccess(true);
            setName("");
            setPhone("");
            setRegion("");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-70 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-900 leading-tight tracking-tight">
                            2026년, 2027년...<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                신뢰 자산이 가장 많은 중개사
                            </span>가<br />
                            시장을 독점하게 됩니다
                        </h2>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                            지금부터 쌓아 올린 영상 기록이 미래의 소장님을 지켜줄 것입니다.<br />
                            더 늦기 전에 '신뢰 아카이브'를 시작하세요.
                        </p>

                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100 max-w-2xl mx-auto">
                            {!isSuccess ? (
                                <form onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div className="space-y-2 text-left">
                                            <label className="text-sm font-medium text-slate-700 ml-1">성함</label>
                                            <Input
                                                placeholder="홍길동"
                                                className="bg-slate-50 border-slate-200 h-12"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2 text-left">
                                            <label className="text-sm font-medium text-slate-700 ml-1">연락처</label>
                                            <Input
                                                placeholder="010-0000-0000"
                                                className="bg-slate-50 border-slate-200 h-12"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2 text-left mb-8">
                                        <label className="text-sm font-medium text-slate-700 ml-1">지역</label>
                                        <Input
                                            placeholder="예: 서울시 강남구 역삼동"
                                            className="bg-slate-50 border-slate-200 h-12"
                                            value={region}
                                            onChange={(e) => setRegion(e.target.value)}
                                        />
                                    </div>

                                    {error && (
                                        <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                                            {error}
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full h-16 text-xl font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30 rounded-xl transition-all hover:scale-[1.02]"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 w-6 h-6 animate-spin" />
                                                전송 중...
                                            </>
                                        ) : (
                                            <>
                                                미래를 위한 무료 상담 신청하기 <ArrowRight className="ml-2 w-6 h-6" />
                                            </>
                                        )}
                                    </Button>

                                    <p className="mt-6 text-sm text-slate-400">
                                        * 상담 신청 시 <span className="text-blue-600 font-semibold">마케팅 진단 리포트</span>를 무료로 제공해드립니다.
                                    </p>
                                </form>
                            ) : (
                                <div className="py-12 text-center">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                        상담 신청이 완료되었습니다!
                                    </h3>
                                    <p className="text-slate-600 mb-8">
                                        담당자가 확인 후 24시간 이내에<br />
                                        입력하신 연락처로 안내드리겠습니다.
                                    </p>
                                    <Button
                                        onClick={() => setIsSuccess(false)}
                                        variant="outline"
                                        className="h-12 px-8"
                                    >
                                        추가로 신청하기
                                    </Button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
