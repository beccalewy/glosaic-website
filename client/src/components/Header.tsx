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
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mb-8"
      >
        <a
          href="
          https://factorial-computer-club.replit.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="inline-block px-12 py-12">
            <h1 className="text-7xl md:text-6xl font-extrabold tracking-wider shimmer-text">
              GLOSAIC
            </h1>
            <p className="text-white/80 mb-8 tracking-widest pt-12">04 - 18 - 25</p>
          </div>
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-white text-4xl md:text-4xl font-bold max-w-2xl mx-auto px-4"
      >
        The global virtual open source AI conference
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8"
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
            <span className="text-xl md:text-2xl font-bold tracking-wider text-white px-4 py-9">
              REGISTER TO ATTEND
            </span>
          </Button>
        </a>
      </motion.div>
    </header>
  );
}
