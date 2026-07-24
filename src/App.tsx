import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { CategoryNav } from './components/CategoryNav';
import { MenuItemCard } from './components/MenuItemCard';
import { DishModal } from './components/DishModal';
import { CallWaiterModal } from './components/CallWaiterModal';
import { PresentationMode } from './components/PresentationMode';
import { Footer } from './components/Footer';
import { MENU_CATEGORIES } from './data/menuData';
import { MenuItem, ActiveFilter } from './types';
import { SearchX } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all_categories');
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>('all');
  
  const [isCallWaiterOpen, setIsCallWaiterOpen] = useState<boolean>(false);
  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);
  const [selectedDishModal, setSelectedDishModal] = useState<MenuItem | null>(null);

  const menuSectionRef = useRef<HTMLDivElement>(null);

  const scrollToMenu = () => {
    if (menuSectionRef.current) {
      menuSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter Logic
  const filteredCategories = MENU_CATEGORIES.map((cat) => {
    let items = cat.items;

    // Filter by type
    if (activeFilter === 'food') {
      if (cat.type === 'bar') return null;
      items = items.filter((i) => i.category !== 'drinks_soft' && i.category !== 'bar_strong');
    } else if (activeFilter === 'bar') {
      if (cat.type !== 'bar' && cat.id !== 'drinks_soft' && cat.id !== 'bar_strong') return null;
      items = items.filter((i) => i.category === 'drinks_soft' || i.category === 'bar_strong');
    } else if (activeFilter === 'hits') {
      items = items.filter((i) => i.tags?.includes('hit'));
    } else if (activeFilter === 'spicy') {
      items = items.filter((i) => i.tags?.includes('spicy'));
    }

    // Filter by active category ID
    if (activeCategory !== 'all_categories' && cat.id !== activeCategory) {
      return null;
    }

    // Filter by search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          (i.description && i.description.toLowerCase().includes(q)) ||
          cat.title.toLowerCase().includes(q)
      );
    }

    if (items.length === 0) return null;

    return {
      ...cat,
      items,
    };
  }).filter(Boolean);

  const totalVisibleItems = filteredCategories.reduce(
    (sum, cat) => sum + (cat ? cat.items.length : 0),
    0
  );

  return (
    <div className="min-h-screen bg-[#061814] text-[#e2e8f0] flex flex-col font-sans selection:bg-[#e5a93c] selection:text-black">
      
      {/* Header */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setIsCallWaiterOpen={setIsCallWaiterOpen}
        isPresentationMode={isPresentationMode}
        setIsPresentationMode={setIsPresentationMode}
      />

      {/* Hero Section */}
      {!searchQuery && activeCategory === 'all_categories' && activeFilter === 'all' && (
        <HeroBanner
          setIsCallWaiterOpen={setIsCallWaiterOpen}
          setIsPresentationMode={setIsPresentationMode}
          scrollToMenu={scrollToMenu}
        />
      )}

      {/* Category Navigation Bar */}
      <div ref={menuSectionRef}>
        <CategoryNav
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          totalItemsCount={totalVisibleItems}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* Active Search / Filter Banner */}
        {(searchQuery || activeFilter !== 'all' || activeCategory !== 'all_categories') && (
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#0c2620] border border-[#184539]">
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-300">
              <span>Найдено позиций: <strong className="text-[#e5a93c]">{totalVisibleItems}</strong></span>
              {searchQuery && (
                <span className="text-gray-400">по запросу «{searchQuery}»</span>
              )}
            </div>

            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all_categories');
                setActiveFilter('all');
              }}
              className="text-xs text-[#e5a93c] hover:underline font-semibold"
            >
              Сбросить фильтры ✕
            </button>
          </div>
        )}

        {/* Empty Search Results */}
        {filteredCategories.length === 0 ? (
          <div className="py-20 text-center space-y-4 max-w-md mx-auto">
            <div className="w-16 h-16 bg-[#0c2620] text-[#e5a93c] rounded-full flex items-center justify-center mx-auto border border-[#184539]">
              <SearchX className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">
              Ничего не найдено
            </h3>
            <p className="text-sm text-gray-400">
              К сожалению, по вашему запросу блюда или напитки не найдены. Попробуйте изменить поиск или сбросить фильтры.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all_categories');
                setActiveFilter('all');
              }}
              className="px-6 py-2.5 rounded-xl bg-[#e5a93c] text-black font-bold text-xs hover:bg-[#f0b953] transition-all"
            >
              Показать все меню
            </button>
          </div>
        ) : (
          /* Render Category Sections */
          filteredCategories.map((category) => {
            if (!category) return null;

            return (
              <section key={category.id} className="space-y-5 scroll-mt-28" id={category.id}>
                
                {/* Category Header Title */}
                <div className="flex items-end justify-between border-b border-[#184539] pb-3">
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
                      {category.title}
                    </h2>
                    {category.subtitle && (
                      <p className="text-xs sm:text-sm text-gray-400 mt-1">
                        {category.subtitle}
                      </p>
                    )}
                  </div>

                  <span className="text-xs text-gray-500 font-medium">
                    {category.items.length} {category.items.length === 1 ? 'позиция' : 'позиций'}
                  </span>
                </div>

                {/* Grid of Dish Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {category.items.map((item) => (
                    <MenuItemCard
                      key={item.id}
                      item={item}
                      onSelectItem={(dish) => setSelectedDishModal(dish)}
                    />
                  ))}
                </div>

              </section>
            );
          })
        )}

      </main>

      {/* Footer */}
      <Footer
        setIsCallWaiterOpen={setIsCallWaiterOpen}
        setIsPresentationMode={setIsPresentationMode}
      />

      {/* Dish Modal */}
      <DishModal
        item={selectedDishModal}
        onClose={() => setSelectedDishModal(null)}
      />

      {/* Call Waiter Modal */}
      <CallWaiterModal
        isOpen={isCallWaiterOpen}
        onClose={() => setIsCallWaiterOpen(false)}
      />

      {/* Booklet / Presentation Mode Fullscreen overlay */}
      {isPresentationMode && (
        <PresentationMode onClose={() => setIsPresentationMode(false)} />
      )}

    </div>
  );
}
