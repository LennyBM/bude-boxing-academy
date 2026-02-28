
import React from 'react';
import { Target, Shield, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-brandBlack">
      {/* Hero Header */}
      <div className="relative py-32 h-[calc(100vh+6rem)] md:h-[calc(100vh+8rem)] -mt-24 md:-mt-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="https://www.dropbox.com/scl/fi/rv2egf4lgzsijxd752yy0/Bude_Boxing_Ac_Promo_01.mp4?rlkey=9g53r85cg9jw4t9qsfqnzdfjf&st=2e2zyz2l&raw=1"
            className="w-full h-full object-cover object-center opacity-50 grayscale"
            poster="/assets/empty-ring.jpg"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-brandBlack/60"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase mb-4 tracking-tighter">OUR STORY</h1>
          <div className="w-24 h-2 bg-brandGreen mx-auto"></div>
        </div>
      </div>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brandGreen text-lg font-bold tracking-[0.3em] mb-6 uppercase">ESTABLISHED 2026</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase leading-tight">BUDE'S PREMIER<br />BOXING COMMUNITY</h3>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Bude Boxing Academy was founded on the principle that boxing is for everyone. Located in the heart of Cornwall, we've built more than just a place to train; we've built a family.
              </p>
              <p>
                Our mission is to provide high-quality technical boxing instruction in a supportive, inclusive, and authentic industrial environment. We believe that the discipline learned in the ring translates to every area of life.
              </p>
              <p>
                Whether you're looking to compete at a high level or simply want to improve your fitness and confidence, BBA provides the tools, the coaching, and the community to help you succeed.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=600" className="rounded-sm grayscale hover:grayscale-0 transition-all duration-500" alt="Members training on heavy bags" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1554117518-30dd5fb7a940?auto=format&fit=crop&q=80&w=600" className="rounded-sm mt-8 grayscale hover:grayscale-0 transition-all duration-500" alt="Boxer wrapping hands" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-brandDarkGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase">OUR VALUES</h3>
            <div className="w-24 h-1.5 bg-brandGreen mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Integrity", text: "We value honesty and hard work. No shortcuts, just dedication." },
              { icon: Heart, title: "Respect", text: "Every member is respected. We leave our egos at the door." },
              { icon: Users, title: "Community", text: "We are stronger together. We support each other in and out of the ring." },
              { icon: Target, title: "Discipline", text: "Consistency is key. We show up and put in the work, every session." }
            ].map((v, i) => (
              <div key={i} className="bg-brandBlack p-8 border border-white/5 text-center group">
                <v.icon className="mx-auto text-brandGreen mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h4 className="text-xl font-bold text-white mb-4 uppercase">{v.title}</h4>
                <p className="text-gray-400 text-sm">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Callout */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-4xl font-black text-white mb-6 uppercase">READY TO JOIN THE ACADEMY?</h3>
          <p className="text-gray-400 text-xl mb-10 leading-relaxed">
            Your first class is on us. Come down, meet the coaches, and experience the BBA atmosphere for yourself.
          </p>
          <button className="px-8 py-4 bg-brandGreen text-brandBlack font-black rounded-sm uppercase tracking-tighter hover:bg-green-600 transition-all text-base md:text-lg w-full md:w-auto">
            Book Free Trial Session
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
