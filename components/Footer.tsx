
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brandBlack text-white pt-16 pb-8 border-t border-brandGreen/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Logo />
            <p className="text-gray-400 text-sm leading-relaxed">
              Bude's premier community boxing academy. Training hard, building community, and transforming lives in Cornwall since 2026.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-brandDarkGrey hover:bg-brandGreen hover:text-brandBlack transition-all rounded-full">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-brandDarkGrey hover:bg-brandGreen hover:text-brandBlack transition-all rounded-full">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brandGreen">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Programs', 'Schedule', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brandGreen">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brandGreen flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">Kings Hill Industrial Estate, Bude, UK</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brandGreen flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">07422 337714</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brandGreen flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm break-all">shayes@bude-stratton.gov.uk</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brandGreen">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for news and schedule updates.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-brandDarkGrey border border-white/10 rounded-sm px-4 py-2 focus:outline-none focus:border-brandGreen"
              />
              <button className="w-full bg-brandGreen text-brandBlack font-bold py-2 rounded-sm hover:bg-green-600 transition-colors uppercase text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
          <p>© 2026 Bude Boxing Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brandGreen">Privacy Policy</a>
            <a href="#" className="hover:text-brandGreen">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
