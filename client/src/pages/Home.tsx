import { Header } from "@/components/Header";
import { CoHosts } from "@/components/CoHosts";
import { CTASection } from "@/components/CTASection";
import { GradientBlob } from "@/components/GradientBlob";

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative">
      <main className="relative z-10">
        <Header />
        <CoHosts />
        <CTASection />
      </main>
    </div>
  );
}
