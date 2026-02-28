
import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Target, Users, Award, User, Sun, ArrowRight, Check } from 'lucide-react';
import { PROGRAMS } from '../constants';

const Programs: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-brandBlack">
      {/* Header */}
      <div className="py-20 bg-brandDarkGrey border-b border-brandGreen/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase mb-4 tracking-tighter">OUR PROGRAMS</h1>
          <p className="text-brandGreen font-bold text-xl uppercase tracking-widest">TRAINING FOR EVERY GOAL</p>
        </div>
      </div>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {PROGRAMS.map((program, idx) => (
            <div key={program.id} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 w-full">
                <div className="relative group overflow-hidden rounded-sm">
                  <img src={program.image} alt={program.title} className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brandGreen/10 group-hover:bg-transparent transition-all"></div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brandGreen/20 flex items-center justify-center rounded-full">
                    <Check className="text-brandGreen" size={24} />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight">{program.title}</h2>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {program.description} Our {program.title.toLowerCase()} program is designed to challenge you physically and mentally, focusing on authentic boxing techniques and conditioning.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                  <li className="flex items-center gap-2"><Check size={16} className="text-brandGreen" /> Technical Drills</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-brandGreen" /> Cardio Conditioning</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-brandGreen" /> Expert Guidance</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-brandGreen" /> High Energy</li>
                </ul>
                <div className="pt-6">
                  <Link to="/contact" className="inline-flex items-center gap-3 bg-brandGreen text-brandBlack font-black px-8 py-4 rounded-sm uppercase tracking-tighter hover:bg-green-600 transition-all">
                    Inquire Now <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brandGreen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl md:text-6xl font-black text-brandBlack uppercase mb-8 leading-tight">NOT SURE WHERE<br />TO START?</h3>
          <p className="text-brandBlack font-bold text-xl mb-12 max-w-2xl mx-auto opacity-80 uppercase tracking-wide">
            Our coaches are happy to guide you to the program that fits your experience and goals.
          </p>
          <Link to="/contact" className="px-12 py-5 bg-brandBlack text-brandGreen font-black text-xl rounded-sm uppercase tracking-tighter hover:scale-105 transition-all">
            Get Expert Advice
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Programs;
