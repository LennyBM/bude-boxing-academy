import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, X } from 'lucide-react';

const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const hasConsented = localStorage.getItem('bba_cookie_consent');
        if (!hasConsented) {
            // Small delay so it doesn't jarringly appear instantly on load
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('bba_cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem('bba_cookie_consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 right-0 z-50 p-4 md:p-6 pointer-events-none w-full md:max-w-md">
            <div className="bg-brandDarkGrey border-l-4 border-brandGreen p-4 md:p-5 rounded-sm shadow-2xl pointer-events-auto transform transition-all translate-y-0">
                <div className="flex items-start gap-4">
                    <Shield className="text-brandGreen flex-shrink-0 mt-1" size={20} />
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-1">Privacy Notice</h4>
                        <p className="text-gray-400 text-[11px] leading-relaxed mb-4">
                            We use cookies to improve your experience and analyze traffic.
                            By clicking "Accept", you consent to our use of cookies.
                            See our <Link to="/privacy" className="text-brandGreen hover:underline">Privacy Policy</Link>.
                        </p>
                        <div className="flex gap-2">
                            <button
                                onClick={declineCookies}
                                className="flex-1 px-3 py-2 border border-gray-600 text-gray-400 hover:text-white hover:bg-white/5 font-bold text-[10px] rounded-sm uppercase tracking-tighter transition-all"
                            >
                                Decline
                            </button>
                            <button
                                onClick={acceptCookies}
                                className="flex-1 px-3 py-2 bg-brandGreen text-brandBlack hover:bg-green-400 font-black text-[10px] rounded-sm uppercase tracking-tighter transition-all"
                            >
                                Accept
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-gray-500 hover:text-white transition-colors flex-shrink-0"
                        aria-label="Close"
                    >
                        <X size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
