
import React from 'react';
import { Play, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Video: React.FC = () => {
    return (
        <div className="min-h-screen bg-brandBlack">
            {/* Hero Header */}
            <div className="relative py-20 bg-brandDarkGrey border-b border-brandGreen/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase mb-4 tracking-tighter">
                        ACADEMY <span className="text-brandGreen">PROMO</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-medium italic">
                        "The discipline learned in the ring translates to every area of life."
                    </p>
                    <div className="w-24 h-1.5 bg-brandGreen mx-auto"></div>
                </div>
            </div>

            <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative aspect-video bg-brandDarkGrey rounded-sm overflow-hidden border border-white/5 shadow-2xl group">
                    {/* Main Video Player */}
                    <video
                        src="https://www.dropbox.com/scl/fi/rv2egf4lgzsijxd752yy0/Bude_Boxing_Ac_Promo_01.mp4?rlkey=9g53r85cg9jw4t9qsfqnzdfjf&st=2e2zyz2l&raw=1"
                        className="w-full h-full object-cover"
                        poster="/assets/empty-ring.jpg"
                        controls
                        autoPlay={false}
                        playsInline
                    />

                    <div className="absolute inset-0 bg-brandBlack/40 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 hidden md:flex items-center justify-center">
                        <div className="w-20 h-20 bg-brandGreen text-brandBlack rounded-full flex items-center justify-center shadow-glow animate-pulse">
                            <Play size={32} fill="currentColor" />
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-brandDarkGrey p-8 border border-white/5 rounded-sm hover:border-brandGreen/30 transition-colors">
                        <Shield className="text-brandGreen mb-4" size={32} />
                        <h3 className="text-xl font-bold text-white mb-2 uppercase">ELITE COACHING</h3>
                        <p className="text-gray-400 text-sm">Learn from seasoned professionals who are dedicated to your growth and safety.</p>
                    </div>
                    <div className="bg-brandDarkGrey p-8 border border-white/5 rounded-sm hover:border-brandGreen/30 transition-colors">
                        <Play className="text-brandGreen mb-4" size={32} />
                        <h3 className="text-xl font-bold text-white mb-2 uppercase">AUTHENTIC VIBE</h3>
                        <p className="text-gray-400 text-sm">Experience the grit and energy of a real boxing community in Cornwall.</p>
                    </div>
                    <div className="bg-brandDarkGrey p-8 border border-white/5 rounded-sm hover:border-brandGreen/30 transition-colors">
                        <ArrowRight className="text-brandGreen mb-4" size={32} />
                        <h3 className="text-xl font-bold text-white mb-2 uppercase">NEXT STEPS</h3>
                        <p className="text-gray-400 text-sm">Ready to start your journey? Book your first session and join the academy.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-brandGreen text-brandBlack text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-tighter">STOP DREAMING. START TRAINING.</h2>
                    <p className="text-brandBlack/80 text-xl mb-10 font-bold">Your first class is on us. No judgment, just progress.</p>
                    <Link
                        to="/contact"
                        className="inline-block px-10 py-5 bg-brandBlack text-brandGreen font-black rounded-sm uppercase tracking-tighter hover:bg-white transition-all text-lg shadow-xl transform hover:-translate-y-1"
                    >
                        Claim Your Free Session Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Video;
