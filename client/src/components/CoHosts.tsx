import { motion } from "framer-motion";
import { SiHuggingface } from "react-icons/si";

const hosts = [
  { name: "FACTORIAL", icon: "F" },
  { name: "FLOWER", icon: "FL" },
  { name: "HUGGING FACE", Icon: SiHuggingface },
  { name: "GRADIO", icon: "G" },
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
          <h2 className="text-2xl font-bold tracking-wider text-white">
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
            <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center mb-4">
              {host.Icon ? (
                <host.Icon className="w-12 h-12 text-white" />
              ) : (
                <span className="text-2xl font-bold text-white">{host.icon}</span>
              )}
            </div>
            <p className="text-white font-bold tracking-wider text-sm">
              {host.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}