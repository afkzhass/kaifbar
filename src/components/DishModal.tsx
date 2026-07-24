import React, { useState } from 'react';
import { X, Sparkles, Flame, Check } from 'lucide-react';
import { MenuItem, Variant } from '../types';

interface DishModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const DishModal: React.FC<DishModalProps> = ({
  item,
  onClose,
}) => {
  if (!item) return null;

  const [selectedVariant, setSelectedVariant] = useState<Variant | undefined>(
    item.variants && item.variants.length > 0 ? item.variants[0] : undefined
  );

  const unitPrice = selectedVariant ? selectedVariant.price : item.price;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#14161b] border border-[#2c3240] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] dark-card-bg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-gray-300 hover:text-white hover:bg-black/80 transition-colors border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-56 sm:h-64 w-full bg-[#1e222d] overflow-hidden flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14161b] via-transparent to-black/30" />

          {/* Badges Overlay */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
            {item.tags?.includes('hit') && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#e5a93c] text-black text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 mr-1" /> ХИТ МЕНЮ
              </span>
            )}
            {item.tags?.includes('spicy') && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-red-600 text-white text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 mr-1" /> ОСТРОЕ БЛЮДО
              </span>
            )}
          </div>

          {item.weightOrVolume && (
            <span className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-black/70 text-gray-200 text-xs font-medium border border-white/10">
              Порция: {item.weightOrVolume}
            </span>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-2">
              {item.name}
            </h2>
            {item.description && (
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>
            )}
          </div>

          {/* Variants Selection */}
          {item.variants && item.variants.length > 0 && (
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Варианты порций и стоимость:
              </label>
              <div className="grid grid-cols-1 gap-2">
                {item.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`flex items-center justify-between p-3 rounded-xl text-sm transition-all border ${
                      selectedVariant?.id === v.id
                        ? 'bg-[#e5a93c]/15 text-[#e5a93c] border-[#e5a93c] font-semibold'
                        : 'bg-[#1a1d26] text-gray-300 border-[#262b3a] hover:border-gray-500'
                    }`}
                  >
                    <span>{v.name}</span>
                    <span className="font-bold text-white">
                      {v.price.toLocaleString('ru-RU')} ₸
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-[#101217] border-t border-[#222733] flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-gray-400 block">
              Стоимость
            </span>
            <span className="font-display text-2xl font-bold text-[#e5a93c]">
              {unitPrice.toLocaleString('ru-RU')} ₸
            </span>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl font-bold text-sm bg-[#1e222d] text-gray-200 border border-[#2a2f3d] hover:bg-[#252b38] hover:text-white transition-all"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
