import React, { useState } from 'react';
import { Flame, Sparkles, Eye } from 'lucide-react';
import { MenuItem, Variant } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
  onSelectItem: (item: MenuItem) => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  onSelectItem,
}) => {
  const [selectedVariant, setSelectedVariant] = useState<Variant | undefined>(
    item.variants && item.variants.length > 0 ? item.variants[0] : undefined
  );

  const currentPrice = selectedVariant ? selectedVariant.price : item.price;

  return (
    <div 
      onClick={() => onSelectItem(item)}
      className="group relative flex flex-col justify-between rounded-2xl bg-[#0b2820] border border-[#144337] hover:border-[#e5a93c]/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden cursor-pointer dark-card-bg"
    >
      {/* Top Image Container */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#09201a]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2820] via-transparent to-black/30" />

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {item.tags?.includes('hit') && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#e5a93c] text-black text-[10px] font-bold shadow-md uppercase tracking-wider">
              <Sparkles className="w-3 h-3 mr-0.5" /> ХИТ
            </span>
          )}
          {item.tags?.includes('spicy') && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-red-600 text-white text-[10px] font-bold shadow-md uppercase tracking-wider">
              <Flame className="w-3 h-3 mr-0.5" /> ОСТРОЕ
            </span>
          )}
          {item.tags?.includes('chef') && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-amber-900/90 text-amber-200 border border-amber-500/40 text-[10px] font-bold shadow-md uppercase tracking-wider">
              👨‍🍳 ШЕФ
            </span>
          )}
          {item.tags?.includes('vegetarian') && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-900/90 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold shadow-md uppercase tracking-wider">
              🥗 VEG
            </span>
          )}
        </div>

        {/* Portion / Volume Badge */}
        {item.weightOrVolume && (
          <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-gray-300 text-[11px] font-medium border border-white/10">
            {item.weightOrVolume}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-[#e5a93c] transition-colors leading-snug mb-1.5">
            {item.name}
          </h3>

          {item.description && (
            <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed mb-3">
              {item.description}
            </p>
          )}
        </div>

        {/* Variants Selector if present */}
        {item.variants && item.variants.length > 0 && (
          <div className="mb-3 pt-2 border-t border-[#144337]" onClick={(e) => e.stopPropagation()}>
            <label className="block text-[11px] text-gray-400 mb-1 font-medium">
              Варианты порции:
            </label>
            <div className="grid grid-cols-1 gap-1 max-h-24 overflow-y-auto no-scrollbar">
              {item.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`flex items-center justify-between px-2.5 py-1 rounded-lg text-xs transition-all ${
                    selectedVariant?.id === variant.id
                      ? 'bg-[#e5a93c]/20 text-[#e5a93c] border border-[#e5a93c]/60 font-medium'
                      : 'bg-[#07221b] text-gray-300 hover:text-white border border-[#10382d]'
                  }`}
                >
                  <span className="truncate pr-1">{variant.name}</span>
                  <span className="font-semibold text-gray-200 whitespace-nowrap">
                    {variant.price.toLocaleString('ru-RU')} ₸
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Footer Price & View Info Button */}
        <div className="pt-2 flex items-center justify-between border-t border-[#144337]/60">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-gray-400 block -mb-0.5">
              Цена
            </span>
            <span className="font-display text-lg sm:text-xl font-bold text-[#e5a93c]">
              {currentPrice.toLocaleString('ru-RU')} ₸
            </span>
          </div>

          <button
            onClick={() => onSelectItem(item)}
            className="inline-flex items-center justify-center px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#07221b] text-gray-200 border border-[#144337] group-hover:border-[#e5a93c]/50 group-hover:text-white transition-all shadow-sm"
          >
            <Eye className="w-3.5 h-3.5 mr-1 text-[#e5a93c]" />
            <span>Инфо</span>
          </button>
        </div>
      </div>
    </div>
  );
};
