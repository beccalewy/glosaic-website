import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
export function CTASection() {
  return (
    <section className="relative min-h-[400px] flex items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center relative z-30"
      >
        <Button
          variant="outline"
          size="lg"
          className="border-2 border-white/30 rounded-full mb-8 bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          <span className="text-2xl md:text-3xl font-bold tracking-wider text-white px-6 py-12">
            SUBMIT A TALK OR DEMO
          </span>
        </Button>

        <div className="flex flex-col items-center gap-4">
          <p className="text-white max-w-md text-sm">
            Share your knowledge and experience with the global open source
            community
          </p>
        </div>
      </motion.div>
    </section>
  );
}
