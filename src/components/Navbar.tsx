import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-stone-50/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-serif tracking-wider text-stone-800">
            Estudio 43
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-stone-600 hover:text-stone-900 transition-colors">
              Home
            </Link>
            <Link to="/collection" className="text-stone-600 hover:text-stone-900 transition-colors">
              Collection
            </Link>
          </div>

          <button className="md:hidden">
            <Menu className="h-6 w-6 text-stone-600" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;