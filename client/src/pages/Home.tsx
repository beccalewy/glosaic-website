import { Header } from "@/components/Header";
import { CoHosts } from "@/components/CoHosts";

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative">
      <main className="relative">
        <CoHosts />
        <Header />
      </main>
    </div>
  );
}