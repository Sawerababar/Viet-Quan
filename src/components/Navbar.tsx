import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, ShoppingBag, Menu, X, CalendarCheck, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_DETAILS } from '../data/restaurantData';
import { getPerthStatus } from '../utils/timeUtils';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOpenReservation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState(getPerthStatus());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getPerthStatus());
    }, 60000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Utility Bar */}
      <div className="bg-[#1A1412] text-[#E7DFD5] text-xs py-2 px-4 border-b border-[#2D231E]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <span className={`inline-block w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span className={status.isOpen ? 'text-emerald-300' : 'text-amber-200'}>
                {status.isOpen ? 'Open Now' : 'Closed'}
              </span>
              <span className="text-[#A89F91] hidden sm:inline">({status.message})</span>
            </span>

            <span className="hidden md:inline-flex items-center gap-1 text-[#A89F91]">
              <MapPin className="w-3.5 h-3.5 text-[#E0533C]" />
              Shop 20, Hawaiian’s Melville, Bicton WA
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${RESTAURANT_DETAILS.phoneRaw}`}
              className="flex items-center gap-1.5 text-[#E7DFD5] hover:text-[#E0533C] transition-colors"
              id="top-bar-phone"
            >
              <Phone className="w-3.5 h-3.5 text-[#E0533C]" />
              <span className="font-semibold">{RESTAURANT_DETAILS.phone}</span>
            </a>
            <span className="text-[#5A4D45] hidden sm:inline">|</span>
            <span className="hidden sm:inline text-[#A89F91]">Free 3-Hr Parking</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full transition-all duration-200 ${scrolled ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8DFC8]' : 'bg-[#FAF7F2] border-b border-[#EFE8D8]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group" id="navbar-brand">
            <div className="w-11 h-11 rounded-lg bg-[#9A2E1F] text-[#FDF8F3] flex items-center justify-center font-serif text-2xl font-bold shadow-sm group-hover:bg-[#802417] transition-colors">
              <UtensilsCrossed className="w-6 h-6 text-[#FBF5EB]" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif-display text-2xl font-bold tracking-tight text-[#1F1815]">
                  Viet Quan
                </span>
                <span className="text-[11px] font-semibold text-[#8F2C1F] uppercase tracking-wider hidden sm:inline">
                  Việt Quán
                </span>
              </div>
              <p className="text-xs text-[#6E6359] tracking-normal font-medium">
                Authentic Vietnamese · Bicton WA
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-[#4A3F35]">
            <a href="#menu" className="hover:text-[#9A2E1F] transition-colors py-1">
              Our Menu
            </a>
            <a href="#specialties" className="hover:text-[#9A2E1F] transition-colors py-1">
              House Specialties
            </a>
            <a href="#story" className="hover:text-[#9A2E1F] transition-colors py-1">
              About Us
            </a>
            <a href="#reviews" className="hover:text-[#9A2E1F] transition-colors py-1">
              Reviews (4.7★)
            </a>
            <a href="#location" className="hover:text-[#9A2E1F] transition-colors py-1">
              Location & Hours
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#CDBEAA] bg-white hover:bg-[#F5EFE6] text-[#332A24] font-medium text-sm transition-all shadow-xs"
              id="nav-book-table-btn"
            >
              <CalendarCheck className="w-4 h-4 text-[#9A2E1F]" />
              <span>Book a Table</span>
            </button>

            <button
              onClick={onOpenCart}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#9A2E1F] hover:bg-[#832417] text-white font-medium text-sm transition-all shadow-sm"
              id="nav-order-takeaway-btn"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Takeaway</span>
              {cartCount > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-[#E6A122] text-[#2C1F0A] rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenCart}
              aria-label="View Cart"
              className="relative p-2.5 rounded-lg bg-[#F2EAE0] text-[#3E322A] hover:bg-[#E8DDCF] transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold bg-[#9A2E1F] text-white rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#3E322A] hover:bg-[#F2EAE0] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E8DFC8] bg-[#FAF7F2] px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-1 gap-2 pt-2 text-base font-medium text-[#3D332B]">
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#F0E7D8]"
              >
                Our Menu
              </a>
              <a
                href="#specialties"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#F0E7D8]"
              >
                Signature Dishes
              </a>
              <a
                href="#story"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#F0E7D8]"
              >
                About Viet Quan
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#F0E7D8]"
              >
                Google Reviews (4.7★)
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#F0E7D8]"
              >
                Location & Hours
              </a>
            </div>

            <div className="pt-3 border-t border-[#E6DCC9] grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-2.5 px-3 rounded-lg border border-[#CDBEAA] bg-white text-sm font-semibold text-[#3A3028] text-center"
              >
                Book Table
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full py-2.5 px-3 rounded-lg bg-[#9A2E1F] text-white text-sm font-semibold text-center"
              >
                Order Takeaway
              </button>
            </div>

            <div className="pt-2 text-center">
              <a
                href={`tel:${RESTAURANT_DETAILS.phoneRaw}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#9A2E1F]"
              >
                <Phone className="w-4 h-4" />
                Call: {RESTAURANT_DETAILS.phone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
