import ProcessHero from "@/components/sections/process/ProcessHero";
import ServiceIncludes from "@/components/sections/process/ServiceIncludes";
import ProcessTimeline from "@/components/sections/process/ProcessTimeline";
import ProcessSteps from "@/components/sections/process/ProcessSteps";
import BehindScenes from "@/components/sections/process/BehindScenes";
import TeamIntroduction from "@/components/sections/process/TeamIntroduction";
import StudioEquipment from "@/components/sections/process/StudioEquipment";
import OfficeVisit from "@/components/sections/process/OfficeVisit";
import PerformanceReport from "@/components/sections/process/PerformanceReport";
import ProcessFAQ from "@/components/sections/process/ProcessFAQ";
import ProcessCTA from "@/components/sections/process/ProcessCTA";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "서비스 프로세스 - 부동산 유튜브 마케팅 | 위즈더플래닝",
    description: "촬영부터 업로드까지 모든 과정을 투명하게 공개합니다. 전문 팀이 만드는 부동산 유튜브 채널 제작 과정을 확인하세요.",
    openGraph: {
        title: "서비스 프로세스 - 부동산 유튜브 마케팅 | 위즈더플래닝",
        description: "촬영부터 업로드까지 모든 과정을 투명하게 공개합니다.",
        images: [
            {
                url: "/og-image-process.png",
                width: 1200,
                height: 630,
                alt: "위즈더플래닝 부동산 유튜브 마케팅",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "서비스 프로세스 - 부동산 유튜브 마케팅",
        description: "촬영부터 업로드까지 모든 과정을 투명하게 공개합니다.",
        images: ["/og-image-process.png"],
    },
};

export default function ProcessPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <ProcessHero />
            <ServiceIncludes />
            <ProcessTimeline />
            <ProcessSteps />
            <BehindScenes />
            <TeamIntroduction />
            <StudioEquipment />
            <OfficeVisit />
            <PerformanceReport />
            <ProcessFAQ />
            <ProcessCTA />
            <Footer />
        </main>
    );
}
