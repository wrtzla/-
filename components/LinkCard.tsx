import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SocialLink, LinkCategory } from '../types';

interface LinkCardProps {
  link: SocialLink;
  index: number;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  return (
    <a
      href={link.url}
      target={link.category === LinkCategory.CONTACT ? '_self' : '_blank'}
      rel="noopener noreferrer"
      className="group block w-full mb-3 no-underline"
    >
      <div className="
        flex items-center p-2 
        bg-win95-gray 
        shadow-out 
        active:shadow-in 
        active:translate-y-[1px] 
        transition-none
        border border-transparent
      ">
        <div className="mr-4 p-1 border border-transparent">
          {/* Icons in Win95 were often colorful, keeping them simply colored here */}
          <link.icon size={24} className="text-black" />
        </div>
        
        <div className="flex-1 text-left">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-black">
              {link.title}
            </h3>
            {/* Conditional icon for external links */}
            {link.category !== LinkCategory.CONTACT && (
              <ArrowUpRight size={14} className="text-gray-600" />
            )}
          </div>
          <p className="text-xs text-gray-600 truncate">
            {link.description}
          </p>
        </div>
      </div>
    </a>
  );
};