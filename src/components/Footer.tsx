import React from 'react';
import { MapPin, Phone, Clock, Instagram, Shield, ArrowUp, Flame } from 'lucide-react';

interface FooterProps {
  setIsCallWaiterOpen: (open: boolean) => void;
  setIsPresentationMode: (mode: boolean) => void;
}

export const Footer: React.FC<FooterProps> = ({
  setIsCallWaiterOpen,
  setIsPresentationMode,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04120f] border-t border-[#0d3027] text-gray-400 pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#08231c]">
          
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold gold-gradient-text">
                KAIF
              </span>
              <span className="text-[10px] tracking-[0.2em] text-gray-400 uppercase -mt-1 font-sans">
                Лаундж бар
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Электронное интерактивное меню заведения. Изысканная кухня, авторский бар и комфортный отдых.
            </p>
            <div className="pt-2 flex items-center space-x-2">
              <button
                onClick={() => setIsCallWaiterOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-[#07221b] text-[#e5a93c] border border-[#e5a93c]/30 text-xs font-semibold hover:bg-[#e5a93c]/10"
              >
                🔔 Вызвать официанта
              </button>
            </div>
          </div>

          {/* Location & Contacts */}
          <div className="space-y-2.5">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Контакты & Локация
            </h4>
            <div className="flex items-start space-x-2 text-xs">
              <MapPin className="w-4 h-4 text-[#e5a93c] flex-shrink-0 mt-0.5" />
              <span>г. Астана, пр. Абая 63</span>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <Phone className="w-4 h-4 text-[#e5a93c] flex-shrink-0" />
              <a href="tel:+77071234567" className="hover:text-[#e5a93c]">
                +7 (707) 123-45-67
              </a>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <Clock className="w-4 h-4 text-[#e5a93c] flex-shrink-0" />
              <span>Ежедневно с 12:00 до 03:00</span>
            </div>
          </div>

          {/* Rules & Service */}
          <div className="space-y-2.5">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Условия заведения
            </h4>
            <div className="p-3 rounded-xl bg-[#07221b] border border-[#10382e] text-xs space-y-1">
              <p className="text-[#e5a93c] font-bold">Обслуживание: +10%</p>
              <p className="text-[11px] text-gray-400 leading-snug">
                В сумму счета автоматически включается плата за обслуживание в размере 10%.
              </p>
            </div>
            <button
              onClick={() => setIsPresentationMode(true)}
              className="text-xs text-gray-300 hover:text-[#e5a93c] underline"
            >
              Открыть страничный вид (PDF-буклет)
            </button>
          </div>

          {/* Back to Top */}
          <div className="flex flex-col justify-between items-start md:items-end">
            <div className="text-xs text-gray-400">
              <p>Цены указаны в тенге (₸)</p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#07221b] border border-[#123e32] text-xs text-gray-300 hover:text-white hover:border-[#e5a93c]/50 transition-all"
            >
              <ArrowUp className="w-4 h-4 text-[#e5a93c]" />
              <span>Наверх меню</span>
            </button>
          </div>

        </div>

        <div className="pt-6 text-center text-[11px] text-gray-400">
          © {new Date().getFullYear()} KAIF Lounge Bar. Все права защищены.
        </div>

      </div>
    </footer>
  );
};
