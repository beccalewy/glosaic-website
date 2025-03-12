import { motion } from 'framer-motion';

const hosts = [
  { imgSrc: "/factorial-logo.png", url: "https://factorialcap.com" },
  { imgSrc: "/flowerlogo.png", url: "https://flower.dev" },
  { imgSrc: "/huggingface-logo.svg", url: "https://huggingface.co" },
  { imgSrc: "/gradio-logo.svg", url: "https://gradio.app" },
  { imgSrc: "/nomic-logo.png", url: "https://nomic.ai" },
  { imgSrc: "/patronus_logo.svg", url: "https://patronus.ai" },
];

export function CoHosts() {
  return (
    <section>
      {/* Simple Navigation Menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-extrabold text-2xl sm:text-3xl shimmer-text">
            GLOSAIC
          </div>
          {/* Navigation items hidden for now
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-white hover:text-white/70 transition-colors duration-300">About</a>
            <a href="#sessions" className="text-white hover:text-white/70 transition-colors duration-300">Sessions</a>
            <a href="#register" className="text-white hover:text-white/70 transition-colors duration-300">Register</a>
          </div>
          */}
          <div className="md:hidden">
            {/* Mobile menu button placeholder - hidden for now */}
            <button className="text-white text-xl hidden">≡</button>
          </div>
        </div>
      </nav>
      
      {/* Main content - added padding-top to account for fixed navbar */}
      <div className="py-20 px-4 pt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="inline-block px-4 sm:px-12 py-12">
          <h2 className="text-[48px] leading-[1.0834933333] font-[600] tracking-[-0.003em] pb-2 mt-0 md:mt-2 lg:mt-4 shimmer-text">The first Global Open Source AI Conference for developers.</h2>
          <div className="text-white/80 mb-8 tracking-widest pt-6 md:pt-12 lg:pt-16 xl:pt-20 flex flex-col items-center">
            <div>
            </div>
            <p className="font-extrabold text-base sm:text-lg md:text-xl px-2 text-center text-white">April 16, 2025.</p>
            </div>
            <div className="mt-6 md:mt-12 lg:mt-20 xl:mt-24">
              <a
                href="https://opnform.com/forms/osaic-registration-gpxcuz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="register-button bg-transparent relative py-3 sm:py-4 px-8 sm:px-12 rounded-md text-lg sm:text-2xl font-bold tracking-wider text-white hover:text-white transition-colors duration-800">
                  Register
                  <span className="absolute inset-0 register-button-bg opacity-0 group-hover:opacity-100 transition-opacity duration-800"></span>
                </button>
              </a>
            </div>
            </div>
            {/* Host logos moved here */}
            <div className="grid grid-cols-4 gap-1 sm:gap-4 max-w-6xl mx-auto text-center px-1 sm:px-3">
        {hosts.map((host, index) => (
          <motion.div
            key={host.imgSrc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center py-2"
          >
            <div className="flex justify-center w-full">
              <a 
                href={host.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <img
                  src={host.imgSrc}
                  alt="Sponsor logo"
                  className="w-20 h-20 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain brightness-0 invert"
                />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
            <div className="flex justify-center w-full my-8">
              <div className="font-medium text-4xl sm:text-5xl text-white transform rotate-180">
                ^
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto px-6 sm:px-10 md:px-16 mt-16 md:mt-24 lg:mt-32 mb-8 bg-black/20 backdrop-blur-sm rounded-lg py-8 border border-white/10">
              <p className="font-extrabold text-lg sm:text-xl md:text-2xl mb-6 text-center">We'll examine...</p>
              <ul className="list-disc pl-5 text-white/80 text-left text-base sm:text-lg md:text-xl [&>li]:mb-3">
                <li>The frontiers of open source AI includuing local models, robotics, biology models, and agents.</li>
                <li>Why build open source? What growth strategies does open source afford?</li>
                <li>Fundraising and selling an open source company and the business of open source.</li>
              </ul>
              <p className="mt-8 text-base sm:text-lg text-center">
                Virtual only (register for the link)
              </p>
            </div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        className="mt-16 flex justify-center"
      ></motion.div>
    </div>
    </section>
  );
}