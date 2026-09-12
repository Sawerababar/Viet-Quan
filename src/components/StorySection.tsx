import React from 'react';
import { Heart, Clock, Utensils, Award, Users, CheckCircle2, MapPin, ExternalLink, Camera, Star } from 'lucide-react';
import { RESTAURANT_DETAILS } from '../data/restaurantData';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-[#F6F1E8] border-b border-[#E8DEC9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Google Maps Location & Authentic Venue Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DFD5C4] shadow-md space-y-6 relative">
              <div className="flex items-center justify-between border-b border-[#EFE7DC] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#9A2E1F] text-white flex items-center justify-center font-serif font-bold text-xl">
                    VQ
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#1F1714]">
                      {RESTAURANT_DETAILS.name} ({RESTAURANT_DETAILS.vietnameseName})
                    </h3>
                    <p className="text-xs text-[#78695C]">Hawaiian's Melville · Bicton WA</p>
                  </div>
                </div>
                <div className="bg-[#FAF4EB] border border-[#ECDCC7] px-3 py-1.5 rounded-lg text-right">
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />
                    <span>4.7 / 5</span>
                  </div>
                  <span className="text-[10px] text-[#867566]">100+ Google Reviews</span>
                </div>
              </div>

              {/* Verified Venue Highlights */}
              <div className="space-y-3.5 text-xs text-[#52453B]">
                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E9DEC9] space-y-1">
                  <p className="font-bold text-[#201814] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#9A2E1F]" />
                    <span>Prime Bicton Location in Hawaiian's Melville</span>
                  </p>
                  <p className="text-[#685A4D] pl-6 leading-relaxed">
                    Conveniently situated at Shop 20, 380 Canning Highway with over 460 free 3-hour car spaces. Perfect for family lunches, dinner dates, and fast takeaway collections.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E9DEC9] space-y-1">
                  <p className="font-bold text-[#201814] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#166534]" />
                    <span>Authentic 12-Hour Broth Simmering</span>
                  </p>
                  <p className="text-[#685A4D] pl-6 leading-relaxed">
                    Broth stock pots are started in the early hours with charred ginger, cinnamon quills, star anise, and marrow bones to achieve natural depth without artificial flavor enhancers.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E9DEC9] space-y-1">
                  <p className="font-bold text-[#201814] flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#C2410C]" />
                    <span>Licensed Dining & Alfresco Seating</span>
                  </p>
                  <p className="text-[#685A4D] pl-6 leading-relaxed">
                    Enjoy licensed indoor dining with air conditioning or take advantage of breezy outdoor alfresco tables in the shopping centre precinct.
                  </p>
                </div>
              </div>

              {/* Direct Link to Google Maps Photos */}
              <div className="pt-2 border-t border-[#EFE7DC] flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-[#7A6C60]">
                  Want to see actual diner photos & food snaps?
                </span>
                <a
                  href={RESTAURANT_DETAILS.mapsPhotosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#9A2E1F] hover:bg-[#832417] text-white text-xs font-semibold transition-colors"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>View Google Maps Photos</span>
                  <ExternalLink className="w-3 h-3 text-white/80" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Text Story & Kitchen Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#9A2E1F] bg-[#EDE1D1] px-3 py-1 rounded-full inline-block mb-3">
                Our Kitchen Philosophy
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1F1714] leading-tight">
                Honest, Flavorful Vietnamese Food for Bicton & Melville
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#56493F] leading-relaxed">
              At Viet Quan, our food begins with tradition: recipes passed down through generations, simmering stock pots with charred ginger, cinnamon, star anise, and marrow bones before sunrise every day.
            </p>

            <p className="text-sm sm:text-base text-[#56493F] leading-relaxed">
              Whether you are stopping by during a busy lunch break for our legendary Crispy Chicken Rice, grabbing hot takeaway phở on your way home, or gathering the family for dinner, you will always be met with generous portions, fresh herbs, and warm hospitality.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-xl bg-white border border-[#DFD4C4] space-y-1">
                <div className="flex items-center gap-2 text-[#9A2E1F] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#9A2E1F]" />
                  <span>Authentic Herbs & Spices</span>
                </div>
                <p className="text-xs text-[#6A5D52] leading-relaxed">
                  Fresh Thai basil, mint, sawtooth coriander, and homemade chili paste served with every soup bowl.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#DFD4C4] space-y-1">
                <div className="flex items-center gap-2 text-[#9A2E1F] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#9A2E1F]" />
                  <span>Generous Value ($18–$24)</span>
                </div>
                <p className="text-xs text-[#6A5D52] leading-relaxed">
                  Hearty portion sizes made to satisfy, keeping authentic dining accessible for individuals and families.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#DFD4C4] space-y-1">
                <div className="flex items-center gap-2 text-[#9A2E1F] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#9A2E1F]" />
                  <span>Quick Kitchen Turnaround</span>
                </div>
                <p className="text-xs text-[#6A5D52] leading-relaxed">
                  Fast, efficient service ideal for midday shopping lunches or time-sensitive weeknight takeaway orders.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#DFD4C4] space-y-1">
                <div className="flex items-center gap-2 text-[#9A2E1F] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#9A2E1F]" />
                  <span>Family & Solo Friendly</span>
                </div>
                <p className="text-xs text-[#6A5D52] leading-relaxed">
                  Comfortable indoor tables, outdoor alfresco seating, highchairs, and full wheelchair accessibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

