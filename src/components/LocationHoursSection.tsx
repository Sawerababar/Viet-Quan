import React, { useState } from 'react';
import { MapPin, Phone, Clock, Instagram, Navigation, Car, Accessibility, CreditCard, Utensils, Check, ExternalLink } from 'lucide-react';
import { RESTAURANT_DETAILS, FAQS } from '../data/restaurantData';
import { getPerthStatus } from '../utils/timeUtils';

export const LocationHoursSection: React.FC = () => {
  const status = getPerthStatus();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="location" className="py-20 bg-[#F5EFE6] border-b border-[#E5DAC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#9A2E1F] bg-[#E9DCB8] px-3 py-1 rounded-full inline-block mb-3">
            Visit Viet Quan
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1F1714]">
            Location, Opening Hours & Amenities
          </h2>
          <p className="text-sm sm:text-base text-[#5D5045] mt-2">
            Conveniently located inside Hawaiian’s Melville Shopping Centre on Canning Highway in Bicton, with 3 hours free parking.
          </p>
        </div>

        {/* 2-Column Info & Schedule Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Hours & Contact Card */}
          <div className="lg:col-span-6 space-y-6">
            {/* Opening Hours Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E0D4C2] shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-[#EFE7D8] mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#FAF4EB] text-[#9A2E1F] border border-[#EBDCC8]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#1E1714]">Weekly Opening Hours</h3>
                    <p className="text-xs text-[#7B6E61]">Lunch & Dinner Service</p>
                  </div>
                </div>

                <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${status.isOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                  {status.isOpen ? 'Open Now' : 'Currently Closed'}
                </span>
              </div>

              {/* Hours Schedule */}
              <div className="space-y-2.5">
                {RESTAURANT_DETAILS.hours.map((schedule) => {
                  const isToday = schedule.day === status.currentDayName;
                  return (
                    <div
                      key={schedule.day}
                      className={`flex items-center justify-between text-xs sm:text-sm py-2 px-3 rounded-lg transition-colors ${
                        isToday
                          ? 'bg-[#FAF3E8] border border-[#E6D4BD] font-bold text-[#201814]'
                          : 'text-[#50443B]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{schedule.day}</span>
                        {isToday && (
                          <span className="text-[10px] bg-[#9A2E1F] text-white px-1.5 py-0.2 rounded font-semibold uppercase tracking-wider">
                            Today
                          </span>
                        )}
                      </div>
                      <span className={schedule.isOpen ? 'text-[#201814]' : 'text-red-700 font-semibold'}>
                        {schedule.hours}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 pt-4 border-t border-[#EFE7D8] text-xs text-[#6F6054] flex items-center justify-between">
                <span>Kitchen last orders: 8:40 PM</span>
                <span className="text-emerald-700 font-medium">Walk-ins welcome</span>
              </div>
            </div>

            {/* Amenities & Parking Highlights */}
            <div className="bg-white rounded-2xl p-6 border border-[#E0D4C2] shadow-xs space-y-4">
              <h3 className="font-bold text-sm text-[#201814] uppercase tracking-wider text-xs">
                Amenities & Guest Convenience
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#443830]">
                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-[#FAF7F2]">
                  <Car className="w-4 h-4 text-[#9A2E1F] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1F1714]">Free 3-Hour Parking</strong>
                    <span className="text-[11px] text-[#716357]">In Hawaiian's Melville car park & street bays</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-[#FAF7F2]">
                  <Accessibility className="w-4 h-4 text-[#9A2E1F] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1F1714]">Wheelchair Accessible</strong>
                    <span className="text-[11px] text-[#716357]">Step-free entrance and accessible facilities</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-[#FAF7F2]">
                  <CreditCard className="w-4 h-4 text-[#9A2E1F] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1F1714]">Contactless Payments</strong>
                    <span className="text-[11px] text-[#716357]">Apple Pay, Google Pay, Visa & Mastercard</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-[#FAF7F2]">
                  <Utensils className="w-4 h-4 text-[#9A2E1F] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1F1714]">Indoor & Alfresco Seating</strong>
                    <span className="text-[11px] text-[#716357]">Relaxed outdoor & air-conditioned tables</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Address, Interactive Map & Direct Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E0D4C2] shadow-xs space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9A2E1F]">
                    Restaurant Address
                  </span>
                  <h3 className="font-serif-display text-xl font-bold text-[#1F1814]">
                    Viet Quan
                  </h3>
                  <p className="text-xs sm:text-sm text-[#54463C] leading-relaxed">
                    {RESTAURANT_DETAILS.address}
                  </p>
                </div>

                <a
                  href={RESTAURANT_DETAILS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-[#9A2E1F] hover:bg-[#832417] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors flex-shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Embedded Google Map Preview Frame */}
              <div className="relative rounded-xl overflow-hidden border border-[#DDD0BE] shadow-inner aspect-16/9 bg-neutral-100">
                <iframe
                  title="Viet Quan Location at Hawaiian's Melville"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.597793392471!2d115.78452507641257!3d-32.02980187398327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a39281a8c9e5%3A0x6b63d7e7e60c8724!2sHawaiian&#39;s%20Melville!5e0!3m2!1sen!2sau!4v1710000000000!5m2!1sen!2sau"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Contact Links Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${RESTAURANT_DETAILS.phoneRaw}`}
                  className="p-3 rounded-xl border border-[#D9CEBE] bg-[#FAF7F2] hover:bg-[#F2EAE0] flex items-center gap-3 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#9A2E1F] text-white flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-[#7E6F62]">Phone Kitchen</span>
                    <span className="text-xs font-bold text-[#201814] group-hover:text-[#9A2E1F]">
                      {RESTAURANT_DETAILS.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={RESTAURANT_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-[#D9CEBE] bg-[#FAF7F2] hover:bg-[#F2EAE0] flex items-center gap-3 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-600 via-rose-600 to-purple-600 text-white flex items-center justify-center">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-[#7E6F62]">Instagram</span>
                    <span className="text-xs font-bold text-[#201814] group-hover:text-[#9A2E1F] flex items-center gap-1">
                      {RESTAURANT_DETAILS.instagram} <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Location Tip */}
            <div className="bg-[#FAF3E8] border border-[#E4D1B8] rounded-xl p-4 text-xs text-[#6A4B23] space-y-1">
              <strong className="block font-bold text-[#7C490C]">Finding Us in Hawaiian’s Melville:</strong>
              <p className="text-[11px] leading-relaxed">
                Enter via the main Canning Highway entrance or rear car park. Viet Quan is at Shop 20 near the internal open courtyard.
              </p>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif-display text-2xl font-bold text-center text-[#1E1714] mb-6">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#DFD4C2] overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-5 py-4 text-left font-bold text-xs sm:text-sm text-[#231A15] flex items-center justify-between hover:bg-[#FAF7F2] transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-lg font-light text-[#8C7B6D] ml-2">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 text-xs text-[#5E5147] leading-relaxed border-t border-[#F0E6D8] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
