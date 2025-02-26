import { Header } from "@/components/Header";
import { CoHosts } from "@/components/CoHosts";
import { CTASection } from "@/components/CTASection";
import { GradientBlob } from "@/components/GradientBlob";

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative">
      <GradientBlob position="top-left" />
      <GradientBlob position="bottom-right" />
      
      <main className="relative z-10">
        <Header />
        <CoHosts />
        <CTASection />
      </main>
    </div>
  );
}
