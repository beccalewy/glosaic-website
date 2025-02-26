import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="relative text-center py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-white/80 mb-8 tracking-widest">04 - 18 - 25</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mb-8"
      >
        <div className="inline-block border-2 border-white rounded-full px-12 py-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wider text-white">
            GLOSAIC
          </h1>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto px-4"
      >
        The world's largest virtual open source conference
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8"
      >
        <Button
          variant="outline"
          size="lg"
          className="rounded-full text-white border-2 hover:bg-white/10"
        >
          REGISTER NOW
        </Button>
      </motion.div>
    </header>
  );
}
