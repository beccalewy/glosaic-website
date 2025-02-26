import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientBlob } from "./GradientBlob";

export function CTASection() {
  return (
    <section className="relative min-h-[400px] flex items-center justify-center py-20 px-4">
      <GradientBlob position="top-left" className="opacity-50" />
      <GradientBlob position="bottom-right" className="opacity-50" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center z-10"
      >
        <Button
          variant="outline"
          size="lg"
          className="inline-block border-2 border-white rounded-full px-8 py-4 mb-8 hover:bg-white/10"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider text-white">
            SUBMIT A TALK OR DEMO
          </h2>
        </Button>

        <div className="flex flex-col items-center gap-4">
          <p className="text-white/80 max-w-md text-sm">
            Share your knowledge and experience with the global open source
            community
          </p>
        </div>
      </motion.div>
    </section>
  );
}