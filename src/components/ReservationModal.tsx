import React, { useState } from 'react';
import { X, CalendarCheck, Users, Clock, MapPin, CheckCircle, Phone, Sparkles } from 'lucide-react';
import { RESTAURANT_DETAILS } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '18:00',
    guests: 2,
    seatingPreference: 'indoor' as 'indoor' | 'outdoor' | 'any',
    specialRequests: '',
  });
  const [confirmedId, setConfirmedId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const resId = `VQ-RES-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedId(resId);
    setStep('confirmed');
  };

  const handleReset = () => {
    setStep('form');
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      date: new Date().toISOString().split('T')[0],
      time: '18:00',
      guests: 2,
      seatingPreference: 'indoor',
      specialRequests: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#DFD5C4] animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#1F1814] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#9A2E1F] flex items-center justify-center text-white">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif-display text-lg sm:text-xl font-bold">
                {step === 'form' ? 'Reserve a Table at Viet Quan' : 'Table Reservation Confirmed'}
              </h2>
              <p className="text-xs text-neutral-300">Hawaiian’s Melville · Bicton WA</p>
            </div>
          </div>
          <button
            onClick={step === 'confirmed' ? handleReset : onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-4" id="reservation-form">
              <div className="bg-[#FFF8EE] border border-[#F2E0C4] rounded-lg p-3 text-xs text-[#6F4918] flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#A86616] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Opening Hours: Tuesday – Sunday, 11 AM – 9 PM</p>
                  <p className="text-[11px] text-[#865E2C]">Monday Closed. Free 3-Hour centre parking at Hawaiian's Melville.</p>
                </div>
              </div>

              {/* Guest count and seating preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#382E26] mb-1.5 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#9A2E1F]" />
                    Party Size
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full p-2.5 bg-white border border-[#D8CCBD] rounded-lg text-xs font-medium text-[#201814] focus:ring-1 focus:ring-[#9A2E1F]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest (Solo Dining)' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#382E26] mb-1.5">
                    Seating Area
                  </label>
                  <select
                    value={formData.seatingPreference}
                    onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value as any })}
                    className="w-full p-2.5 bg-white border border-[#D8CCBD] rounded-lg text-xs font-medium text-[#201814] focus:ring-1 focus:ring-[#9A2E1F]"
                  >
                    <option value="indoor">Indoor Dining (Air-conditioned)</option>
                    <option value="outdoor">Outdoor Alfresco Seating</option>
                    <option value="any">First Available Table</option>
                  </select>
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#382E26] mb-1.5">
                    Reservation Date
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full p-2.5 bg-white border border-[#D8CCBD] rounded-lg text-xs text-[#201814] focus:ring-1 focus:ring-[#9A2E1F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#382E26] mb-1.5">
                    Seating Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full p-2.5 bg-white border border-[#D8CCBD] rounded-lg text-xs text-[#201814] focus:ring-1 focus:ring-[#9A2E1F]"
                  >
                    <optgroup label="Lunch">
                      <option value="11:30">11:30 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="14:00">2:00 PM</option>
                    </optgroup>
                    <optgroup label="Dinner">
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="pt-2 border-t border-[#EAE0D1] space-y-3">
                <div>
                  <label className="block text-xs font-bold text-[#382E26] mb-1">
                    Your Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., David Williams"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full p-2.5 bg-white border border-[#D8CCBD] rounded-lg text-xs text-[#201814] focus:ring-1 focus:ring-[#9A2E1F]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#382E26] mb-1">
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g., 0412 890 123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-2.5 bg-white border border-[#D8CCBD] rounded-lg text-xs text-[#201814] focus:ring-1 focus:ring-[#9A2E1F]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#382E26] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g., david@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-2.5 bg-white border border-[#D8CCBD] rounded-lg text-xs text-[#201814] focus:ring-1 focus:ring-[#9A2E1F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#382E26] mb-1">
                    Special Requests (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Highchair needed for toddler, wheelchair accessible table"
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full p-2.5 bg-white border border-[#D8CCBD] rounded-lg text-xs text-[#201814] focus:ring-1 focus:ring-[#9A2E1F]"
                  />
                </div>
              </div>

              {/* Action */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#9A2E1F] hover:bg-[#832417] text-white rounded-lg font-bold text-xs sm:text-sm shadow-xs transition-colors"
                  id="confirm-reservation-btn"
                >
                  Confirm Table Reservation
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle className="w-9 h-9" />
              </div>
              <div>
                <h3 className="font-serif-display text-2xl font-bold text-[#201814]">
                  Table Reserved!
                </h3>
                <p className="text-xs text-[#6B5E53] mt-1">
                  We look forward to welcoming you to Viet Quan in Bicton.
                </p>
              </div>

              {/* Booking Summary Slip */}
              <div className="bg-white rounded-xl p-4 border border-[#DFD4C4] text-left text-xs space-y-2.5 shadow-2xs my-4">
                <div className="flex justify-between border-b border-[#F0E6D7] pb-2">
                  <span className="text-[#6D5E52]">Booking Ref:</span>
                  <strong className="text-[#9A2E1F] font-mono tracking-wider">{confirmedId}</strong>
                </div>
                <div className="flex justify-between text-[#594C42]">
                  <span>Guest Name:</span>
                  <strong className="text-[#201814]">{formData.fullName}</strong>
                </div>
                <div className="flex justify-between text-[#594C42]">
                  <span>Date & Time:</span>
                  <strong className="text-[#201814]">{formData.date} at {formData.time}</strong>
                </div>
                <div className="flex justify-between text-[#594C42]">
                  <span>Guests:</span>
                  <strong className="text-[#201814]">{formData.guests} persons ({formData.seatingPreference})</strong>
                </div>
                <div className="flex justify-between text-[#594C42]">
                  <span>Location:</span>
                  <span className="font-semibold text-[#201814] text-right">Shop 20, Hawaiian’s Melville</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#66584E]">
                <p className="flex items-center justify-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#9A2E1F]" />
                  Need to amend or cancel? Call us at <strong>{RESTAURANT_DETAILS.phone}</strong>
                </p>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-2.5 bg-[#231B17] hover:bg-black text-white rounded-lg font-semibold text-xs transition-colors"
              >
                Close & Return to Website
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
