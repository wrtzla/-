import React, { useState, useEffect } from 'react';
import { Background } from './components/Background';
import { LinkCard } from './components/LinkCard';
import { PROFILE_DATA, LINKS } from './constants';
import { Minus, Square, X } from 'lucide-react';

const App: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-sans select-none">
      <Background />
      
      {/* Main Window */}
      <div className="w-full max-w-lg bg-win95-gray shadow-out p-1 flex flex-col">
        
        {/* Title Bar */}
        <div className="bg-win95-blue px-1 py-1 flex justify-between items-center mb-1">
          <div className="flex items-center gap-2">
            <img 
              src="https://win98icons.alexmeub.com/icons/png/computer_explorer-0.png" 
              alt="icon" 
              className="w-4 h-4"
            />
            <span className="text-white font-bold text-sm tracking-wide">TeamKG Personal Hub.exe</span>
          </div>
          <div className="flex gap-0.5">
            <button className="w-4 h-4 bg-win95-gray shadow-out flex items-center justify-center active:shadow-in text-xs">
              <Minus size={10} strokeWidth={4} />
            </button>
            <button className="w-4 h-4 bg-win95-gray shadow-out flex items-center justify-center active:shadow-in text-xs">
              <Square size={8} strokeWidth={4} />
            </button>
            <button className="w-4 h-4 bg-win95-gray shadow-out flex items-center justify-center active:shadow-in text-xs ml-0.5">
              <X size={10} strokeWidth={4} />
            </button>
          </div>
        </div>

        {/* Menu Bar */}
        <div className="flex gap-4 px-2 py-1 text-sm mb-2 border-b border-white shadow-[0_1px_0_0_#808080]">
          <span className="underline decoration-1 cursor-pointer hover:bg-win95-blue hover:text-white px-1">F</span>ile
          <span className="underline decoration-1 cursor-pointer hover:bg-win95-blue hover:text-white px-1">E</span>dit
          <span className="underline decoration-1 cursor-pointer hover:bg-win95-blue hover:text-white px-1">V</span>iew
          <span className="underline decoration-1 cursor-pointer hover:bg-win95-blue hover:text-white px-1">H</span>elp
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4">
          
          {/* Profile Header - "Inset" look */}
          <div className="bg-white shadow-in p-4 mb-6 flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <img 
                src={PROFILE_DATA.avatarUrl} 
                alt={PROFILE_DATA.name} 
                className="w-24 h-24 border-2 border-gray-500 shadow-[1px_1px_0_0_#ffffff]"
              />
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold mb-1">{PROFILE_DATA.name}</h1>
              <p className="text-sm text-gray-600 italic mb-2">{PROFILE_DATA.title}</p>
              <p className="text-sm leading-tight">
                {PROFILE_DATA.bio}
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="mb-2">
            <p className="mb-2 text-sm font-bold">My Links:</p>
            <div className="space-y-1">
              {LINKS.map((link, index) => (
                <LinkCard key={link.id} link={link} index={index} />
              ))}
            </div>
          </div>

        </div>

        {/* Status Bar */}
        <div className="border-t border-gray-400 p-1 flex justify-between items-center text-xs text-gray-600 bg-win95-gray mt-1 shadow-in">
          <div className="flex gap-4 px-1">
            <span>{LINKS.length} object(s)</span>
            <span>Free Space: 0KB</span>
          </div>
          <div className="px-1 border-l border-gray-400 pl-2">
             {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
      
      {/* Start Bar Placeholder (Visual only, fixed at bottom) */}
      <div className="fixed bottom-0 left-0 w-full h-10 bg-win95-gray shadow-out flex items-center px-1 z-50">
        <button className="flex items-center gap-1 px-2 py-1 bg-win95-gray shadow-out active:shadow-in font-bold border border-transparent mr-2">
            <img src="https://win98icons.alexmeub.com/icons/png/windows-0.png" className="w-5 h-5" alt="logo"/>
            Start
        </button>
        <div className="flex-1"></div>
        <div className="bg-win95-gray shadow-in px-3 py-1 text-xs flex items-center gap-2">
           <img src="https://win98icons.alexmeub.com/icons/png/loudspeaker_rays-0.png" className="w-4 h-4" alt="sound"/>
           {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default App;