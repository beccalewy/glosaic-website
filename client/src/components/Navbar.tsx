
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-sm py-4 px-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-extrabold text-2xl sm:text-3xl shimmer-text tracking-wider">
          GLOSAIC
        </Link>
        {/* Additional nav items can be added here if needed */}
      </div>
    </nav>
  );
}
