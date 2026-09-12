import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Filter, Utensils, Sparkles, X, ChevronRight, Camera, ExternalLink } from 'lucide-react';
import { DishCategory, MenuItem } from '../types';
import { MENU_ITEMS, RESTAURANT_DETAILS } from '../data/restaurantData';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, options?: { spiceLevel?: string; addonNotes?: string }) => void;
}

const CATEGORIES: { id: DishCategory; label: string; count?: number }[] = [
  { id: 'all', label: 'Full Menu' },
  { id: 'soups-pho', label: 'Traditional Phở & Soups' },
  { id: 'rice-mains', label: 'Rice & Wok Specialties' },
  { id: 'noodles-laksa', label: 'Noodles & Laksa' },
  { id: 'starters', label: 'Starters & Small Bites' },
  { id: 'beverages', label: 'Vietnamese Drinks & Coffee' },
];

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<DishCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterGF, setFilterGF] = useState(false);
  const [filterSpicy, setFilterSpicy] = useState(false);
  const [filterPopular, setFilterPopular] = useState(false);
  
  // Customization modal state
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const [selectedSpice, setSelectedSpice] = useState('Standard / Mild');
  const [customNote, setCustomNote] = useState('');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Dietary filters
      if (filterGF && !item.tags.includes('GF')) {
        return false;
      }
      if (filterSpicy && !item.tags.includes('Spicy')) {
        return false;
      }
      if (filterPopular && !item.tags.includes('Popular') && !item.tags.includes('Chef Special')) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchViet = item.vietnameseName?.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        return matchName || matchViet || matchDesc;
      }
      return true;
    });
  }, [selectedCategory, searchQuery, filterGF, filterSpicy, filterPopular]);

  const handleQuickAdd = (item: MenuItem) => {
    onAddToCart(item);
    setJustAddedId(item.id);
    setTimeout(() => {
      setJustAddedId(null);
    }, 1200);
  };

  const handleOpenCustomize = (item: MenuItem) => {
    setCustomizingItem(item);
    setSelectedSpice(item.isSpicy ? 'Medium Spicy' : 'Standard / Mild');
    setCustomNote('');
  };

  const handleConfirmCustomizedAdd = () => {
    if (!customizingItem) return;
    onAddToCart(customizingItem, {
      spiceLevel: selectedSpice,
      addonNotes: customNote.trim() || undefined
    });
    setJustAddedId(customizingItem.id);
    setCustomizingItem(null);
    setTimeout(() => {
      setJustAddedId(null);
    }, 1200);
  };

  return (
    <section id="menu" className="py-16 bg-[#FAF7F2] border-b border-[#E8DFC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#9A2E1F] bg-[#F2E8DC] px-3 py-1 rounded-full inline-block mb-3">
            Freshly Made Daily in Bicton · Hawaiian's Melville
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#1E1714]">
            Viet Quan Restaurant Menu
          </h2>
          <p className="text-sm sm:text-base text-[#5D5147] mt-3">
            Generous portions, aromatic herbs, and honest pricing ($18 – $24 mains). Dine in our casual dining room, enjoy alfresco seating, or order takeaway for quick collection.
          </p>

          {/* Google Maps Real Photos Notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E0D5C3] shadow-xs text-xs text-[#52443A]">
            <Camera className="w-4 h-4 text-[#9A2E1F]" />
            <span>Want to see real photos of our food & dining area?</span>
            <a
              href={RESTAURANT_DETAILS.mapsPhotosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#9A2E1F] hover:underline inline-flex items-center gap-1"
            >
              View Google Maps Photos &rarr;
            </a>
          </div>
        </div>

        {/* Search & Dietary Filters Control Bar */}
        <div className="bg-white rounded-xl p-4 mb-8 border border-[#E3D9C9] shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C7E72]" />
              <input
                type="text"
                placeholder="Search dishes (e.g., phở, laksa, crispy chicken)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 bg-[#FAF7F2] border border-[#D9CEBF] rounded-lg text-sm text-[#261E1A] placeholder-[#8C7E72] focus:outline-hidden focus:ring-2 focus:ring-[#9A2E1F]/20 focus:border-[#9A2E1F]"
                id="menu-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-semibold text-[#706358] mr-1 hidden sm:inline">
                Filters:
              </span>
              <button
                onClick={() => setFilterPopular(!filterPopular)}
                className={`text-xs px-3 py-1.5 rounded-md font-medium transition-colors ${
                  filterPopular
                    ? 'bg-[#9A2E1F] text-white'
                    : 'bg-[#F2ECE1] text-[#483C32] hover:bg-[#EAE1D2]'
                }`}
              >
                ★ Customer Favorites
              </button>
              <button
                onClick={() => setFilterGF(!filterGF)}
                className={`text-xs px-3 py-1.5 rounded-md font-medium transition-colors ${
                  filterGF
                    ? 'bg-[#166534] text-white'
                    : 'bg-[#F2ECE1] text-[#483C32] hover:bg-[#EAE1D2]'
                }`}
              >
                Gluten-Free Friendly
              </button>
              <button
                onClick={() => setFilterSpicy(!filterSpicy)}
                className={`text-xs px-3 py-1.5 rounded-md font-medium transition-colors ${
                  filterSpicy
                    ? 'bg-[#C2410C] text-white'
                    : 'bg-[#F2ECE1] text-[#483C32] hover:bg-[#EAE1D2]'
                }`}
              >
                Spicy / Laksa
              </button>
              {(filterGF || filterSpicy || filterPopular || searchQuery) && (
                <button
                  onClick={() => {
                    setFilterGF(false);
                    setFilterSpicy(false);
                    setFilterPopular(false);
                    setSearchQuery('');
                  }}
                  className="text-xs text-[#9A2E1F] underline ml-2 font-medium"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Category Navigation Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 border-t border-[#EFE8DC] no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#291F1A] text-white shadow-xs'
                    : 'bg-[#F7F2EA] text-[#55473E] hover:bg-[#EFE7DA]'
                }`}
                id={`menu-cat-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-6 text-xs text-[#6A5E54]">
          <p>
            Showing <strong className="text-[#261E1A]">{filteredItems.length}</strong> authentic dishes
            {selectedCategory !== 'all' && ` in ${CATEGORIES.find(c => c.id === selectedCategory)?.label}`}
          </p>
          <span className="text-[#87786B]">Prices include GST (AUD)</span>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-dashed border-[#D9CDBF]">
            <Utensils className="w-10 h-10 text-[#A39485] mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-[#2C231E]">No dishes match your search</h3>
            <p className="text-xs text-[#6B5E53] mt-1 mb-4">
              Try searching for something else or clear the filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilterGF(false);
                setFilterSpicy(false);
                setFilterPopular(false);
                setSelectedCategory('all');
              }}
              className="px-4 py-2 bg-[#9A2E1F] text-white text-xs font-semibold rounded-lg"
            >
              Show Entire Menu
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isJustAdded = justAddedId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden border border-[#E3D8C8] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Authentic Menu Card Header */}
                    <div className="p-4 sm:p-5 bg-[#FAF6F0] border-b border-[#EDE3D4]">
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div className="flex flex-wrap gap-1">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                                tag === 'Chef Special'
                                  ? 'bg-[#9A2E1F] text-white'
                                  : tag === 'Popular'
                                  ? 'bg-amber-600 text-white'
                                  : tag === 'GF'
                                  ? 'bg-[#14532D] text-white'
                                  : 'bg-[#E5DACB] text-[#4A3C32]'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="font-serif font-bold text-base text-[#1E1713]">
                          ${item.price.toFixed(2)} AUD
                        </span>
                      </div>

                      <h3 className="font-bold text-base sm:text-lg text-[#221A15] group-hover:text-[#9A2E1F] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      {item.vietnameseName && (
                        <p className="text-xs font-semibold text-[#8C7A6B] mt-0.5 font-serif italic">
                          {item.vietnameseName}
                        </p>
                      )}
                    </div>

                    {/* Text Details */}
                    <div className="p-4 sm:p-5">
                      <p className="text-xs text-[#5D5146] leading-relaxed line-clamp-3 mb-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="p-4 sm:p-5 pt-0 border-t border-[#F5EFE6] mt-2 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleOpenCustomize(item)}
                      className="text-xs font-semibold text-[#736356] hover:text-[#9A2E1F] py-1 transition-colors"
                      title="Add note or spice preference"
                    >
                      Options & Notes
                    </button>

                    <button
                      onClick={() => handleQuickAdd(item)}
                      className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs ${
                        isJustAdded
                          ? 'bg-emerald-700 text-white'
                          : 'bg-[#9A2E1F] hover:bg-[#832417] text-white'
                      }`}
                      id={`menu-add-${item.id}`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added to Cart!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Customization Modal */}
        {customizingItem && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#E3D9C9] animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-start justify-between pb-3 border-b border-[#EDE4D5]">
                <div>
                  <h3 className="font-bold text-lg text-[#201814]">
                    Customize: {customizingItem.name}
                  </h3>
                  <p className="text-xs text-[#7A6C60]">{customizingItem.vietnameseName} · ${customizingItem.price.toFixed(2)} AUD</p>
                </div>
                <button
                  onClick={() => setCustomizingItem(null)}
                  className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Spice Level options if applicable */}
              <div className="py-4 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#3B3028] mb-2">
                    Spice Preference
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Mild / None', 'Medium Spicy', 'Extra Spicy 🌶️'].map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setSelectedSpice(level)}
                        className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition-colors ${
                          selectedSpice === level
                            ? 'bg-[#9A2E1F] text-white border-[#9A2E1F]'
                            : 'border-[#DFD4C5] bg-[#FAF7F2] text-[#4A3C33] hover:bg-[#F2ECE1]'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3B3028] mb-1">
                    Special Preparation Requests (Optional)
                  </label>
                  <p className="text-[11px] text-[#786A5E] mb-2">
                    e.g., "No fresh coriander", "Broth packed separately for takeaway", "Extra lime & chili"
                  </p>
                  <textarea
                    rows={2}
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="Type instructions here..."
                    className="w-full p-2.5 text-xs bg-[#FAF7F2] border border-[#DCD0C1] rounded-lg text-[#241C18] focus:outline-hidden focus:ring-1 focus:ring-[#9A2E1F]"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[#EDE4D5] flex gap-3">
                <button
                  onClick={() => setCustomizingItem(null)}
                  className="flex-1 py-2.5 border border-[#D5C7B6] rounded-lg text-xs font-semibold text-[#483B32] hover:bg-[#F8F3EC]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmCustomizedAdd}
                  className="flex-1 py-2.5 bg-[#9A2E1F] hover:bg-[#832417] text-white rounded-lg text-xs font-semibold shadow-xs"
                >
                  Add to Cart (${customizingItem.price.toFixed(2)})
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

