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
        <div className="inline-block border-2 border-white rounded-full px-8 py-2">
          <h2 className="text-2xl font-bold tracking-wider text-white z-50">
            CO-HOSTS
          </h2>
        </div>
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
            <a href={`https://replit.com/@your-username/${host.name.toLowerCase()}`} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img
                src={host.imgSrc}
                alt={host.name}
                className="w-32 h-32 object-contain mb-4"
              />
              <p className="text-white font-bold tracking-wider text-sm">
                {host.name}
              </p>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
