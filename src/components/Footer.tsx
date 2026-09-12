import React from 'react';
import { Phone, MapPin, Instagram, Clock, UtensilsCrossed, ArrowUp, Star } from 'lucide-react';
import { RESTAURANT_DETAILS } from '../data/restaurantData';

interface FooterProps {
  onOpenReservation: () => void;
  onOpenCart: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation, onOpenCart }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#191310] text-[#D8CFC5] pt-16 pb-12 border-t border-[#2C211B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2D231D]">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#9A2E1F] flex items-center justify-center text-[#FBF5EB]">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif-display text-2xl font-bold text-white tracking-tight">
                  Viet Quan
                </span>
                <span className="block text-[11px] font-semibold text-[#B83E2D] uppercase tracking-wider">
                  Việt Quán · Authentic Vietnamese
                </span>
              </div>
            </div>

            <p className="text-xs text-[#9E9286] leading-relaxed max-w-sm">
              Authentic Vietnamese & Southeast Asian dining in Bicton. Famous for 12-hour simmered Phở broths, crispy chicken rice, hearty laksas, and family hospitality.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#B5A99D] pt-1">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">4.7 / 5</span>
              <span className="text-[#84786D]">(100+ Reviews on Google)</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Explore</h4>
            <ul className="space-y-2 text-xs text-[#B3A69A]">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-white transition-colors">
                  House Specialties
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  Our Story & Broth
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours Summary */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Opening Times</h4>
            <div className="text-xs text-[#AEA194] space-y-1.5">
              <div className="flex justify-between">
                <span>Tuesday – Sunday</span>
                <span className="text-white font-medium">11:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Monday</span>
                <span className="text-red-400 font-semibold">Closed</span>
              </div>
              <p className="text-[11px] text-[#7E7166] pt-1">
                Lunch & dinner service. Dine-in & takeaway.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenReservation}
                className="text-xs font-bold text-[#E0533C] hover:underline"
              >
                Book a table online &rarr;
              </button>
            </div>
          </div>

          {/* Col 4: Contact & Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact & Visit</h4>
            <div className="text-xs text-[#B3A69A] space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E0533C] flex-shrink-0 mt-0.5" />
                <span>Shop 20, Hawaiian’s Melville, 380 Canning Hwy, Bicton WA 6157</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E0533C] flex-shrink-0" />
                <a href={`tel:${RESTAURANT_DETAILS.phoneRaw}`} className="text-white hover:underline font-semibold">
                  {RESTAURANT_DETAILS.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#E0533C] flex-shrink-0" />
                <a
                  href={RESTAURANT_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  {RESTAURANT_DETAILS.instagram}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenCart}
                className="w-full py-2 px-3 bg-[#9A2E1F] hover:bg-[#832417] text-white text-xs font-bold rounded-lg transition-colors text-center"
              >
                Order Takeaway
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6E63]">
          <p>© {new Date().getFullYear()} Viet Quan Restaurant. All rights reserved. Bicton, Western Australia.</p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#8C7D70]">
              Free 3-Hr Parking · Wheelchair Accessible
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#271E19] hover:bg-[#382B24] text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
