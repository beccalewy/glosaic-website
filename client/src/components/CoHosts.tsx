import { motion } from "framer-motion";

const hosts = [
  { name: "FACTORIAL", imgSrc: "/factorial-logo.png" },
  { name: "FLOWER", imgSrc: "/flowerlogo.png" },
  { name: "HUGGING FACE", imgSrc: "/huggingface-logo.png" },
  { name: "GRADIO", imgSrc: "/gradio-logo.png" },
];

export function CoHosts() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <a
          href="https://replit.com/@your-username/co-hosts"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="inline-block px-12 py-12">
            <h2 className="text-4xl md:text-4xl font-extrabold tracking-wider shimmer-text">
              CO-HOSTS & COLLABORATORS
            </h2>
          </div>
        </a>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {hosts.map((host, index) => (
          <motion.div
            key={host.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <img
              src={host.imgSrc}
              alt={host.name}
              className="w-32 h-32 object-contain mb-4"
            />
            <p className="text-white font-bold tracking-wider text-md">
              {host.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
