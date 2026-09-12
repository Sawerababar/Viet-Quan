import React from 'react';
import { Star, MessageSquareQuote, ExternalLink, ThumbsUp, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, RESTAURANT_DETAILS } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#FAF7F2] border-b border-[#E8DFC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE3D3] text-[#4A3C32] text-xs font-semibold mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />
              <span>Verified Customer Feedback</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1E1714]">
              Loved by the Bicton Community
            </h2>
            <p className="text-sm sm:text-base text-[#61544A] mt-2 max-w-xl">
              See why food lovers throughout Melville, Bicton, and East Fremantle rate Viet Quan 4.7 out of 5 stars on Google.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="bg-white rounded-xl p-4 border border-[#E0D5C3] shadow-xs flex items-center gap-4 self-start md:self-auto">
            <div className="text-center pr-4 border-r border-[#EFE7D8]">
              <span className="font-serif text-3xl font-bold text-[#1F1814]">4.7</span>
              <div className="flex text-amber-500 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-[#231A15]">Google Maps Rating</p>
              <p className="text-[11px] text-[#786A5E]">Based on 100+ local diners</p>
              <a
                href={RESTAURANT_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#9A2E1F] font-semibold hover:underline mt-1"
              >
                Read reviews on Google <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl p-6 border border-[#E0D5C3] shadow-xs flex flex-col justify-between hover:border-[#C4B29B] transition-colors"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#918274] font-medium">{t.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#463B32] leading-relaxed italic mb-4">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2ECE1]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-[#201814]">{t.name}</h4>
                    <p className="text-[11px] text-[#7E6F62]">{t.location}</p>
                  </div>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold border border-emerald-200">
                    Verified
                  </span>
                </div>
                {t.dish && (
                  <p className="text-[10px] text-[#9A2E1F] font-semibold mt-1.5 line-clamp-1">
                    Ordered: {t.dish}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
