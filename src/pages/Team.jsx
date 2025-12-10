import React, { useState } from 'react';
import { Briefcase, Mail, User, MapPin, ArrowRight, X } from 'lucide-react';

const teamMembers = [
  { 
    id: 1, 
    name: "D Bazil", 
    role: "CEO & Lead Biodesign Fellow", 
    bio: "Driving the vision for global health equity and leading the core strategy for InnoMeza.",
    email: "dbazil@innoheza.com",
    imgSrc: null, 
    color: "bg-teal-700",
    tabStyles: { tabOut: 'right', tabIn: 'bottom' } 
  },
  { 
    id: 2, 
    name: "Bert", 
    role: "Chief Technical Officer", 
    bio: "Specializes in developing scalable, low-cost medical device manufacturing and technical pathways.",
    email: "bert@innoheza.com",
    imgSrc: null, 
    color: "bg-teal-600",
    tabStyles: { tabOut: 'bottom', tabIn: 'left' } 
  },
  { 
    id: 3, 
    name: "Salsa", 
    role: "Clinical Research Director", 
    bio: "Manages clinical validation, regulatory alignment, and community engagement in the SSA region.",
    email: "salsa@innoheza.com",
    imgSrc: null, 
    color: "bg-teal-500",
    tabStyles: { tabOut: 'right', tabIn: 'top' } 
  },
  { 
    id: 4, 
    name: "Advisory Board", 
    role: "Core Stakeholders", 
    bio: "The foundation of our expertise, providing strategic guidance from clinical, public health, and medtech investment perspectives.",
    email: "advisors@innoheza.com",
    imgSrc: null, 
    color: "bg-teal-400",
    tabStyles: { tabOut: 'top', tabIn: 'left' } 
  },
];

const Team = () => {
  const [activeMember, setActiveMember] = useState(null);
  
  const mainContentClass = activeMember 
    ? "md:w-2/3 lg:w-3/4 opacity-50" 
    : "w-full opacity-100";

  return (
    <section id="team" className="min-h-screen pt-12 pb-20 px-6 bg-gradient-to-b from-amber-50 to-purple-50 relative overflow-hidden">
      
      <style jsx>{`
        .puzzle-grid-container {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            border: 8px solid #374151; /* Gray-700 */
        }
        .puzzle-piece {
            position: relative;
            border: 1px solid #374151; /* Internal division lines */
            overflow: visible;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
        }

        /* --- Custom Puzzle Tab Shapes (Using :after for Tab Out, :before for Tab In) --- */
        .piece-1::after { /* D Bazil: Tab Out Right */
            content: ''; position: absolute; right: -15px; top: calc(50% - 15px); width: 30px; height: 30px; border-radius: 50%; background: var(--bg-color); z-index: 10; border: 4px solid #374151;
        }
        .piece-1::before { /* D Bazil: Tab In Bottom */
            content: ''; position: absolute; bottom: -15px; left: calc(50% - 15px); width: 30px; height: 30px; border-radius: 50%; background: white; z-index: 10; border: 4px solid #374151;
        }

        .piece-2::after { /* Bert: Tab Out Bottom */
            content: ''; position: absolute; bottom: -15px; left: calc(50% - 15px); width: 30px; height: 30px; border-radius: 50%; background: var(--bg-color); z-index: 10; border: 4px solid #374151;
        }
        .piece-2::before { /* Bert: Tab In Left */
            content: ''; position: absolute; left: -15px; top: calc(50% - 15px); width: 30px; height: 30px; border-radius: 50%; background: white; z-index: 10; border: 4px solid #374151;
        }

        .piece-3::after { /* Salsa: Tab Out Right */
            content: ''; position: absolute; right: -15px; top: calc(50% - 15px); width: 30px; height: 30px; border-radius: 50%; background: var(--bg-color); z-index: 10; border: 4px solid #374151;
        }
        .piece-3::before { /* Salsa: Tab In Top */
            content: ''; position: absolute; top: -15px; left: calc(50% - 15px); width: 30px; height: 30px; border-radius: 50%; background: white; z-index: 10; border: 4px solid #374151;
        }

        .piece-4::after { /* Advisory: Tab Out Top */
            content: ''; position: absolute; top: -15px; left: calc(50% - 15px); width: 30px; height: 30px; border-radius: 50%; background: var(--bg-color); z-index: 10; border: 4px solid #374151;
        }
        .piece-4::before { /* Advisory: Tab In Left */
            content: ''; position: absolute; left: -15px; top: calc(50% - 15px); width: 30px; height: 30px; border-radius: 50%; background: white; z-index: 10; border: 4px solid #374151;
        }
        
      `}</style>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        <div className="text-center mb-16 pt-8">
          <div className="inline-block transform -rotate-2">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 bg-orange-200 px-10 py-5 shadow-xl border-4 border-purple-500 font-handwriting">
              The Team
            </h1>
          </div>
        </div>
        
        <div className="flex relative">
            
            <div 
                className={`relative shadow-2xl transition-all duration-500 ease-in-out ${mainContentClass}`}
                style={{ height: '500px' }} 
            >
                <div className="puzzle-grid-container shadow-2xl">
                    {teamMembers.map((member, index) => (
                        <div 
                            key={member.id}
                            className={`puzzle-piece ${member.color} text-white hover:z-20 piece-${member.id}`}
                            onClick={() => setActiveMember(member)}
                            onMouseEnter={() => setActiveMember(member)}
                            style={{ '--bg-color': member.color }} 
                        >
                            <div className="flex flex-col items-center justify-center h-full">
                                <div className="w-20 h-20 bg-white/30 rounded-full mb-3 overflow-hidden border-4 border-white flex items-center justify-center">
                                    {member.imgSrc ? (
                                        <img src={member.imgSrc} alt={member.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <User className="w-10 h-10 text-white" />
                                    )}
                                </div>
                                
                                <h3 className="text-xl font-bold text-shadow">{member.name}</h3>
                                <p className="text-xs font-light opacity-80 mt-1">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div 
                className={`absolute right-0 top-0 h-[500px] bg-white shadow-2xl border-l-4 border-teal-600 p-8 transition-transform duration-500 ease-in-out z-40 
                            ${activeMember ? 'translate-x-0 w-1/3 opacity-100' : 'translate-x-full w-0 opacity-0'}
                            ${activeMember ? 'md:w-1/3' : 'md:w-0'}`}
            >
                {activeMember ? (
                  <div className="flex flex-col h-full">
                    <button onClick={() => setActiveMember(null)} className="absolute top-4 right-4 text-gray-500 hover:text-red-500">
                        <X size={20} />
                    </button>
                    
                    <div className={`w-20 h-20 ${activeMember.color} rounded-full mb-4 flex items-center justify-center border-4 border-white shadow-lg`}>
                        <User className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-3xl font-extrabold text-gray-800 mb-1">{activeMember.name}</h3>
                    <p className="text-md font-medium text-orange-500 mb-4 flex items-center"><Briefcase className="w-4 h-4 mr-2" /> {activeMember.role}</p>

                    <p className="text-sm text-gray-600 flex-grow italic border-t pt-4">{activeMember.bio}</p>

                    <div className="mt-4 space-y-1">
                        <p className="text-xs text-teal-700 flex items-center"><Mail className="w-3 h-3 mr-2" /> {activeMember.email}</p>
                        <p className="text-xs text-teal-700 flex items-center"><MapPin className="w-3 h-3 mr-2" /> East Africa Base</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center pt-20 text-gray-500">
                    <ArrowRight className="w-12 h-12 mx-auto mb-4" />
                    <p className="text-xl font-handwriting">Click a puzzle piece to reveal the team member's details.</p>
                  </div>
                )}
            </div>
            
        </div>

        <div className="text-center pt-16 border-t border-dashed border-gray-400 mt-16">
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
                & many more
            </h2>
            <p className="text-lg text-gray-600">
                Our mission is supported by a dedicated **Advisory Board** of clinicians, public health leaders, and medtech investors.
            </p>
        </div>
        
      </div>
    </section>
  );
};

export default Team;