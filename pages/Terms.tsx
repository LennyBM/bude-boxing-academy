import React from 'react';

const Terms: React.FC = () => {
    return (
        <div className="min-h-screen bg-brandBlack pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-black text-white uppercase mb-4 tracking-tighter">Terms and Conditions</h1>
                <p className="text-brandGreen font-bold mb-12">Last updated: {new Date().toLocaleDateString('en-GB')}</p>

                <div className="prose prose-invert prose-brandGreen max-w-none space-y-8 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-bold text-white uppercase mb-4">1. Agreement to Terms</h2>
                        <p>
                            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Bude Boxing Academy ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto. By accessing the site and/or our physical premises, you agree that you have read, understood, and agree to be bound by all of these Terms and Conditions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white uppercase mb-4">2. Membership and Facility Use</h2>
                        <p>
                            By becoming a member or participating in a walk-in session, you agree to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Complete a mandatory Health & Safety declaration prior to any physical activity.</li>
                            <li>Follow the instructions of our coaching staff at all times.</li>
                            <li>Respect the equipment, facilities, and other members of the academy.</li>
                            <li>Acknowledge that boxing involves physical contact and carries an inherent risk of injury. You participate at your own risk.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white uppercase mb-4">3. Payments and Cancellations</h2>
                        <p>
                            Monthly memberships are billed in advance on a recurring basis. You may cancel your membership at any time with 30 days written notice. Walk-in session fees are non-refundable unless the session is cancelled by us. Prices are subject to change with reasonable notice provided to members.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white uppercase mb-4">4. Code of Conduct</h2>
                        <p>
                            We maintain a strict zero-tolerance policy for aggressive, abusive, or discriminatory behaviour outside of the controlled sparring environment. Management reserves the right to terminate memberships or refuse entry to anyone failing to adhere to our community standards. Egos must be left at the door.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white uppercase mb-4">5. Liability Waiver</h2>
                        <p>
                            To the maximum extent permitted by UK law, Bude Boxing Academy accepts no liability for any injuries, damages, or loss of personal property sustained by members or guests while on the premises. Lockers and storage are used entirely at the owner's risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white uppercase mb-4">6. Governing Law</h2>
                        <p>
                            These Terms shall be governed by and defined following the laws of England and Wales. Bude Boxing Academy and yourself irrevocably consent that the courts of England and Wales shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Terms;
