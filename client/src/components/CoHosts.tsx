import { motion } from 'framer-motion';

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
        <div className="inline-block px-12 py-12">
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-extrabold shimmer-text">
            GLOSAIC
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-[3rem] lg:text-[2.5rem] font-extrabold tracking-wider leading-normal pb-2 shimmer-text">April 16, 2025</h2>
          <div className="text-white/80 mb-8 tracking-widest pt-6 md:pt-12 flex flex-col items-center">
            <div>
            </div>
            <p className="font-extrabold text-base sm:text-lg md:text-xl px-2 text-center">GLOSAIC is the first Global Open Source AI Conference for developers building & using open source AI.</p>
            </div>
              <a
                href="https://replit.com/@your-username/co-hosts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="register-button bg-transparent relative py-2 sm:py-3 px-6 sm:px-8 rounded-md text-base sm:text-xl font-bold tracking-wider shimmer-text hover:text-white transition-colors duration-800">
                  Register
                  <span className="absolute inset-0 register-button-bg opacity-0 group-hover:opacity-100 transition-opacity duration-800"></span>
                </button>
              </a>
            </div>
            {/* Host logos moved here */}
            <div className="grid grid-cols-4 gap-3 sm:gap-8 max-w-6xl mx-auto text-center px-2 sm:px-6">
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
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-2 sm:mb-4" // Smaller image size on mobile
              />
            </div>
            <p className="text-white font-bold tracking-wider text-xs sm:text-sm"> {/* Smaller text on mobile */}
              {host.name}
            </p>
          </motion.div>
        ))}
      </div>
            <p className="font-extrabold text-base sm:text-lg mt-6 md:mt-10 mb-4">We'll examine...</p>
            <ul className="list-disc mx-4 sm:mx-8 md:mx-16 pl-5 text-white/80 text-left text-sm sm:text-base [&>li]:mb-3">
              <li>The frontiers of open source AI includuing local models, robotics, biology models, and agents.</li>
              <li>Why build open source? What growth strategies does open source afford?</li>
              <li>Fundraising and selling an open source company and the business of open source.</li>
            </ul>
            <p className="mt-6 md:mt-10 text-sm sm:text-base">
              Virtual only (register for the link)
            </p>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        className="mt-16 flex justify-center"
      ></motion.div>
    </section>
  );
}