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
        <a
          href="https://airtable.com/appxhJ595FlLatHbH/pagqhiHOk49O7I2Av/form"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
              variant="outline"
              size="xl"
              className="border-2 border-white/30 rounded-lg hover:bg-white/5 bg-transparent"
            >
            <span className="text-2xl md:text-3xl font-bold tracking-wider text-white px-6 py-7">
              SUBMIT A TALK OR DEMO
            </span>
          </Button>
        </a>

        <div className="flex flex-col items-center gap-4">
          <p className="text-white max-w-md text-sm ">
            Share your knowledge and experience with the global open source
            community
          </p>
        </div>
      </motion.div>
    </section>
  );
}
