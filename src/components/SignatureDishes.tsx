import React from 'react';
import { Plus, Flame, Sparkles, Utensils, Heart } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS, RESTAURANT_DETAILS } from '../data/restaurantData';

interface SignatureDishesProps {
  onAddToCart: (item: MenuItem) => void;
  onOpenItemModal?: (item: MenuItem) => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ onAddToCart }) => {
  // Select the 4 marquee favorites explicitly mentioned as customer favorites
  const signatureItems = MENU_ITEMS.filter(item => 
    item.id === 'rare-beef-pho' ||
    item.id === 'crispy-chicken-rice' ||
    item.id === 'seafood-laksa' ||
    item.id === 'rice-paper-rolls'
  );

  return (
    <section id="specialties" className="py-16 bg-[#F4EFE6] border-b border-[#E8DFC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#9A2E1F] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Taste of Vietnam · Bicton WA</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1E1714]">
              House Signature Dishes
            </h2>
            <p className="text-[#64574D] mt-2 max-w-xl text-sm sm:text-base">
              The dishes our Bicton regulars come back for time and again. Prepared with traditional family recipes, slow-cooked broths, and generous portions.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <a
              href="#menu"
              className="text-sm font-semibold text-[#9A2E1F] hover:text-[#7D2215] inline-flex items-center gap-1 border-b border-[#9A2E1F]/40 pb-0.5"
            >
              View Full Menu ({MENU_ITEMS.length} Items) &rarr;
            </a>
          </div>
        </div>

        {/* 4-Card Signature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatureItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden border border-[#DFD5C4] shadow-sm hover:shadow-md transition-shadow flex flex-col group justify-between"
            >
              {/* Header Visual Emblem */}
              <div className="relative p-5 bg-[#FAF5EE] border-b border-[#EAE0D1]">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-[#9A2E1F] text-white px-2.5 py-0.5 rounded shadow-xs">
                    {item.tags.includes('Chef Special') ? 'Chef Special' : 'Bicton Favorite'}
                  </span>
                  <span className="font-serif text-base font-bold text-[#1F1714]">
                    ${item.price.toFixed(2)} AUD
                  </span>
                </div>

                <div className="pt-2">
                  <h3 className="font-bold text-lg text-[#221A15] group-hover:text-[#9A2E1F] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  {item.vietnameseName && (
                    <p className="text-xs font-semibold text-[#8C7A6B] mt-0.5 font-serif italic">
                      {item.vietnameseName}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                        tag === 'GF'
                          ? 'bg-[#14532D] text-white'
                          : tag === 'Spicy'
                          ? 'bg-[#C2410C] text-white'
                          : 'bg-[#ECE2D2] text-[#4A3C32]'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Description */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-[#5D5146] leading-relaxed line-clamp-4">
                  {item.description}
                </p>

                <button
                  onClick={() => onAddToCart(item)}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#FAF5EE] hover:bg-[#9A2E1F] text-[#41352C] hover:text-white border border-[#D5C7B3] hover:border-[#9A2E1F] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  id={`add-signature-${item.id}`}
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add to Order · ${item.price.toFixed(2)}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

