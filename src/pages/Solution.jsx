import React from 'react';
import { Lightbulb, Droplet, Zap } from 'lucide-react';

const Solution = () => {
  return (
    <section id="solution" className="min-h-screen pt-12 pb-20 px-6 relative bg-amber-50">
      
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='%23654321'/%3E%3Cpath d='M30 30m-2 0a2 2 0 1 1 4 0 2 2 0 1 1-4 0' fill='%23543210'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        <div className="text-center mb-16 pt-8">
          <div className="inline-block relative transform rotate-2">
            <div className="absolute -inset-4 bg-green-300 transform -rotate-1 shadow-lg"></div>
            <h1 className="relative text-5xl lg:text-6xl font-bold text-gray-800 bg-green-200 px-10 py-5 shadow-xl border-4 border-teal-600 font-handwriting">
              [cite_start]The Solution [cite: 47]
            </h1>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
            
            <div className="space-y-6 p-6 bg-teal-100/80 rounded-xl shadow-2xl border-r-8 border-teal-600 transform -rotate-1 relative">
                <h2 className="text-3xl font-bold text-teal-800 flex items-center">
                    <Lightbulb className="mr-3" /> The Balloon & Straw Analogy
                </h2>
                
                <p className="text-lg italic text-gray-700">
                    [cite_start]Imagine the **uterus as this balloon with water in it**[cite: 49].
                </p>
                
                <div className="bg-white p-4 shadow-inner border border-gray-300 transform rotate-1">
                    <p className="text-xl font-extrabold text-gray-800 text-center space-y-2">
                        [cite_start]<span>Balloon = Uterus</span> [cite: 50]
                        <br/>
                        [cite_start]<span>Straw = Suction / Uterine Suction Tamponade (UST)</span> [cite: 50]
                    </p>
                </div>

                <p className="text-lg text-gray-700 mt-4">
                    [cite_start]The straw is used to **suck the water out of the balloon & contract the balloon**[cite: 48].
                </p>
            </div>

            <div className="space-y-8 p-6 bg-white/80 rounded-xl shadow-2xl border-l-8 border-green-600 transform rotate-1 relative">
                <h2 className="text-3xl font-bold text-green-800 flex items-center">
                    <Zap className="mr-3" /> Uterine Suction Tamponade (UST)
                </h2>
                
                <p className="text-xl leading-relaxed text-gray-700">
                    Our innovation utilizes **Uterine Suction Tamponade (UST)** to induce rapid uterine contraction. This non-surgical method uses controlled vacuum pressure to stop postpartum hemorrhage (PPH).
                </p>
                
                <ul className="list-disc list-inside space-y-3 pl-4">
                    <li className="text-lg text-gray-700 flex items-start">
                        <Droplet className="w-5 h-5 mt-1 mr-2 text-red-500 flex-shrink-0" /> **Stops Atonic Bleeding:** Directly addresses uterine atony, the primary cause of maternal death.
                    </li>
                    <li className="text-lg text-gray-700 flex items-start">
                        <Droplet className="w-5 h-5 mt-1 mr-2 text-teal-500 flex-shrink-0" /> **Simple & Rapid:** Designed for quick deployment by frontline health workers.
                    </li>
                </ul>
            </div>
            
        </div>
      </div>
    </section>
  );
};

export default Solution;