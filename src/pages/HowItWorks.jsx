import React from 'react';
import { ChevronRight, Droplet, Search, Zap, CheckCircle } from 'lucide-react';

const steps = [
  { number: 1, title: "Preparation & Insertion", icon: <Search className="w-8 h-8 text-teal-600" />, description: "The UST kit is rapidly prepared and inserted into the uterine cavity, ready for activation." },
  { number: 2, title: "Suction Initiation", icon: <Zap className="w-8 h-8 text-teal-600" />, description: "A controlled suction mechanism is activated to generate the crucial negative pressure." },
  { number: 3, title: "Contraction & Hemostasis", icon: <Droplet className="w-8 h-8 text-red-600" />, description: "The negative pressure forces the uterine muscle walls to contract tightly, stopping the bleeding instantly." },
  { number: 4, title: "Monitoring & Stabilization", icon: <CheckCircle className="w-8 h-8 text-green-600" />, description: "The mother is monitored until stabilized, after which the device can be safely removed." }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="min-h-screen pt-12 pb-20 px-6 relative bg-amber-50">
      
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='%23654321'/%3E%3Cpath d='M30 30m-2 0a2 2 0 1 1 4 0 2 2 0 1 1-4 0' fill='%23543210'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        <div className="text-center mb-16 pt-8">
          <div className="inline-block relative transform -rotate-1">
            <div className="absolute -inset-4 bg-blue-300 transform rotate-2 shadow-lg"></div>
            <h1 className="relative text-5xl lg:text-6xl font-bold text-gray-800 bg-blue-200 px-10 py-5 shadow-xl border-4 border-orange-500 font-handwriting">
              How It Works
            </h1>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12 p-6 bg-white shadow-xl border-b-8 border-blue-600 transform rotate-1 relative">
            
            <p className="text-center text-xl text-gray-700 italic">
                The UST device provides a simple, rapid, and non-surgical method to induce the necessary uterine contraction.
            </p>

            <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 hidden md:block"></div>
                
                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={step.number} className="relative z-10 text-center p-4 bg-yellow-50/90 rounded-lg shadow-md border-b-4 border-teal-500 transform hover:scale-[1.05] transition-transform duration-300">
                            
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-teal-500 rounded-full border-4 border-white hidden md:flex items-center justify-center text-white font-bold text-lg">
                                {step.number}
                            </div>
                            
                            <div className="mb-4 flex justify-center mt-2">{step.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2 font-handwriting">{step.title}</h3>
                            <p className="text-sm text-gray-600">{step.description}</p>
                            
                            {index < steps.length - 1 && (
                                <ChevronRight className="w-6 h-6 text-gray-500 mx-auto mt-4 block md:hidden" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;