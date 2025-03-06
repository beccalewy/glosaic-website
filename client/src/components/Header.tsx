import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const OpnFormEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Load the OpnForm script
    const script = document.createElement("script");
    script.src = "https://opnform.com/widgets/iframe.min.js";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      // Call the initEmbed function when the script is loaded
      if (window.initEmbed) {
        window.initEmbed("osaic-registration-gpxcuz");
      }
    };

    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="mx-auto max-w-3xl w-full px-4 mt-12">
      <iframe
        id="osaic-registration-gpxcuz"
        ref={iframeRef}
        src="https://opnform.com/forms/osaic-registration-gpxcuz"
        style={{ border: "none", width: "100%" }}
        className="min-h-[500px]"
        title="OSAIC Registration Form"
      />
    </div>
  );
};

// Add TypeScript interface for the global window object
declare global {
  interface Window {
    initEmbed?: (id: string) => void;
  }
}

export function Header() {
  return (
    <header className="relative text-center py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mb-8"
      >
        <a
          href="https://factorial-computer-club.replit.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="inline-block px-12 py-12">
            <h1 className="text-7xl md:text-6xl font-extrabold tracking-wider shimmer-text">
              GLOSAIC
            </h1>
            <div className="text-white/80 mb-8 tracking-widest pt-12 flex flex-col items-center">
              <p className="text-lg font-bold">04 - 18 - 25</p>
              <p>11-3pm ET</p>
              <p>Livestreamed on YouTube (register for the link)</p>
            </div>
          </div>
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-white text-4xl md:text-5xl font-md max-w-2xl mx-auto px-4 jersey-10-regular"
      >
        Global (virtual) Open Source AI Conference
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8"
      >
        {/* Registration form embed */}
        <OpnFormEmbed />
      </motion.div>
    </header>
  );
}
