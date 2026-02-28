
import React from 'react';
import { Check, Info, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-brandBlack">
      <div className="py-20 bg-brandDarkGrey border-b border-brandGreen/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase mb-4 tracking-tighter">PRICING</h1>
          <p className="text-brandGreen font-bold text-xl uppercase tracking-widest">AFFORDABLE ACCESS TO BOXING</p>
        </div>
      </div>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* Monthly */}
          <div className="bg-brandDarkGrey p-12 border-t-8 border-brandGreen flex flex-col justify-between rounded-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-white/20 pointer-events-none group-hover:text-brandGreen/30 transition-colors">
              <Check size={120} />
            </div>
            <div>
              <h2 className="text-brandGreen text-2xl font-bold uppercase tracking-widest mb-4">MONTHLY MEMBERSHIP</h2>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-6xl font-black text-white leading-none">£38</span>
                <span className="text-gray-400 font-bold uppercase tracking-wider">/Month</span>
              </div>
              <ul className="space-y-6 mb-12">
                <li className="flex items-start gap-4 text-gray-300">
                  <Check className="text-brandGreen flex-shrink-0" size={20} />
                  <span>Access up to 12 sessions per month</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <Check className="text-brandGreen flex-shrink-0" size={20} />
                  <span>Professional coaching included</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <Check className="text-brandGreen flex-shrink-0" size={20} />
                  <span>Full equipment access (ring, bags, etc.)</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <Check className="text-brandGreen flex-shrink-0" size={20} />
                  <span>Free spare gloves for beginners</span>
                </li>
              </ul>
            </div>
            <Link to="/contact" className="block w-full text-center bg-brandGreen text-brandBlack font-black py-5 rounded-sm uppercase tracking-tighter hover:bg-green-600 transition-all text-xl">
              Join The Academy
            </Link>
          </div>

          {/* Walk-in */}
          <div className="bg-brandDarkGrey p-12 border border-white/10 flex flex-col justify-between rounded-sm group">
            <div>
              <h2 className="text-gray-400 text-2xl font-bold uppercase tracking-widest mb-4">WALK-IN SESSION</h2>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-6xl font-black text-white leading-none">£7</span>
                <span className="text-gray-400 font-bold uppercase tracking-wider">/Session</span>
              </div>
              <ul className="space-y-6 mb-12">
                <li className="flex items-start gap-4 text-gray-300">
                  <Check className="text-gray-400 flex-shrink-0" size={20} />
                  <span>Single class access</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <Check className="text-gray-400 flex-shrink-0" size={20} />
                  <span>Perfect for trying it out</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <Check className="text-gray-400 flex-shrink-0" size={20} />
                  <span>Available for all scheduled sessions</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <Check className="text-gray-400 flex-shrink-0" size={20} />
                  <span>Beginner friendly</span>
                </li>
              </ul>
            </div>
            <Link to="/contact" className="block w-full text-center border-2 border-white text-white font-black py-5 rounded-sm uppercase tracking-tighter hover:bg-white hover:text-brandBlack transition-all text-xl">
              Book A Session
            </Link>
          </div>
        </div>

        {/* Important Info */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brandDarkGrey p-8 border-l-4 border-brandGreen rounded-sm flex items-start gap-4">
            <Info className="text-brandGreen flex-shrink-0" size={24} />
            <div>
              <h4 className="text-white font-bold uppercase mb-2">What To Bring</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Please bring plenty of water and your own gloves if you have them. Spares are available for beginners at no extra cost.
              </p>
            </div>
          </div>
          <div className="bg-brandDarkGrey p-8 border-l-4 border-brandGreen rounded-sm flex items-start gap-4">
            <AlertCircle className="text-brandGreen flex-shrink-0" size={24} />
            <div>
              <h4 className="text-white font-bold uppercase mb-2">Membership Form</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                All new members must complete a health & safety membership form upon arrival at their first session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial Banner */}
      <section className="py-24 bg-brandGreen text-brandBlack text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase mb-4 sm:mb-6 leading-tight">NEW TO BOXING?</h2>
          <p className="text-xl font-bold uppercase tracking-widest mb-10 opacity-80">YOUR FIRST SESSION IS COMPLETELY FREE</p>
          <Link to="/contact" className="inline-block w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-brandBlack text-brandGreen font-black text-lg sm:text-xl rounded-sm uppercase tracking-tighter hover:scale-105 transition-all">
            Get Your Free Pass
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
