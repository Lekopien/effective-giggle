import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../logo-ino.png'; 

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'Our Story' }, 
  { path: '/need', label: 'The Need' },
  { path: '/solution', label: 'Solution' },
  { path: '/impact', label: 'Impact' },
  { path: '/team', label: 'Team' },
  { path: '/roadmap', label: 'Roadmap' },
  { path: '/updates', label: 'Updates' },
  { path: '/join-us', label: 'Join Us' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b-4 border-teal-600">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo & Branding */}
          <Link to="/" className="flex items-center space-x-3 group transition-transform hover:scale-105">
            <img src={logo} alt="InnoHeza Ltd. Puzzle Logo" className="w-12 h-12" />
            <div>
              <div className="text-xl font-bold text-teal-700">InnoHeza Ltd.</div>
              <div className="text-xs text-gray-600">Making the world a healthy space</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  location.pathname === item.path
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-orange-400 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-teal-700 hover:bg-teal-50 rounded-lg"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-orange-400 hover:text-white transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;