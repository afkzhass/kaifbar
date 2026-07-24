import React, { useState } from 'react';
import { X, Bell, Check, Sparkles, Flame, Wine } from 'lucide-react';

interface CallWaiterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WAITER_REASONS = [
  { id: 'menu', label: 'Принести меню', icon: '📜' },
  { id: 'order', label: 'Принять заказ', icon: '📝' },
  { id: 'hookah', label: 'Позвать кальянщика', icon: '💨' },
  { id: 'bill', label: 'Принести счет / чек', icon: '💳' },
  { id: 'clean', label: 'Убрать со стола', icon: '✨' },
  { id: 'help', label: 'Нужна помощь', icon: '❓' },
];

export const CallWaiterModal: React.FC<CallWaiterModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedTable, setSelectedTable] = useState<string>('1');
  const [selectedReason, setSelectedReason] = useState<string>('order');
  const [isCalled, setIsCalled] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleCall = () => {
    setIsCalled(true);
    setTimeout(() => {
      setIsCalled(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-[#0b2820] border border-[#144337] rounded-3xl p-6 shadow-2xl space-y-5 dark-card-bg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#07221b] text-gray-400 hover:text-white transition-colors border border-[#144337]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-1">
          <div className="w-12 h-12 bg-[#e5a93c]/15 text-[#e5a93c] rounded-2xl flex items-center justify-center mx-auto border border-[#e5a93c]/30">
            <Bell className="w-6 h-6 animate-bounce" />
          </div>
          <h3 className="font-display text-2xl font-bold text-white pt-2">
            Вызов Официанта
          </h3>
          <p className="text-xs text-gray-400">
            Выберите номер вашего стола и причину вызова
          </p>
        </div>

        {isCalled ? (
          <div className="py-8 text-center space-y-3 bg-[#072a22] rounded-2xl border border-emerald-500/30">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="font-bold text-white text-lg">Вызов отправлен!</h4>
            <p className="text-xs text-gray-300">
              Официант уже направляется к <strong className="text-[#e5a93c]">Столу №{selectedTable}</strong>.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            
            {/* Select Table */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                📍 Номер вашего стола / зоны:
              </label>
              <div className="grid grid-cols-5 gap-1.5 max-h-28 overflow-y-auto no-scrollbar">
                {Array.from({ length: 20 }, (_, i) => `${i + 1}`).map((num) => (
                  <button
                    key={num}
                    onClick={() => setSelectedTable(num)}
                    className={`py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedTable === num
                        ? 'bg-[#e5a93c] text-black shadow-md'
                        : 'bg-[#07221b] text-gray-300 hover:text-white border border-[#144337]'
                    }`}
                  >
                    №{num}
                  </button>
                ))}
                {['VIP-1', 'VIP-2', 'VIP-3'].map((vip) => (
                  <button
                    key={vip}
                    onClick={() => setSelectedTable(vip)}
                    className={`py-2 rounded-xl text-[10px] font-bold transition-all ${
                      selectedTable === vip
                        ? 'bg-[#e5a93c] text-black shadow-md'
                        : 'bg-[#07221b] text-amber-400 border border-amber-500/30'
                    }`}
                  >
                    {vip}
                  </button>
                ))}
              </div>
            </div>

            {/* Select Reason */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Цель вызова:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {WAITER_REASONS.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setSelectedReason(r.id)}
                    className={`flex items-center space-x-2 p-3 rounded-xl text-xs text-left font-medium transition-all border ${
                      selectedReason === r.id
                        ? 'bg-[#e5a93c]/15 text-[#e5a93c] border-[#e5a93c] font-semibold'
                        : 'bg-[#07221b] text-gray-300 border-[#144337] hover:border-gray-500'
                    }`}
                  >
                    <span className="text-base">{r.icon}</span>
                    <span>{r.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleCall}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#e5a93c] to-[#c28821] text-black font-bold text-sm hover:brightness-110 transition-all flex items-center justify-center space-x-2 shadow-lg gold-glow"
            >
              <Bell className="w-4 h-4" />
              <span>Позвать официанта к Столу №{selectedTable}</span>
            </button>

          </div>
        )}

      </div>
    </div>
  );
};
