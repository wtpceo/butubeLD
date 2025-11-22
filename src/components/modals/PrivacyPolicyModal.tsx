"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface PrivacyPolicyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden">
                            {/* Header */}
                            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                                <h3 className="text-xl font-bold text-slate-900">개인정보처리방침</h3>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-slate-200 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-slate-500" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6 overflow-y-auto text-sm text-slate-600 leading-relaxed space-y-6">
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">1. 개인정보의 처리 목적</h4>
                                    <p>(주)위즈더플래닝(이하 '회사')은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                                    <ul className="list-disc list-inside mt-2 pl-2 space-y-1">
                                        <li>서비스 제공 및 계약의 이행</li>
                                        <li>고객 상담 및 문의 응대</li>
                                        <li>마케팅 및 광고에의 활용 (동의 시)</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">2. 개인정보의 처리 및 보유 기간</h4>
                                    <p>회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
                                    <ul className="list-disc list-inside mt-2 pl-2 space-y-1">
                                        <li>보유 기간: 서비스 이용 계약 종료 시까지 (단, 관계 법령에 따름)</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">3. 처리하는 개인정보의 항목</h4>
                                    <p>회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
                                    <ul className="list-disc list-inside mt-2 pl-2 space-y-1">
                                        <li>필수항목: 성명, 연락처, 지역, 중개사무소명</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">4. 개인정보의 파기</h4>
                                    <p>회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">5. 개인정보 보호책임자</h4>
                                    <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
                                    <ul className="list-disc list-inside mt-2 pl-2 space-y-1">
                                        <li>성명: 김지훈</li>
                                        <li>직책: 대표</li>
                                        <li>연락처: 1670-0704 / contact@wiztheplanning.com</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
                                <Button onClick={onClose} className="bg-slate-900 hover:bg-slate-800 text-white">
                                    닫기
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
