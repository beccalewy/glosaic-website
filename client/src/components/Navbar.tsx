
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-sm py-4 px-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-extrabold text-3xl shimmer-text tracking-wider">
          GLOSAIC
        </Link>
        {/* You can add navigation links here if needed */}
      </div>
    </nav>
  );
}
