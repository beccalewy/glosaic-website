import { Header } from "@/components/Header";
import { CoHosts } from "@/components/CoHosts";
import { CTASection } from "@/components/CTASection";
export default function Home() {
  return (
    <div className="min-h-screen bg-black relative">

      <main className="relative">
        <Header />
        <CoHosts />
        <CTASection />
      </main>
    </div>
  );
}
