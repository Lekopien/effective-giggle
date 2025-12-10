import React from 'react';
import { Users,} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen pt-12 pb-20 px-6 relative bg-amber-50">
      
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='%23654321'/%3E%3Cpath d='M30 30m-2 0a2 2 0 1 1 4 0 2 2 0 1 1-4 0' fill='%23543210'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        
        <div className="text-center mb-16 pt-8">
          <div className="inline-block relative transform rotate-1">
            <div className="absolute -inset-4 bg-yellow-300 transform -rotate-1 shadow-lg"></div>
            <h1 className="relative text-5xl lg:text-6xl font-bold text-gray-800 bg-yellow-200 px-10 py-5 shadow-xl border-4 border-teal-500 font-handwriting">
              About Us / Our Story
            </h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 p-8 bg-white/90 rounded-xl shadow-2xl border-b-8 border-teal-600 transform rotate-1 relative">
          
          <div className="absolute top-[-10px] right-[-10px] w-4 h-4 bg-teal-600 rounded-full shadow-md"></div>

          <h2 className="text-3xl font-bold text-teal-800 flex items-center justify-center">
            <Users className="w-6 h-6 mr-3" /> Mission: Making the World a Healthy Space
          </h2>
          
          <p className="text-xl leading-relaxed text-gray-700">
            Our founding principle is **To do need-driven Innovation in global Health**. We operate on the philosophy of prioritizing necessity (**Need Tech**) over applying existing technology to a problem (**Tech Need**), ensuring our solutions solve real-world problems.
          </p>

          <div className="flex items-center justify-center space-x-6 text-2xl font-extrabold text-gray-900">
            <span className="text-teal-600">UGHE</span>
            <span className="text-teal-600">+</span>
            <span className="text-teal-600">East Africa Biodesign</span>
            <span className="text-teal-600">➡️</span>
            <span>InnoMeza Ltd.</span>
          </div>

          <p className="text-lg text-gray-600 border-t pt-4">
            InnoMeza Ltd. is a **spin-off company from UGHE** following the **East Africa Biodesign Fellowship**.
          </p>

        </div>
        
      </div>
    </section>
  );
};

export default About;