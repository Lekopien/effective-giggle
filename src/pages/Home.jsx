import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Lightbulb, TrendingUp, Users } from 'lucide-react';

const STICKY_NOTES = [
  { 
    title: "About Us / Our Story", 
    path: "/about", 
    icon: <Users size={32} className="text-teal-700" />,
    color: "bg-yellow-200 border-yellow-400",
    rotation: "-rotate-2",
    subtitle: "Spin-off from UGHE after East Africa Biodesign Fellowship"
  },
  { 
    title: "The Critical Need", 
    path: "/need", 
    icon: <Heart size={32} className="text-red-700" />,
    color: "bg-red-200 border-red-400",
    rotation: "rotate-1",
    subtitle: "Mothers die from bleeding after childbirth... This is bad."
  },
  { 
    title: "Our Life-Saving Solution", 
    path: "/solution", 
    icon: <Lightbulb size={32} className="text-green-700" />,
    color: "bg-green-200 border-green-400",
    rotation: "-rotate-1",
    subtitle: "Uterine Suction Tamponade (UST) Analogy"
  },
  { 
    title: "Join Our Mission (Donate)", 
    path: "/join-us", 
    icon: <TrendingUp size={32} className="text-purple-700" />,
    color: "bg-purple-200 border-purple-400",
    rotation: "rotate-2",
    subtitle: "Target: $1.5 million. Help make need-driven innovations."
  }
];

const Home = () => {
  return (
    <section id="hero" className="min-h-screen pt-32 pb-16 px-6 relative bg-amber-50">
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='%23654321'/%3E%3Cpath d='M30 30m-2 0a2 2 0 1 1 4 0 2 2 0 1 1-4 0' fill='%23543210'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-12">
          <div className="inline-block relative mb-10">
            <h1 className="relative text-5xl lg:text-7xl font-bold text-gray-800 px-8 py-6 shadow-xl transform rotate-1 bg-yellow-200/90 font-handwriting">
              InnoMeza Ltd.
              <br/>
              Hush Hush Mission
            </h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STICKY_NOTES.map((note) => (
              <Link
                key={note.path}
                to={note.path}
                className={`group block transition-all duration-300 transform ${note.rotation} 
                            hover:scale-105 hover:shadow-2xl active:translate-y-1 active:shadow-md 
                            p-6 shadow-xl cursor-pointer relative ${note.color} border-4`}
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
              >
                <div 
                  className={`absolute top-0 right-0 w-8 h-8 ${note.color.replace(/-\d{2} /g, '-300 ')} transform 
                              -translate-x-1 -translate-y-1 rounded-bl-lg transition-transform duration-300 
                              group-hover:rotate-12 group-hover:scale-110`}
                  style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
                ></div>

                <div className="flex flex-col items-center text-center space-y-3">
                  {note.icon}
                  <h2 className="text-2xl font-bold text-gray-800 font-handwriting">
                    {note.title}
                  </h2>
                  <p className="text-sm text-gray-600 italic">
                    {note.subtitle}
                  </p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-dashed border-gray-400">
                    <span className="text-xs font-medium text-teal-600">Click to peel back and read more...</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="pt-12">
            <Link 
              to="/join-us"
              className="inline-flex items-center px-10 py-5 bg-teal-600 text-white rounded-lg font-bold text-xl shadow-xl hover:bg-orange-500 hover:scale-[1.02] transition-all duration-300 transform -rotate-1"
            >
              <Heart className="mr-3" /> DONATE NOW
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;