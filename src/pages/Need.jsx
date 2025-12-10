import React from 'react';
import { Heart } from 'lucide-react';

const Need = () => {
  return (
    <section id="need" className="min-h-screen pt-12 pb-20 px-6 relative bg-amber-50">
      
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='%23654321'/%3E%3Cpath d='M30 30m-2 0a2 2 0 1 1 4 0 2 2 0 1 1-4 0' fill='%23543210'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        <div className="text-center mb-16 pt-8">
          <div className="inline-block relative transform -rotate-3">
            <div className="absolute -inset-4 bg-red-300 transform rotate-1 shadow-lg"></div>
            <h1 className="relative text-5xl lg:text-6xl font-bold text-gray-800 bg-red-200 px-10 py-5 shadow-xl border-4 border-red-500 font-handwriting">
              [cite_start]The Critical Need [cite: 40]
            </h1>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div>
                <div className="w-full max-w-md mx-auto p-4 bg-white shadow-2xl border-4 border-gray-700 transform rotate-2 relative">
                    
                    <div className="absolute top-[-10px] left-[-10px] w-4 h-4 bg-red-500 rounded-full shadow-md"></div>
                </div>
                <blockquote className="text-center mt-6 text-xl text-gray-700 italic font-handwriting transform -rotate-1">
                    [cite_start]Still brainstorming [cite: 14]
                </blockquote>
            </div>

            <div className="space-y-8 p-6 bg-white shadow-xl border-l-8 border-red-600 transform -rotate-1 relative">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                    <Heart className="w-6 h-6 mr-2 text-red-600" /> The Core Problem
                </h2>
                
                <p className="text-xl leading-relaxed text-gray-700">
                    [cite_start]Mothers die from bleeding after childbirth because their uterus doesn't contract... [cite: 41]
                </p>
                
                <div className="p-4 bg-red-100 border-2 border-red-400 transform rotate-1">
                    <p className="text-2xl font-extrabold text-red-800 text-center">
                        [cite_start]...this is bad. [cite: 42]
                    </p>
                </div>
                
                <p className="text-md text-gray-600 mt-4">
                    This lack of uterine contraction (uterine atony), leading to Postpartum Hemorrhage (PPH), is the critical need we address.
                </p>
            </div>
            
        </div>
      </div>
    </section>
  );
};

export default Need;