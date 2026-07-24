import React, { useState } from 'react';
import { Search, BellRing, MapPin, Clock, X, PhoneCall } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setIsCallWaiterOpen: (open: boolean) => void;
  isPresentationMode: boolean;
  setIsPresentationMode: (mode: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  setIsCallWaiterOpen,
  isPresentationMode,
  setIsPresentationMode,
}) => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#071f19]/95 backdrop-blur-md border-b border-[#123e32]">
      {/* Top Bar with info */}
      <div className="hidden sm:block bg-[#0a2720] text-xs text-gray-400 py-1.5 border-b border-[#11382d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-gray-300">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-[#e5a93c]" />
              г. Астана, пр. Абая 63
            </span>
            <span className="flex items-center text-gray-300">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-[#e5a93c]" />
              Ежедневно: 12:00 — 03:00
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#e5a93c]/10 text-[#e5a93c] border border-[#e5a93c]/20 font-medium">
              Обслуживание +10%
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a href="tel:+77071234567" className="flex items-center hover:text-[#e5a93c] transition-colors">
              <PhoneCall className="w-3.5 h-3.5 mr-1 text-[#e5a93c]" />
              +7 (707) 123-45-67
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="cursor-pointer flex flex-col" onClick={() => setIsPresentationMode(false)}>
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-wider gold-gradient-text">
                KAIF
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.25em] text-gray-400 uppercase -mt-1 font-sans">
                Лаундж бар
              </span>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Поиск блюда, напитка, шашлыка..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0c2a22] text-sm text-gray-200 pl-10 pr-10 py-2.5 rounded-full border border-[#184a3c] focus:outline-none focus:border-[#e5a93c] focus:ring-1 focus:ring-[#e5a93c] transition-all placeholder:text-gray-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Call Waiter Button */}
            <button
              onClick={() => setIsCallWaiterOpen(true)}
              className="inline-flex items-center px-3 py-2 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-lg bg-gradient-to-r from-[#e5a93c] to-[#c28821] text-black hover:brightness-110 transition-all shadow-md gold-glow"
            >
              <BellRing className="w-4 h-4 mr-1.5 animate-bounce" />
              <span className="hidden sm:inline">Вызвать официанта</span>
              <span className="sm:hidden">Официант</span>
            </button>

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg bg-[#0e2c24] border border-[#184a3c]"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Expandable */}
        {isMobileSearchOpen && (
          <div className="md:hidden py-3 border-t border-[#123e32] transition-all">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск по меню KAIF..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-[#0c2a22] text-sm text-gray-200 pl-10 pr-10 py-2.5 rounded-lg border border-[#e5a93c]/50 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
