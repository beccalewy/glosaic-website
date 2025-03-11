import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const OpnFormEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Load the OpnForm script
    const script = document.createElement("script");
    script.src = "https://opnform.com/widgets/iframe.min.js";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      if (window.initEmbed) {
        window.initEmbed("osaic-registration-gpxcuz");
      }
    };

    document.body.appendChild(script);

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

declare global {
  interface Window {
    initEmbed?: (id: string) => void;
  }
}

export function Header() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md z-50 border-b border-border/40">
        <div className="container flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity tracking-wide">
            GLOSAIC
          </a>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm">About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[200px]">
                    <NavigationMenuLink asChild>
                      <a href="#mission" className="block py-2 hover:text-primary">Our Mission</a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#team" className="block py-2 hover:text-primary">Team</a>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="#sessions" className="text-sm px-4 py-2 hover:text-primary">Sessions</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="#register" className="text-sm px-4 py-2 hover:text-primary">Register</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      {/* Main Header Content */}
      <header className="relative text-center py-12 mt-16">
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
          <div className="inline-block px-12 py-12">
            <h1 className="text-7xl md:text-6xl font-extrabold tracking-wider shimmer-text">
              GLOSAIC
            </h1>
            <div className="text-white/80 mb-8 tracking-widest pt-12 flex flex-col items-center">
              <p className="text-lg font-bold">04 - 16 - 25</p>
              <p>11-3pm ET</p>
              <p>Livestreamed on YouTube (register for the link)</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8"
        >
          <OpnFormEmbed />
        </motion.div>
      </header>
    </>
  );
}