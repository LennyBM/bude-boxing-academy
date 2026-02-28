import React from 'react';

const Privacy: React.FC = () => {
    return (
        <div className="min-h-screen bg-brandBlack pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-black text-white uppercase mb-4 tracking-tighter">Privacy Policy</h1>
                <p className="text-brandGreen font-bold mb-12">Last updated: {new Date().toLocaleDateString('en-GB')}</p>

                <div className="prose prose-invert prose-brandGreen max-w-none space-y-8 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-bold text-white uppercase mb-4">1. Introduction</h2>
                        <p>
                            Welcome to Bude Boxing Academy. We respect your privacy and are committed to protecting your personal data. This privacy notice will inform you as to how we look after your personal data when you visit our website or use our services and tell you about your privacy rights and how the law protects you, in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white uppercase mb-4">2. The Data We Collect About You</h2>
                        <p>
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                            <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white uppercase mb-4">3. How We Use Your Personal Data</h2>
                        <p>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., providing gym access and classes).</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal obligation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white uppercase mb-4">4. Cookies and Tracking</h2>
                        <p>
                            You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly. We use essential cookies to maintain your session and preference cookies if you consent to them via our consent banner.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white uppercase mb-4">5. Data Security</h2>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white uppercase mb-4">6. Your Legal Rights</h2>
                        <p>
                            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Request access to your personal data.</li>
                            <li>Request correction of your personal data.</li>
                            <li>Request erasure of your personal data.</li>
                            <li>Object to processing of your personal data.</li>
                            <li>Request restriction of processing your personal data.</li>
                            <li>Request transfer of your personal data.</li>
                            <li>Right to withdraw consent.</li>
                        </ul>
                        <p className="mt-4">
                            If you wish to exercise any of the rights set out above, please contact us at shayes@bude-stratton.gov.uk.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
