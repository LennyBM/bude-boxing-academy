
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-brandBlack/95 shadow-2xl py-2' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="z-10">
            <Logo className={scrolled ? "h-20" : "h-32"} />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-black uppercase tracking-widest hover:text-brandGreen transition-colors ${location.pathname === link.path ? 'text-brandGreen' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brandGreen hover:bg-green-300 text-brandBlack font-black px-6 py-3 rounded-sm transition-all text-sm uppercase tracking-tighter transform hover:scale-110 text-center"
            >
              Book Free Trial Session
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brandGreen transition-colors p-2"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-brandDarkGrey shadow-2xl transition-all duration-500 ease-in-out ${isOpen ? 'top-full opacity-100 visible translate-y-0' : 'top-[-100vh] opacity-0 invisible -translate-y-10'}`}>
        <div className="px-6 pt-4 pb-10 space-y-2 border-t border-brandGreen/20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-5 text-xl font-black text-white hover:text-brandGreen border-b border-white/5 uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-brandGreen text-brandBlack font-black py-4 rounded-sm uppercase tracking-tighter text-base"
            >
              Book Free Trial Session
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
