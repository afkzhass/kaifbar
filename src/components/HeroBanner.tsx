import React from 'react';
import { Utensils, Flame, BellRing, BookOpen, MapPin, Sparkles } from 'lucide-react';

interface HeroBannerProps {
  setIsCallWaiterOpen: (open: boolean) => void;
  setIsPresentationMode: (mode: boolean) => void;
  scrollToMenu: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  setIsCallWaiterOpen,
  setIsPresentationMode,
  scrollToMenu,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#0c0d10] border-b border-[#222630] py-12 sm:py-20 lg:py-24">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none filter blur-sm scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-[#0c0d10]/80 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Subtle Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#181b22] border border-[#e5a93c]/30 text-[#e5a93c] text-xs font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Добро пожаловать в KAIF Lounge Bar</span>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4">
          МЕНЮ
        </h1>
        <p className="font-display text-lg sm:text-2xl text-[#e5a93c] tracking-widest uppercase mb-6 font-normal">
          Ресторан & Бар
        </p>

        <div className="w-16 h-0.5 bg-[#e5a93c] mx-auto mb-6 opacity-80" />

        {/* Description */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
          Откройте для себя изысканные блюда восточной, паназиатской и европейской кухни в атмосфере полного уюта.
        </p>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={scrollToMenu}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[#e5a93c] text-black font-semibold text-sm hover:bg-[#f0b953] transition-all shadow-lg gold-glow"
          >
            <Utensils className="w-4 h-4 mr-2" />
            Перейти к блюдам
          </button>

          <button
            onClick={() => setIsCallWaiterOpen(true)}
            className="inline-flex items-center px-5 py-3 rounded-lg bg-[#1a1d26] text-[#e5a93c] border border-[#e5a93c]/40 font-medium text-sm hover:bg-[#232733] transition-all"
          >
            <BellRing className="w-4 h-4 mr-2" />
            Вызов официанта
          </button>

          <button
            onClick={() => setIsPresentationMode(true)}
            className="inline-flex items-center px-5 py-3 rounded-lg bg-[#14161f] text-gray-300 border border-[#2b3142] font-medium text-sm hover:text-white hover:border-[#e5a93c]/50 transition-all"
          >
            <BookOpen className="w-4 h-4 mr-2 text-[#e5a93c]" />
            Вид буклета
          </button>
        </div>

        {/* Features Strip */}
        <div className="mt-12 pt-8 border-t border-[#1e222d] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-gray-400">
          <div className="flex flex-col items-center p-2 rounded-lg bg-[#12141a]/60 border border-[#1d212c]">
            <MapPin className="w-4 h-4 text-[#e5a93c] mb-1" />
            <span className="font-medium text-gray-200">г. Астана</span>
            <span className="text-[11px] text-gray-500">пр. Абая 63</span>
          </div>

          <div className="flex flex-col items-center p-2 rounded-lg bg-[#12141a]/60 border border-[#1d212c]">
            <Flame className="w-4 h-4 text-[#e5a93c] mb-1" />
            <span className="font-medium text-gray-200">Мангал & Гриль</span>
            <span className="text-[11px] text-gray-500">Шашлыки на углях</span>
          </div>

          <div className="flex flex-col items-center p-2 rounded-lg bg-[#12141a]/60 border border-[#1d212c]">
            <Utensils className="w-4 h-4 text-[#e5a93c] mb-1" />
            <span className="font-medium text-gray-200">Восток & Европа</span>
            <span className="text-[11px] text-gray-500">Широкая кухня</span>
          </div>

          <div className="flex flex-col items-center p-2 rounded-lg bg-[#12141a]/60 border border-[#1d212c]">
            <span className="font-bold text-[#e5a93c] mb-1 text-sm">+10%</span>
            <span className="font-medium text-gray-200">Обслуживание</span>
            <span className="text-[11px] text-gray-500">Включается в чек</span>
          </div>
        </div>
      </div>
    </section>
  );
};
