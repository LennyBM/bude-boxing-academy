
import React from 'react';
import { Clock, Calendar, Check, AlertCircle } from 'lucide-react';
import { SCHEDULE } from '../constants';

const Schedule: React.FC = () => {
  return (
    <div className="min-h-screen bg-brandBlack">
      <div className="py-20 bg-brandDarkGrey border-b border-brandGreen/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase mb-4 tracking-tighter">SCHEDULE</h1>
          <p className="text-brandGreen font-bold text-xl uppercase tracking-widest">PLAN YOUR ATTACK</p>
        </div>
      </div>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SCHEDULE.map((item, idx) => (
            <div key={idx} className={`bg-brandDarkGrey p-8 border-t-4 rounded-sm transition-all duration-300 ${item.status === 'Open' ? 'border-brandGreen' : 'border-gray-800 opacity-60'}`}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-black text-white uppercase">{item.day}</h3>
                <span className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-widest ${item.status === 'Open' ? 'bg-brandGreen/10 text-brandGreen' : 'bg-red-500/10 text-red-500'}`}>
                  {item.status}
                </span>
              </div>

              {item.classes.length > 0 ? (
                <div className="space-y-6">
                  {item.classes.map((cls, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-brandGreen font-bold text-sm">
                        <Clock size={14} />
                        {cls.time}
                      </div>
                      <div className="text-white font-black uppercase text-lg tracking-tight">
                        {cls.label}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center text-gray-600 italic uppercase tracking-widest text-sm">
                  No Classes Scheduled
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pricing Summary */}
        <div className="mt-16 bg-brandDarkGrey p-12 border border-white/5 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex items-start gap-4">
              <Check className="text-brandGreen mt-1" size={20} />
              <div>
                <h4 className="text-white font-bold uppercase mb-2">Monthly Member</h4>
                <p className="text-brandGreen text-2xl font-black">£38/Month</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">12 Sessions included</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Check className="text-brandGreen mt-1" size={20} />
              <div>
                <h4 className="text-white font-bold uppercase mb-2">Walk-In Session</h4>
                <p className="text-brandGreen text-2xl font-black">£7/Session</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Pay as you go</p>
              </div>
            </div>
            <div className="md:col-span-2 flex items-start gap-4 bg-brandBlack/50 p-6 rounded-sm border-l-4 border-brandGreen">
              <AlertCircle className="text-brandGreen flex-shrink-0" size={24} />
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-white font-bold uppercase">Beginners:</span> Please bring water and suitable training wear. We have spare gloves available to use until you get your own. Membership forms must be filled out on arrival.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
