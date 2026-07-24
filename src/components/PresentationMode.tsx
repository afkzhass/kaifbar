import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Printer, Sparkles, MapPin, Utensils } from 'lucide-react';

interface PresentationModeProps {
  onClose: () => void;
}

export const PresentationMode: React.FC<PresentationModeProps> = ({ onClose }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 9;

  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));

  return (
    <div className="fixed inset-0 z-50 bg-[#08090b] flex flex-col overflow-hidden text-white font-sans animate-fade-in">
      
      {/* Top Booklet Bar */}
      <div className="bg-[#12141a] border-b border-[#222630] px-4 py-3 flex items-center justify-between flex-shrink-0 z-20">
        <div className="flex items-center space-x-3">
          <span className="font-display text-xl font-bold gold-gradient-text">
            KAIF Lounge Bar
          </span>
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-[#e5a93c]/15 text-[#e5a93c] text-xs font-medium border border-[#e5a93c]/30">
            Презентационный буклет
          </span>
        </div>

        {/* Page Switcher */}
        <div className="flex items-center space-x-2">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="p-1.5 rounded-lg bg-[#1a1d26] border border-[#2a2f3e] disabled:opacity-30 hover:bg-[#252b38] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <span className="text-xs sm:text-sm font-semibold px-2 text-gray-300">
            Страница <strong className="text-[#e5a93c]">{currentPage}</strong> из {totalPages}
          </span>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="p-1.5 rounded-lg bg-[#1a1d26] border border-[#2a2f3e] disabled:opacity-30 hover:bg-[#252b38] transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => window.print()}
            className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-lg bg-[#1a1d26] text-xs font-medium border border-[#2a2f3e] hover:text-[#e5a93c]"
          >
            <Printer className="w-3.5 h-3.5 mr-1.5" />
            Печать
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#1f2330] hover:bg-red-500/20 text-gray-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Page Carousel Indicator */}
      <div className="bg-[#0e1014] border-b border-[#1c202b] px-4 py-2 flex items-center justify-center space-x-1 sm:space-x-2 overflow-x-auto no-scrollbar">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
          <button
            key={pg}
            onClick={() => setCurrentPage(pg)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
              currentPage === pg
                ? 'bg-[#e5a93c] text-black shadow-md'
                : 'bg-[#161820] text-gray-400 hover:text-white border border-[#232734]'
            }`}
          >
            Стр. {pg}
          </button>
        ))}
      </div>

      {/* Main Booklet Slide Container */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8 flex items-center justify-center">
        <div className="w-full max-w-5xl bg-[#111317] border border-[#272c3a] rounded-2xl shadow-2xl overflow-hidden min-h-[600px] flex flex-col justify-between relative gold-glow">

          {/* PAGE 1: COVER */}
          {currentPage === 1 && (
            <div className="relative flex-1 flex flex-col items-center justify-center p-8 text-center overflow-hidden bg-gradient-to-b from-[#14171f] via-[#0f1116] to-[#0a0b0e]">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none filter blur-sm scale-105"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80')` }}
              />
              <div className="relative z-10 max-w-xl p-8 sm:p-12 rounded-3xl bg-black/60 backdrop-blur-md border border-[#e5a93c]/30">
                <h1 className="font-display text-5xl sm:text-7xl font-extrabold gold-gradient-text tracking-wider mb-2">
                  МЕНЮ
                </h1>
                <p className="font-display text-xl sm:text-2xl text-gray-200 tracking-[0.3em] uppercase mb-6 font-normal">
                  Ресторан & Бар
                </p>
                <div className="w-20 h-0.5 bg-[#e5a93c] mx-auto mb-6" />
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light italic">
                  Откройте для себя изысканные блюда восточной, паназиатской и европейской кухни в атмосфере полного уюта.
                </p>
              </div>
            </div>
          )}

          {/* PAGE 2: SALADS */}
          {currentPage === 2 && (
            <div className="p-6 sm:p-10 flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-5">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#e5a93c] pb-2 border-b border-[#282d3d]">
                  Салаты & Холодные Закуски
                </h2>
                
                <div className="space-y-4">
                  <div className="border-b border-[#202431] pb-2">
                    <div className="flex justify-between font-bold text-white text-base">
                      <span>Цезарь с курицей</span>
                      <span className="text-[#e5a93c]">3 190 ₸</span>
                    </div>
                    <p className="text-xs text-gray-400">Хрустящие листья салата айсберг, сочное куриное филе, томаты черри, пармезан и фирменный соус.</p>
                  </div>

                  <div className="border-b border-[#202431] pb-2">
                    <div className="flex justify-between font-bold text-white text-base">
                      <span>Салат Ачу-чук</span>
                      <span className="text-[#e5a93c]">1 590 ₸</span>
                    </div>
                    <p className="text-xs text-gray-400">Традиционный легкий восточный салат из свежайших помидоров, сладкого лука и жгучего перца.</p>
                  </div>

                  <div className="border-b border-[#202431] pb-2">
                    <div className="flex justify-between font-bold text-white text-base">
                      <span>Кавказская нарезка</span>
                      <span className="text-[#e5a93c]">2 990 ₸</span>
                    </div>
                    <p className="text-xs text-gray-400">Традиционное мясное ассорти со свежей зеленью, идеально подходит в качестве легкой закуски.</p>
                  </div>

                  <div className="flex justify-between font-medium text-gray-200 text-sm">
                    <span>Баклажан хрустящий</span>
                    <span className="text-[#e5a93c]">2 890 ₸</span>
                  </div>

                  <div className="flex justify-between font-medium text-gray-200 text-sm">
                    <span>Салат Малибу</span>
                    <span className="text-[#e5a93c]">2 790 ₸</span>
                  </div>

                  <div className="flex justify-between font-medium text-gray-200 text-sm">
                    <span>Греческий салат</span>
                    <span className="text-[#e5a93c]">2 590 ₸</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 h-64 md:h-full rounded-2xl overflow-hidden shadow-2xl border border-[#2a2f3d]">
                <img
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
                  alt="Salad"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* PAGE 3: SOUPS */}
          {currentPage === 3 && (
            <div className="p-6 sm:p-10 flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 h-64 md:h-full rounded-2xl overflow-hidden shadow-2xl border border-[#2a2f3d] order-2 md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80"
                  alt="Soup"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-7 space-y-5 order-1 md:order-2">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#e5a93c] pb-2 border-b border-[#282d3d]">
                  Первые Блюда
                </h2>
                
                <div className="space-y-4">
                  <div className="border-b border-[#202431] pb-2">
                    <div className="flex justify-between font-bold text-white text-base">
                      <span>Том Ям (2 вида)</span>
                      <span className="text-[#e5a93c]">3 190 - 3 390 ₸</span>
                    </div>
                    <p className="text-xs text-gray-400">Легендарный тайский суп на кокосовом молоке с дарами моря или курицей, грибами и специями.</p>
                  </div>

                  <div className="border-b border-[#202431] pb-2">
                    <div className="flex justify-between font-bold text-white text-base">
                      <span>Рамен (3 вида)</span>
                      <span className="text-[#e5a93c]">2 790 - 3 190 ₸</span>
                    </div>
                    <p className="text-xs text-gray-400">Наваристый азиатский суп с лапшой ручной работы, ароматным бульоном, нежным мясом и яйцом.</p>
                  </div>

                  <div className="border-b border-[#202431] pb-2">
                    <div className="flex justify-between font-bold text-white text-base">
                      <span>Солянка мясная</span>
                      <span className="text-[#e5a93c]">2 490 ₸</span>
                    </div>
                    <p className="text-xs text-gray-400">Насыщенный домашний суп с мясными деликатесами, маслинами, лимоном и сметаной.</p>
                  </div>

                  <div className="flex justify-between font-medium text-gray-200 text-sm">
                    <span>Крем-суп из чечевицы</span>
                    <span className="text-[#e5a93c]">2 190 ₸</span>
                  </div>

                  <div className="flex justify-between font-medium text-gray-200 text-sm">
                    <span>Шорпа бар</span>
                    <span className="text-[#e5a93c]">2 890 ₸</span>
                  </div>

                  <div className="flex justify-between font-medium text-gray-200 text-sm">
                    <span>Куриный суп домашний</span>
                    <span className="text-[#e5a93c]">2 190 ₸</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PAGE 4: MAINS */}
          {currentPage === 4 && (
            <div className="p-6 sm:p-10 flex-1 flex flex-col justify-between space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#e5a93c] pb-2 border-b border-[#282d3d]">
                Основные Блюда
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* East Hits */}
                <div className="p-5 rounded-2xl bg-[#161820] border border-[#272b38] space-y-3">
                  <h3 className="font-display text-xl font-bold text-[#e5a93c] border-b border-[#222734] pb-2">
                    Восточные Хиты
                  </h3>
                  <div className="flex justify-between font-bold text-white text-sm">
                    <span>Қазан Кебаб</span>
                    <span className="text-[#e5a93c]">4 290 ₸</span>
                  </div>
                  <p className="text-xs text-gray-400">Обжаренное до золотистой корочки мясо барашка с нежным картофелем.</p>

                  <div className="flex justify-between font-bold text-white text-sm pt-2">
                    <span>Традиционный Плов</span>
                    <span className="text-[#e5a93c]">2 590 ₸</span>
                  </div>
                  <p className="text-xs text-gray-400">Рассыпчатый плов с сочным мясом, нутом и желтой морковью.</p>

                  <div className="flex justify-between text-xs text-gray-300 pt-1">
                    <span>Лагман (Гуйру / Цомян)</span>
                    <span className="text-[#e5a93c]">2 790 / 2 890 ₸</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>Манты домашние</span>
                    <span className="text-[#e5a93c]">2 690 ₸</span>
                  </div>
                </div>

                {/* Europe & Asia */}
                <div className="p-5 rounded-2xl bg-[#161820] border border-[#272b38] space-y-3">
                  <h3 className="font-display text-xl font-bold text-[#e5a93c] border-b border-[#222734] pb-2">
                    Европа & Азия
                  </h3>
                  <div className="flex justify-between font-bold text-white text-sm">
                    <span>Стейк Рибай</span>
                    <span className="text-[#e5a93c]">5 790 ₸</span>
                  </div>
                  <p className="text-xs text-gray-400">Премиальный отруб мраморной говядины до идеальной степени прожарки.</p>

                  <div className="flex justify-between font-bold text-white text-sm pt-2">
                    <span>Паста Фетучини</span>
                    <span className="text-[#e5a93c]">2 790 / 2 890 ₸</span>
                  </div>
                  <p className="text-xs text-gray-400">Итальянская паста в сливочном соусе с курицей или тигровыми креветками.</p>

                  <div className="flex justify-between text-xs text-gray-300 pt-1">
                    <span>Мясо по-тайски с рисом</span>
                    <span className="text-[#e5a93c]">2 890 ₸</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>Бефстроганов с пюре</span>
                    <span className="text-[#e5a93c]">2 990 ₸</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PAGE 5: GRILL & SHASHLIK */}
          {currentPage === 5 && (
            <div className="p-6 sm:p-10 flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-5">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#e5a93c] pb-2 border-b border-[#282d3d]">
                  Мангал & Гриль
                </h2>
                
                <div className="space-y-4">
                  <div className="border-b border-[#202431] pb-2">
                    <div className="flex justify-between font-bold text-white text-base">
                      <span>Ассорти Шашлыков</span>
                      <span className="text-[#e5a93c]">21 990 ₸</span>
                    </div>
                    <p className="text-xs text-gray-400">Грандиозный сет "Макс" сочного мяса на углях для большой компании. (Ассорти мини - 14 990 тг).</p>
                  </div>

                  <div className="border-b border-[#202431] pb-2">
                    <div className="flex justify-between font-bold text-white text-base">
                      <span>Шашлык из Баранины</span>
                      <span className="text-[#e5a93c]">3 390 ₸</span>
                    </div>
                    <p className="text-xs text-gray-400">Классика жанра, приготовленная на открытом огне по фирменному маринаду.</p>
                  </div>

                  <div className="border-b border-[#202431] pb-2">
                    <div className="flex justify-between font-bold text-white text-base">
                      <span>Люля-Кебаб</span>
                      <span className="text-[#e5a93c]">2 790 ₸</span>
                    </div>
                    <p className="text-xs text-gray-400">Нежный рубленый мясной кебаб с восточными пряностями и зеленью.</p>
                  </div>

                  <div className="flex justify-between font-medium text-gray-200 text-sm">
                    <span>Шашлык из Говядины</span>
                    <span className="text-[#e5a93c]">3 290 ₸</span>
                  </div>

                  <div className="flex justify-between font-medium text-gray-200 text-sm">
                    <span>Шашлык из Куриного Филе</span>
                    <span className="text-[#e5a93c]">2 690 ₸</span>
                  </div>

                  <div className="flex justify-between font-medium text-gray-200 text-sm">
                    <span>Шашлык из Утки</span>
                    <span className="text-[#e5a93c]">2 790 ₸</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 h-64 md:h-full rounded-2xl overflow-hidden shadow-2xl border border-[#2a2f3d]">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
                  alt="Shashlik"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* PAGE 6: FAST FOOD */}
          {currentPage === 6 && (
            <div className="p-6 sm:p-10 flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-5">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#e5a93c] pb-2 border-b border-[#282d3d]">
                  Фаст-Фуд & Закуски
                </h2>
                
                <div className="space-y-4">
                  <div className="border-b border-[#202431] pb-2">
                    <div className="flex justify-between font-bold text-white text-base">
                      <span>Бургер с говядиной и фри</span>
                      <span className="text-[#e5a93c]">3 190 ₸</span>
                    </div>
                    <p className="text-xs text-gray-400">Сочная говяжья котлета, расплавленный сыр, свежие овощи и соус в булочке.</p>
                  </div>

                  <div className="border-b border-[#202431] pb-2">
                    <div className="flex justify-between font-bold text-white text-base">
                      <span>Пивной Сет №2</span>
                      <span className="text-[#e5a93c]">5 490 ₸</span>
                    </div>
                    <p className="text-xs text-gray-400">Чечил, луковые кольца, сырные палочки, азиатские крылышки, картофель фри, чипсы и соусы.</p>
                  </div>

                  <div className="border-b border-[#202431] pb-2">
                    <div className="flex justify-between font-bold text-white text-base">
                      <span>Кесадилья с курицей</span>
                      <span className="text-[#e5a93c]">2 990 ₸</span>
                    </div>
                    <p className="text-xs text-gray-400">Мексиканская лепешка тортилья с курицей, сыром и овощами.</p>
                  </div>

                  <div className="flex justify-between font-medium text-gray-200 text-sm">
                    <span>Пивной Сет №1 (колбаски, гренки)</span>
                    <span className="text-[#e5a93c]">4 990 ₸</span>
                  </div>

                  <div className="flex justify-between font-medium text-gray-200 text-sm">
                    <span>Пивные креветки</span>
                    <span className="text-[#e5a93c]">3 190 ₸</span>
                  </div>

                  <div className="flex justify-between font-medium text-gray-200 text-sm">
                    <span>Клаб сэндвич с фри</span>
                    <span className="text-[#e5a93c]">2 990 ₸</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 h-64 md:h-full rounded-2xl overflow-hidden shadow-2xl border border-[#2a2f3d]">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
                  alt="Burger"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* PAGE 7: SOFT BAR */}
          {currentPage === 7 && (
            <div className="p-6 sm:p-10 flex-1 flex flex-col justify-between space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#e5a93c] pb-2 border-b border-[#282d3d]">
                Безалкогольный Бар
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-[#161820] border border-[#272b38] space-y-2">
                  <h3 className="font-display text-lg font-bold text-[#e5a93c] border-b border-[#222734] pb-1.5">
                    Кофейная Карта
                  </h3>
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Раф / Флэт Уайт</span>
                    <span className="text-[#e5a93c]">1890 / 2190</span>
                  </div>
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Бамбл кофе</span>
                    <span className="text-[#e5a93c]">2190</span>
                  </div>
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Капучино / Латте</span>
                    <span className="text-[#e5a93c]">1390 / 1490</span>
                  </div>
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Американо / Эспрессо</span>
                    <span className="text-[#e5a93c]">990 / 890</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#161820] border border-[#272b38] space-y-2">
                  <h3 className="font-display text-lg font-bold text-[#e5a93c] border-b border-[#222734] pb-1.5">
                    Лимонады & Соки
                  </h3>
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Манго-Маракуйя (1л)</span>
                    <span className="text-[#e5a93c]">2190</span>
                  </div>
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Цитрусовый (1л)</span>
                    <span className="text-[#e5a93c]">2190</span>
                  </div>
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Мохито с малиной (1л)</span>
                    <span className="text-[#e5a93c]">2190</span>
                  </div>
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Сок Piko (1л)</span>
                    <span className="text-[#e5a93c]">1890</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#161820] border border-[#272b38] space-y-2">
                  <h3 className="font-display text-lg font-bold text-[#e5a93c] border-b border-[#222734] pb-1.5">
                    Авторский Чай (1л)
                  </h3>
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Ташкентский</span>
                    <span className="text-[#e5a93c]">2200</span>
                  </div>
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Марокканский</span>
                    <span className="text-[#e5a93c]">2200</span>
                  </div>
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Ягодный / Фруктовый</span>
                    <span className="text-[#e5a93c]">2200</span>
                  </div>
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Облепиховый</span>
                    <span className="text-[#e5a93c]">2200</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PAGE 8: BAR MAP */}
          {currentPage === 8 && (
            <div className="p-6 sm:p-10 flex-1 flex flex-col justify-between space-y-5">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#e5a93c] pb-2 border-b border-[#282d3d]">
                Барная Карта: Выбор Ценителей
              </h2>

              <div className="overflow-x-auto rounded-xl border border-[#272b38]">
                <table className="w-full text-xs text-left">
                  <thead className="bg-[#181b24] text-[#e5a93c] uppercase text-[10px] tracking-wider border-b border-[#272b38]">
                    <tr>
                      <th className="p-3">Наименование</th>
                      <th className="p-3">Категория</th>
                      <th className="p-3">Объем</th>
                      <th className="p-3 text-right">Цена</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#202431] text-gray-200">
                    <tr>
                      <td className="p-3 font-semibold">Jameson / Ballantines</td>
                      <td className="p-3 text-gray-400">Виски</td>
                      <td className="p-3">50 мл</td>
                      <td className="p-3 text-right font-bold text-[#e5a93c]">2190 / 1790 ₸</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Chivas 18 / The Glenlivet</td>
                      <td className="p-3 text-gray-400">Премиум Виски</td>
                      <td className="p-3">50 мл</td>
                      <td className="p-3 text-right font-bold text-[#e5a93c]">3690 / 3390 ₸</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Aperol Spritz / Mojito</td>
                      <td className="p-3 text-gray-400">Коктейль</td>
                      <td className="p-3">1 порция</td>
                      <td className="p-3 text-right font-bold text-[#e5a93c]">2190 ₸</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Long Island</td>
                      <td className="p-3 text-gray-400">Коктейль</td>
                      <td className="p-3">1 порция</td>
                      <td className="p-3 text-right font-bold text-[#e5a93c]">2590 ₸</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Olmeca Gold</td>
                      <td className="p-3 text-gray-400">Текила</td>
                      <td className="p-3">50 мл</td>
                      <td className="p-3 text-right font-bold text-[#e5a93c]">1890 ₸</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Havana Club / Oakheart</td>
                      <td className="p-3 text-gray-400">Ром</td>
                      <td className="p-3">50 мл</td>
                      <td className="p-3 text-right font-bold text-[#e5a93c]">1790 / 1590 ₸</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Фирменное / Прага</td>
                      <td className="p-3 text-gray-400">Пиво разливное</td>
                      <td className="p-3">0.5 л</td>
                      <td className="p-3 text-right font-bold text-[#e5a93c]">1290 / 990 ₸</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* PAGE 9: THANK YOU */}
          {currentPage === 9 && (
            <div className="relative flex-1 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#14171f] via-[#0f1116] to-[#0a0b0e]">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none filter blur-sm scale-105"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80')` }}
              />
              <div className="relative z-10 max-w-xl p-8 sm:p-12 rounded-3xl bg-black/60 backdrop-blur-md border border-[#e5a93c]/30">
                <h1 className="font-display text-4xl sm:text-6xl font-bold gold-gradient-text mb-4">
                  Приятного Аппетита!
                </h1>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                  Надеемся, что вкус наших блюд и атмосфера оставят у вас только самые теплые впечатления. Будем рады видеть вас снова!
                </p>
              </div>
            </div>
          )}

          {/* Booklet Footer */}
          <div className="bg-[#0b0c0f] border-t border-[#1c202b] px-6 py-3 text-xs text-gray-500 flex items-center justify-between">
            <span className="flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1 text-[#e5a93c]" />
              г. Астана, пр. Абая 63
            </span>
            <span>ОБСЛУЖИВАНИЕ 10%</span>
          </div>

        </div>
      </div>

    </div>
  );
};
