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
        <div className="fixed bottom-0 left-0 w-full z-50 p-4 pointer-events-none">
            <div className="max-w-4xl mx-auto bg-brandDarkGrey border-t-4 border-brandGreen p-6 rounded-sm shadow-2xl pointer-events-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transform transition-all translate-y-0">
                <div className="flex items-start gap-4">
                    <Shield className="text-brandGreen flex-shrink-0 mt-1" size={24} />
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-2">We value your privacy</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We use cookies to enhance your browsing experience and analyze our traffic in accordance with UK GDPR.
                            By clicking "Accept", you consent to our use of cookies.
                            Read our <Link to="/privacy" className="text-brandGreen hover:underline">Privacy Policy</Link> for more details.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
                    <button
                        onClick={declineCookies}
                        className="px-6 py-3 border border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800 font-bold text-sm rounded-sm uppercase tracking-tighter transition-all"
                    >
                        Decline
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="px-6 py-3 bg-brandGreen text-brandBlack hover:bg-green-400 font-black text-sm rounded-sm uppercase tracking-tighter transition-all"
                    >
                        Accept Cookies
                    </button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="md:hidden absolute top-4 right-4 text-gray-400 hover:text-white"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
