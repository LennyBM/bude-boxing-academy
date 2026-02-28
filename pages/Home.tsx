
import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Target, Users, Award, User, Sun, MapPin, Clock, ArrowRight, Quote } from 'lucide-react';
import { PROGRAMS, SCHEDULE, COACHES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  // Using raw=1 for Dropbox to ensure direct image access
  const heroImageUrl = "https://www.dropbox.com/scl/fi/wugfqzpckk1ss7543a0co/budeboxin111.jpg?rlkey=dh7275aq510taz532n0zjobcf&st=dp83vhv4&raw=1";

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImageUrl}
            className="w-full h-full object-cover object-[85%_center]"
            alt="Bude Boxing Academy Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brandBlack via-brandBlack/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brandGreen text-brandBlack font-bold rounded-full text-xs uppercase tracking-tighter mb-6 animate-pulse">
            <MapPin size={14} />
            Bude, Cornwall
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter mb-6">
            BUDE BOXING<br /><span className="text-brandGreen">ACADEMY</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 leading-relaxed font-medium">
            Train Hard. Build Community. Transform Your Life. The ultimate training destination in Bude.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/contact"
              className="px-8 py-4 bg-brandGreen hover:bg-green-400 text-brandBlack font-black text-lg rounded-sm uppercase tracking-tighter transition-all transform hover:scale-105"
            >
              Book Free Trial Class
            </Link>
            <Link
              to="/schedule"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-brandBlack font-black text-lg rounded-sm uppercase tracking-tighter transition-all"
            >
              View Class Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Features/About Section */}
      <section className="py-24 bg-brandBlack gritty-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-brandGreen text-lg font-bold tracking-[0.3em] mb-4">MORE THAN JUST A GYM</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase mb-6">OUR PHILOSOPHY</h3>
            <div className="w-24 h-1.5 bg-brandGreen mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Users, title: "All Levels Welcome", text: "Whether you're a complete beginner or a competitive fighter, we have a place for you." },
              { icon: Award, title: "Expert Coaching", text: "Learn from qualified, experienced trainers who are dedicated to your growth." },
              { icon: Target, title: "Community Focused", text: "Join a supportive, inclusive environment where everyone pushes each other to be better." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-brandDarkGrey p-10 border-t-4 border-brandGreen group hover:bg-brandGreen/5 transition-all card-hover">
                <div className="w-16 h-16 bg-brandGreen/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brandGreen group-hover:text-brandBlack transition-colors">
                  <feature.icon size={32} className="text-brandGreen group-hover:text-brandBlack" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 uppercase">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-brandDarkGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-brandGreen text-lg font-bold tracking-[0.3em] mb-4 uppercase">CHOOSE YOUR PATH</h2>
              <h3 className="text-4xl md:text-6xl font-black text-white uppercase">OUR PROGRAMS</h3>
            </div>
            <Link to="/programs" className="text-brandGreen font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm">
              View All Programs <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((program) => (
              <div key={program.id} className="relative h-96 group overflow-hidden border border-white/5 rounded-sm">
                <img src={program.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={program.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-brandBlack via-brandBlack/40 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-3xl font-black text-white mb-2 uppercase">{program.title}</h4>
                  <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{program.description}</p>
                  <Link to="/programs" className="inline-block py-2 px-6 bg-brandGreen text-brandBlack font-bold text-xs uppercase tracking-widest rounded-sm transform hover:scale-105 transition-all">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Schedule Section */}
      <section className="py-24 bg-brandBlack">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brandDarkGrey overflow-hidden shadow-2xl rounded-sm border border-brandGreen/20">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-20">
                <h2 className="text-brandGreen text-lg font-bold tracking-[0.3em] mb-4 uppercase">TRAINING TIMES</h2>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-10 uppercase leading-tight">THIS WEEK'S<br />SCHEDULE</h3>
                
                <div className="space-y-6">
                  {SCHEDULE.filter(s => s.status === 'Open').map((item, i) => (
                    <div key={i} className="flex gap-6 pb-6 border-b border-white/5 last:border-0">
                      <div className="text-brandGreen font-black text-xl uppercase w-24">{item.day}</div>
                      <div className="space-y-2">
                        {item.classes.map((cls, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-white">
                            <Clock size={16} className="text-brandGreen" />
                            <span className="font-bold">{cls.time}</span>
                            <span className="text-gray-400 text-sm">— {cls.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 bg-brandBlack/50 p-6 rounded-sm border-l-4 border-brandGreen">
                  <p className="text-white font-bold mb-2">Monthly Membership: £38/month</p>
                  <p className="text-gray-400 text-sm">Walk-in session: £7/each</p>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <img
                  src="https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?auto=format&fit=crop&q=80&w=1000"
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
                  alt="Boxing gym schedule"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brandDarkGrey relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
          <Quote size={400} className="text-brandGreen" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brandGreen text-lg font-bold tracking-[0.3em] mb-4 uppercase">FEEDBACK</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase">WHAT OUR MEMBERS SAY</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-brandBlack p-10 relative rounded-sm border border-white/5">
                <div className="flex gap-1 text-brandGreen mb-6">
                  {[...Array(t.rating)].map((_, i) => <Award key={i} size={16} />)}
                </div>
                <p className="text-gray-300 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-1 bg-brandGreen"></div>
                  <span className="text-white font-bold uppercase tracking-widest">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Image Banner */}
      <section className="relative h-[60vh] flex items-center justify-center group">
        <img
          src="https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover"
          alt="BBA Community Group"
        />
        <div className="absolute inset-0 bg-brandBlack/60 group-hover:bg-brandBlack/40 transition-all"></div>
        <div className="relative text-center px-4">
          <h3 className="text-4xl md:text-7xl font-black text-white uppercase mb-4 tracking-tighter">OUR COMMUNITY</h3>
          <p className="text-xl md:text-2xl text-brandGreen font-bold uppercase tracking-widest">EVERYONE BELONGS HERE</p>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-brandBlack">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-brandGreen text-lg font-bold tracking-[0.3em] mb-4 uppercase">FIND US</h2>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase">IN BUDE</h3>
              <p className="text-gray-400 text-lg mb-10">We are located in the heart of Kings Hill Industrial Estate. An authentic industrial space designed for training hard.</p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-brandGreen flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold uppercase">Address</h4>
                    <p className="text-gray-400">Kings Hill Industrial Estate, Bude, UK</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={24} className="text-brandGreen flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold uppercase">Main Training Hours</h4>
                    <p className="text-gray-400">Mon/Wed: 18:00 - 20:30, Sat: 10:00 - 12:30</p>
                  </div>
                </div>
              </div>
              
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brandGreen text-brandBlack font-black text-lg rounded-sm uppercase tracking-tighter hover:bg-green-400 transition-all"
              >
                Get Directions
              </a>
            </div>
            
            <div className="h-[400px] bg-brandDarkGrey rounded-sm overflow-hidden border border-brandGreen/20">
              <iframe
                title="Bude Boxing Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.467464016147!2d-4.529881723432757!3d50.82255477166548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486c1251c6c5a5e3%3A0xc3f5c78f8c9b9e6c!2sKings%20Hill%20Industrial%20Estate!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
