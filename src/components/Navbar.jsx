
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-black text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <Link to="/" className="text-2xl font-bold">
          BLAZE<span className="text-red-500">.</span>
        </Link>

        <nav className="flex flex-wrap gap-5 text-sm">
          <Link to="/" className="hover:text-red-500">
            Home
          </Link>

          <Link to="/collection" className="hover:text-red-500">
            Collection
          </Link>

          <Link to="/collection?category=shoeses" className="hover:text-red-500">
            Shoes
          </Link>

          <Link to="/about" className="hover:text-red-500">
            About Us
          </Link>

          <Link to="/contact" className="hover:text-red-500">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
