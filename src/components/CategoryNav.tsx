import React from 'react';
import { 
  Salad, Soup, Utensils, Flame, Sandwich, Package, 
  Layers, Coffee, Wine, Sparkles, Spicy
} from 'lucide-react';
import { MENU_CATEGORIES } from '../data/menuData';
import { ActiveFilter } from '../types';

interface CategoryNavProps {
  activeCategory: string;
  setActiveCategory: (catId: string) => void;
  activeFilter: ActiveFilter;
  setActiveFilter: (filter: ActiveFilter) => void;
  totalItemsCount: number;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Salad: (props) => <Salad {...props} />,
  Soup: (props) => <Soup {...props} />,
  Utensils: (props) => <Utensils {...props} />,
  Flame: (props) => <Flame {...props} />,
  Sandwich: (props) => <Sandwich {...props} />,
  Package: (props) => <Package {...props} />,
  Layers: (props) => <Layers {...props} />,
  Coffee: (props) => <Coffee {...props} />,
  Wine: (props) => <Wine {...props} />,
};

export const CategoryNav: React.FC<CategoryNavProps> = ({
  activeCategory,
  setActiveCategory,
  activeFilter,
  setActiveFilter,
}) => {
  return (
    <div className="sticky top-16 sm:top-20 z-30 bg-[#0c0d10]/95 backdrop-blur-md border-b border-[#222630] py-3 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quick Type Filter Chips */}
        <div className="flex items-center space-x-2 pb-2.5 mb-2.5 overflow-x-auto no-scrollbar border-b border-[#1c202a]">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              activeFilter === 'all'
                ? 'bg-[#e5a93c] text-black font-semibold shadow'
                : 'bg-[#181b22] text-gray-400 hover:text-white border border-[#262b38]'
            }`}
          >
            Все позиции
          </button>

          <button
            onClick={() => setActiveFilter('food')}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              activeFilter === 'food'
                ? 'bg-[#e5a93c] text-black font-semibold shadow'
                : 'bg-[#181b22] text-gray-400 hover:text-white border border-[#262b38]'
            }`}
          >
            🍽️ Кухня & Блюда
          </button>

          <button
            onClick={() => setActiveFilter('bar')}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              activeFilter === 'bar'
                ? 'bg-[#e5a93c] text-black font-semibold shadow'
                : 'bg-[#181b22] text-gray-400 hover:text-white border border-[#262b38]'
            }`}
          >
            🍸 Бар & Напитки
          </button>

          <button
            onClick={() => setActiveFilter('hits')}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center ${
              activeFilter === 'hits'
                ? 'bg-[#e5a93c] text-black font-semibold shadow'
                : 'bg-[#181b22] text-gray-400 hover:text-white border border-[#262b38]'
            }`}
          >
            <Sparkles className="w-3 h-3 mr-1 text-[#e5a93c]" />
            Хиты меню
          </button>

          <button
            onClick={() => setActiveFilter('spicy')}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center ${
              activeFilter === 'spicy'
                ? 'bg-red-500 text-white font-semibold shadow'
                : 'bg-[#181b22] text-gray-400 hover:text-white border border-[#262b38]'
            }`}
          >
            <Flame className="w-3 h-3 mr-1 text-red-400" />
            Острые блюда 🌶️
          </button>
        </div>

        {/* Main Category Tabs Carousel */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => setActiveCategory('all_categories')}
            className={`flex items-center px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all border ${
              activeCategory === 'all_categories'
                ? 'bg-[#e5a93c]/15 text-[#e5a93c] border-[#e5a93c] font-semibold'
                : 'bg-[#14161b] text-gray-300 border-[#222733] hover:border-gray-600'
            }`}
          >
            Все категории
          </button>

          {MENU_CATEGORIES.map((cat) => {
            const IconComponent = ICON_MAP[cat.iconName] || Utensils;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-[#e5a93c] text-black border-[#e5a93c] font-bold shadow-md'
                    : 'bg-[#14161b] text-gray-300 border-[#222733] hover:border-gray-600 hover:text-white'
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? 'text-black' : 'text-[#e5a93c]'}`} />
                <span>{cat.title}</span>
                <span className={`ml-1 text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-black/20 text-black' : 'bg-[#1e222d] text-gray-400'
                }`}>
                  {cat.items.length}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
