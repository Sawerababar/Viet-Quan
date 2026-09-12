import React from 'react';
import { ShoppingBag, CalendarCheck, Phone, Star, MapPin, Clock, ShieldCheck, ExternalLink, Camera } from 'lucide-react';
import { RESTAURANT_DETAILS } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
  onOpenCart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onOpenCart }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#EBE3D3]">
      {/* Decorative subtle texture accents */}
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#C4B5A5_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Clear Value Proposition & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Location & Star Rating Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDE4D5] text-[#4A3C32] text-xs font-semibold tracking-wide">
                <MapPin className="w-3.5 h-3.5 text-[#9A2E1F]" />
                Hawaiian’s Melville · Bicton WA 6157
              </span>

              <a
                href={RESTAURANT_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF5E6] border border-[#F0D5AC] text-[#80480C] text-xs font-bold hover:bg-[#FEEFD6] transition-colors"
                id="hero-rating-badge"
              >
                <div className="flex items-center text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />
                </div>
                <span>4.7 / 5</span>
                <span className="text-[#8D6539] font-normal">(100+ Google Reviews)</span>
              </a>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#9A2E1F]">
                {RESTAURANT_DETAILS.vietnameseName} · Vietnamese Noodle House
              </div>
              <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F1815] leading-[1.12]">
                Authentic Vietnamese Flavours in Bicton
              </h1>
              <p className="text-lg sm:text-xl text-[#594E44] leading-relaxed max-w-2xl font-normal">
                Slow-simmered 12-hour traditional Phở broths, crispy golden chicken rice, rich Malaysian-style laksa, and freshly hand-rolled rice paper rolls made to order daily at Hawaiian's Melville.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#9A2E1F] hover:bg-[#832417] text-white font-semibold text-base shadow-sm transition-all text-center"
                id="hero-explore-menu-btn"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Explore Menu & Order</span>
              </a>

              <button
                onClick={onOpenReservation}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg border-2 border-[#C5B39E] bg-white hover:bg-[#F5EFE6] text-[#2F2620] font-semibold text-base transition-all text-center"
                id="hero-book-table-btn"
              >
                <CalendarCheck className="w-5 h-5 text-[#9A2E1F]" />
                <span>Reserve a Table</span>
              </button>

              <a
                href={`tel:${RESTAURANT_DETAILS.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg text-[#59483C] hover:text-[#9A2E1F] font-semibold text-sm transition-colors text-center"
                id="hero-call-btn"
              >
                <Phone className="w-4 h-4 text-[#9A2E1F]" />
                <span>Call {RESTAURANT_DETAILS.phone}</span>
              </a>
            </div>

            {/* Quick Feature Pillars */}
            <div className="pt-6 border-t border-[#E8DFC8] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-medium text-[#4A3D33]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#9A2E1F]" />
                <span>Dine-In & Quick Takeaway</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#166534]" />
                <span>Free 3-Hour Centre Parking</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span>Lunch & Dinner (Tue – Sun)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Verified Listing & Live Information Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Verified Google Maps Restaurant Profile Card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-[#DFD5C4] relative overflow-hidden space-y-5">
                <div className="flex items-start justify-between border-b border-[#EFE7DC] pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider bg-[#EDE4D5] text-[#4A3C32] px-2 py-0.5 rounded">
                        Google Maps Verified
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        Open Tue – Sun
                      </span>
                    </div>
                    <h2 className="text-2xl font-serif-display font-bold text-[#1E1714] mt-2">
                      {RESTAURANT_DETAILS.name}
                    </h2>
                    <p className="text-xs text-[#7A6D61] font-medium">
                      {RESTAURANT_DETAILS.vietnameseName} · Shop 20, Hawaiian’s Melville
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end text-amber-500 gap-1 font-bold text-base">
                      <Star className="w-4 h-4 fill-amber-400 stroke-amber-500" />
                      <span>{RESTAURANT_DETAILS.rating}</span>
                    </div>
                    <span className="text-[11px] text-[#867566] block">{RESTAURANT_DETAILS.reviewCount} Reviews</span>
                  </div>
                </div>

                {/* Extracted Google Maps Key Details */}
                <div className="space-y-3 text-xs text-[#52453B]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#9A2E1F] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#201814]">Location & Parking</p>
                      <p className="text-[#685A4E]">380 Canning Hwy, Bicton WA 6157 (Hawaiian’s Melville Centre, 460+ free 3-hr bays)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#166534] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#201814]">Hours of Operation</p>
                      <p className="text-[#685A4E]">Tuesday to Sunday: 11:00 AM – 9:00 PM (Monday Closed)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#201814]">Pricing & Service</p>
                      <p className="text-[#685A4E]">Generous mains ($18–$24 AUD) · Dine-in, Alfresco & Fast Takeaway</p>
                    </div>
                  </div>
                </div>

                {/* Popular Verified Dishes tags */}
                <div className="pt-2 border-t border-[#EFE7DC]">
                  <p className="text-[11px] font-bold text-[#3D322B] uppercase tracking-wide mb-2">
                    Known for on Google:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="bg-[#FAF3EA] text-[#693116] border border-[#E8D6BF] text-[11px] px-2.5 py-1 rounded-md font-medium">
                      Traditional Beef Phở
                    </span>
                    <span className="bg-[#FAF3EA] text-[#693116] border border-[#E8D6BF] text-[11px] px-2.5 py-1 rounded-md font-medium">
                      Crispy Chicken Rice
                    </span>
                    <span className="bg-[#FAF3EA] text-[#693116] border border-[#E8D6BF] text-[11px] px-2.5 py-1 rounded-md font-medium">
                      Rich Laksa
                    </span>
                    <span className="bg-[#FAF3EA] text-[#693116] border border-[#E8D6BF] text-[11px] px-2.5 py-1 rounded-md font-medium">
                      Fresh Rice Paper Rolls
                    </span>
                  </div>
                </div>

                {/* Direct Google Maps Actions */}
                <div className="pt-1 flex flex-col sm:flex-row gap-2">
                  <a
                    href={RESTAURANT_DETAILS.mapsPhotosUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-[#241C18] hover:bg-black text-white text-xs font-semibold transition-colors"
                  >
                    <Camera className="w-3.5 h-3.5 text-amber-400" />
                    <span>View Photos on Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>

                  <a
                    href={RESTAURANT_DETAILS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-[#D0C2B0] bg-[#FAF7F2] hover:bg-[#F2ECE1] text-[#3A2F27] text-xs font-semibold transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#9A2E1F]" />
                    <span>Open in Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

