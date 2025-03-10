import { motion } from "framer-motion";

const hosts = [
  { name: "", imgSrc: "/factorial-logo.png" },
  { name: "FLOWER", imgSrc: "/flowerlogo.png" },
  { name: "", imgSrc: "/huggingface-logo.png" },
  { name: "GRADIO", imgSrc: "/gradio-logo.png" },
  { name: "", imgSrc: "/nomic-logo.png" },
  { name: "PATRONUS", imgSrc: "/patronus_ai_inc_logo.jpeg" },
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
            <h2 className="text-8xl md:text-[10rem] font-extrabold shimmer-text">
              GLOSAIC
            </h2>
            <h2 className="text-4xl md:text-[5rem] font-extrabold tracking-wider shimmer-text">04 - 16 - 25</h2>
            <div className="text-white/80 mb-8 tracking-widest pt-12 flex flex-col items-center">
              <div>
              </div>
              <p>GLOSAIC is the first Global (virtual) Open Source AI Conference for developers building & using open source AI.</p>
              <p className="font-extrabold text-lg mt-10 mb-4">Speakers will discuss:</p>
              <ul className="list-disc mx-8 md:mx-16 pl-5 text-white/80 text-left [&>li]:mb-3">
                <li>Frontiers of open source AI includuing local models, robotics, biology models, and agents.</li>
                <li>Why build open source & strategies for growth that only open source affords.</li>
                <li>The business of open source - fundraising and selling an open source company.</li>
              </ul>
              <p className="mt-10">
                Livestreamed on YouTube (register for the link)
              </p>
            </div>
            <button className="register-button bg-transparent relative py-3 px-8 rounded-md text-xl font-bold tracking-wider shimmer-text hover:text-white transition-colors duration-800">
              Register
              <span className="absolute inset-0 register-button-bg opacity-0 group-hover:opacity-100 transition-opacity duration-800"></span>
            </button>
          </div>
        </a>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
        {hosts.map((host, index) => (
          <motion.div
            key={host.name || host.imgSrc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex justify-center w-full">
              <img
                src={host.imgSrc}
                alt={host.name}
                className="w-32 h-32 object-contain mb-4"
              />
            </div>
            <p className="text-white font-bold tracking-wider text-md">
              {host.name}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        className="mt-16 flex justify-center"
      ></motion.div>
    </section>
  );
}
