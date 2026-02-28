
import React from 'react';
import { Mail, Phone, MapPin, Send, Facebook, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-brandBlack">
      <div className="py-20 bg-brandDarkGrey border-b border-brandGreen/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase mb-4 tracking-tighter">CONTACT US</h1>
          <p className="text-brandGreen font-bold text-xl uppercase tracking-widest">GET IN THE RING</p>
        </div>
      </div>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-brandGreen text-lg font-bold tracking-[0.3em] mb-4 uppercase text-center lg:text-left">LET'S CONNECT</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase mb-6 sm:mb-8 leading-tight text-center lg:text-left">HAVE QUESTIONS?<br />GET IN TOUCH.</h3>
              <p className="text-gray-400 text-lg leading-relaxed text-center lg:text-left">
                We're always here to help you start your journey. Whether it's pricing, schedule questions, or just getting directions, we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 bg-brandDarkGrey p-8 rounded-sm group hover:border-brandGreen border border-transparent transition-all">
                <div className="p-4 bg-brandGreen text-brandBlack rounded-full group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase mb-2">Our Location</h4>
                  <p className="text-gray-400">Kings Hill Industrial Estate, Bude, UK</p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-brandDarkGrey p-8 rounded-sm group hover:border-brandGreen border border-transparent transition-all">
                <div className="p-4 bg-brandGreen text-brandBlack rounded-full group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase mb-2">Phone Number</h4>
                  <p className="text-gray-400">07422 337714</p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-brandDarkGrey p-8 rounded-sm group hover:border-brandGreen border border-transparent transition-all">
                <div className="p-4 bg-brandGreen text-brandBlack rounded-full group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase mb-2">Email Address</h4>
                  <p className="text-gray-400 break-all">budeboxing@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a href="https://wa.me/447422337714" className="w-full md:w-auto inline-flex justify-center lg:justify-start p-6 bg-[#25D366] text-white hover:bg-[#128C7E] rounded-sm transition-all items-center gap-4 font-black uppercase tracking-widest text-xl shadow-2xl hover:scale-105" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={28} /> Chat on WhatsApp
              </a>
              <div className="flex justify-center lg:justify-start mt-2">
                <a href="https://www.facebook.com/BudeBoxingAcademy" className="p-4 bg-brandDarkGrey text-white hover:bg-brandGreen hover:text-brandBlack rounded-sm transition-all flex items-center gap-3 font-bold uppercase tracking-widest text-xs" target="_blank" rel="noopener noreferrer">
                  <Facebook size={20} /> Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-brandDarkGrey p-8 md:p-12 rounded-sm border border-brandGreen/20 shadow-2xl">
            <h3 className="text-3xl font-black text-white uppercase mb-8">SEND A MESSAGE</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-brandBlack border border-white/10 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-brandGreen transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-brandBlack border border-white/10 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-brandGreen transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Subject</label>
                <select className="w-full bg-brandBlack border border-white/10 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-brandGreen transition-all">
                  <option>Free Trial Session Inquiry</option>
                  <option>Monthly Membership</option>
                  <option>Youth Programs</option>
                  <option>Personal Training</option>
                  <option>General Question</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Your Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-brandBlack border border-white/10 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-brandGreen transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button className="w-full bg-brandGreen text-brandBlack font-black py-5 rounded-sm uppercase tracking-tighter hover:bg-green-600 transition-all flex items-center justify-center gap-3 text-xl">
                Send Message <Send size={24} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Embedded Map */}
      <section className="h-[500px] w-full bg-brandDarkGrey">
        <iframe
          title="Bude Boxing Academy Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.467464016147!2d-4.529881723432757!3d50.82255477166548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486c1251c6c5a5e3%3A0xc3f5c78f8c9b9e6c!2sKings%20Hill%20Industrial%20Estate!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
