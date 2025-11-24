"use client";

import PrivacyPolicyModal from "@/components/modals/PrivacyPolicyModal";
import { useState } from "react";

export default function Footer() {
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

    return (
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h3 className="text-white font-bold text-xl mb-6">(주)위즈더플래닝</h3>
                        <p className="text-sm leading-relaxed mb-6">
                            부동산 전문 마케팅 파트너<br />
                            당신의 가치를 영상으로 증명합니다.
                        </p>
                        <div className="flex space-x-4 text-sm">
                            <a href="#" className="hover:text-white transition-colors">이용약관</a>
                            <span className="text-slate-700">|</span>
                            <button
                                onClick={() => setIsPrivacyOpen(true)}
                                className="hover:text-white transition-colors font-bold"
                            >
                                개인정보처리방침
                            </button>
                        </div>
                    </div>
                    <div className="md:text-right text-sm space-y-2">
                        <p>대표: 김지훈 | 사업자등록번호: 668-81-00391 | 통신판매업신고: 1698-9120-7020-8511</p>
                        <p>주소: 서울시 금천구 디지털로 178 가산퍼블릭 A동 2518호 2519호</p>
                        <p>고객센터: 1670-0704 (운영시간: 오전 10:00 ~ 오후 6:00)</p>
                        <p>이메일: wiz@wiztheplanning.com</p>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Wiz the Planning. All rights reserved.</p>
                </div>
            </div>

            <PrivacyPolicyModal
                isOpen={isPrivacyOpen}
                onClose={() => setIsPrivacyOpen(false)}
            />
        </footer>
    );
}
