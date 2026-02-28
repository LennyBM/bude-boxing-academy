
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brandBlack text-white pt-16 pb-8 border-t border-brandGreen/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Logo />
            <p className="text-gray-400 text-sm leading-relaxed">
              Bude's premier community boxing academy. Training hard, building community, and transforming lives in Cornwall since 2026.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/BudeBoxingAcademy" className="p-2 bg-brandDarkGrey hover:bg-brandGreen hover:text-brandBlack transition-all rounded-full" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/447422337714" className="p-2 bg-brandDarkGrey hover:bg-brandGreen hover:text-brandBlack transition-all rounded-full" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brandGreen">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Schedule', 'Pricing', 'Contact'].map((item) => (
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
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
          <p>© 2026 Bude Boxing Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-brandGreen">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brandGreen">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
