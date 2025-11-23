"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const faqs = [
    {
        q: "촬영 시간이 얼마나 걸리나요?",
        a: "2~3시간 정도 소요됩니다. 사장님께서는 편하게 대본대로 말씀만 해주시면 됩니다."
    },
    {
        q: "얼굴을 꼭 내야 하나요?",
        a: "아닙니다. 화면 녹화나 나레이션으로도 전문적인 영상 제작이 가능합니다."
    },
    {
        q: "촬영은 어디서 하나요?",
        a: "고객님 사무실이나 현장에서 촬영합니다. 저희가 찾아갑니다."
    },
    {
        q: "수정 요청이 가능한가요?",
        a: "1차 편집본을 먼저 보여드리고, 피드백 반영 후 최종 완성합니다."
    },
    {
        q: "매물이 없을 때도 촬영하나요?",
        a: "매물 소개 외에도 시세 분석, 지역 정보 등 다양한 콘텐츠가 가능합니다."
    },
    {
        q: "몇 개월 후부터 효과가 나나요?",
        a: "보통 3개월차부터 조회수와 문의가 증가하기 시작합니다."
    },
    {
        q: "계약 기간이 어떻게 되나요?",
        a: "최소 3개월이며, 이후 월 단위로 자동 연장됩니다."
    },
    {
        q: "해지는 언제든 가능한가요?",
        a: "3개월 후부터 언제든 가능하며, 1개월 전 통보해주시면 됩니다."
    },
    {
        q: "우리 지역에 경쟁사가 있으면 안 되나요?",
        a: "한 지역(동) 당 3곳까지만 계약하므로, 먼저 신청하신 분께 우선권이 있습니다."
    },
    {
        q: "추가 비용이 발생하나요?",
        a: "기본 패키지 내에서는 추가 비용이 없으며, 드론 촬영 등 특수 요청 시에만 별도 협의합니다."
    }
];

export default function ProcessFAQ() {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-6">
                        <HelpCircle className="w-6 h-6" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        자주 묻는 질문
                    </h2>
                    <p className="text-xl text-slate-600">
                        궁금하신 점을 빠르게 확인하세요
                    </p>
                </motion.div>

                {/* FAQ List */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-slate-200 rounded-xl px-6 data-[state=open]:bg-slate-50 data-[state=open]:border-blue-200 transition-all duration-200"
                            >
                                <AccordionTrigger className="text-left text-slate-900 hover:text-blue-600 font-bold py-6 text-lg hover:no-underline">
                                    <span className="flex items-center gap-4">
                                        <span className="text-blue-600 font-serif italic">Q.</span>
                                        {faq.q}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 pb-6 pl-8 leading-relaxed text-base">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
