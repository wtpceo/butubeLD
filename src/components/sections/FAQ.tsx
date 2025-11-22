"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQ() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                            자주 묻는 질문
                        </h2>
                    </motion.div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-bold text-slate-800">
                            Q. 제가 카메라 앞에 서야 하나요?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed">
                            A. 아닙니다. 소장님의 성향에 따라 '스타 중개사(Track A)'와 '전문가 중개사(Track B)' 중 선택하실 수 있습니다. 얼굴 노출 없이도 전문성을 보여줄 수 있는 다양한 포맷이 준비되어 있습니다.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-bold text-slate-800">
                            Q. 영상 제작 기간은 얼마나 걸리나요?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed">
                            A. 촬영 후 영업일 기준 5일 이내에 초안을 받아보실 수 있습니다. 전문 편집팀이 상주하고 있어 빠르고 퀄리티 높은 결과물을 약속드립니다.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-bold text-slate-800">
                            Q. 우리 동네에 경쟁사가 먼저 신청하면 어떻게 되나요?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed">
                            A. 과도한 경쟁을 막기 위해 한 동(洞)당 최대 3곳까지만 계약을 진행합니다. 이미 마감된 지역은 대기 리스트에 등록해 드립니다.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg font-bold text-slate-800">
                            Q. 계약 기간은 어떻게 되나요?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed">
                            A. 브랜딩 효과가 나타나기까지 최소 3개월의 시간이 필요합니다. 따라서 최소 계약 기간은 3개월을 권장드리며, 6개월/12개월 장기 계약 시 추가 할인 혜택이 적용됩니다.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-lg font-bold text-slate-800">
                            Q. 추가 비용은 없나요?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed">
                            A. 계약된 서비스 외에 불필요한 추가 비용을 요구하지 않습니다. 단, 유튜브/인스타그램 광고 집행 시 매체비(광고 예산)는 별도로 충전해주셔야 합니다.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="text-lg font-bold text-slate-800">
                            Q. 피드백은 어떻게 반영되나요?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed">
                            A. 계약 체결 시 소장님 전담 카카오톡 단체방이 개설됩니다. 기획부터 편집 수정까지 실시간으로 소통하며 피드백을 빠르게 반영해 드립니다.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger className="text-lg font-bold text-slate-800">
                            Q. 블로그만 따로 진행할 수 있나요?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed">
                            A. 가능합니다. 하지만 영상과 블로그를 함께 진행했을 때의 시너지 효과가 훨씬 큽니다. 패키지로 진행 시 훨씬 합리적인 비용으로 이용하실 수 있도록 구성했습니다.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
