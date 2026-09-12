import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, Clock, MapPin, CheckCircle, ArrowRight, Phone, AlertCircle } from 'lucide-react';
import { CartItem } from '../types';
import { RESTAURANT_DETAILS } from '../data/restaurantData';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (cartId: string, delta: number) => void;
  onRemoveItem: (cartId: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [step, setStep] = useState<'cart' | 'details' | 'success'>('cart');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [pickupTime, setPickupTime] = useState('ASAP (approx. 15-20 mins)');
  const [orderNotes, setOrderNotes] = useState('');
  const [confirmedOrderId, setConfirmedOrderId] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);

  const handleProceedToDetails = () => {
    if (cart.length === 0) return;
    setStep('details');
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;

    // Generate random order slip ID
    const newOrderId = `VQ-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedOrderId(newOrderId);
    setStep('success');
  };

  const handleFinished = () => {
    onClearCart();
    setStep('cart');
    setCustomerName('');
    setCustomerPhone('');
    setOrderNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-lg bg-[#FAF7F2] h-full shadow-2xl flex flex-col justify-between border-l border-[#DFD5C4] animate-in slide-in-from-right duration-250">
        {/* Drawer Header */}
        <div className="p-5 bg-white border-b border-[#E8DFC8] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#9A2E1F] text-white">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-base sm:text-lg text-[#201915]">
                {step === 'cart' && 'Your Takeaway Order'}
                {step === 'details' && 'Collection Details'}
                {step === 'success' && 'Order Confirmed!'}
              </h2>
              <p className="text-xs text-[#7A6C5F]">Viet Quan · Hawaiian's Melville</p>
            </div>
          </div>
          <button
            onClick={step === 'success' ? handleFinished : onClose}
            className="p-2 text-neutral-400 hover:text-neutral-800 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {step === 'cart' && (
            <>
              {cart.length === 0 ? (
                <div className="text-center py-16 px-4">
                  <div className="w-16 h-16 rounded-full bg-[#EFE7D8] text-[#8C7A6B] flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg text-[#261E1A]">Your bag is empty</h3>
                  <p className="text-xs text-[#746558] mt-1 mb-6 max-w-xs mx-auto">
                    Browse our menu of hot phở, crispy chicken rice, and starters to begin your takeaway order.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-5 py-2.5 bg-[#9A2E1F] text-white rounded-lg text-xs font-semibold shadow-xs"
                  >
                    View Menu Items
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="bg-[#FFF8EE] border border-[#F3DFC1] rounded-lg p-3 flex items-start gap-2.5 text-xs text-[#734A12]">
                    <Clock className="w-4 h-4 text-[#A86616] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Takeaway Pickup Location</p>
                      <p className="text-[11px] text-[#855D28]">Shop 20, Hawaiian’s Melville Shopping Centre (Free 3-Hr Parking)</p>
                    </div>
                  </div>

                  <div className="divide-y divide-[#EFE7D8] bg-white rounded-xl border border-[#E3D9C9] p-3">
                    {cart.map((item) => (
                      <div key={item.cartId} className="py-3 flex items-start justify-between gap-3">
                        <div className="flex-1 pr-2">
                          <h4 className="font-bold text-sm text-[#201814]">{item.menuItem.name}</h4>
                          {item.menuItem.vietnameseName && (
                            <p className="text-[11px] text-[#8A7B6F]">{item.menuItem.vietnameseName}</p>
                          )}
                          {item.spiceLevel && (
                            <span className="inline-block text-[10px] text-[#A63C10] font-medium mt-0.5">
                              {item.spiceLevel}
                            </span>
                          )}
                          {item.addonNotes && (
                            <p className="text-[11px] italic text-[#6E6053] mt-0.5">
                              "{item.addonNotes}"
                            </p>
                          )}
                          <p className="text-xs font-semibold text-[#9A2E1F] mt-1">
                            ${(item.menuItem.price * item.quantity).toFixed(2)} AUD
                          </p>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-1.5 bg-[#FAF6F0] rounded-lg p-1 border border-[#E5DAC9]">
                          <button
                            onClick={() => onUpdateQuantity(item.cartId, -1)}
                            className="p-1 text-[#4F4137] hover:text-[#9A2E1F] rounded"
                            title="Decrease quantity"
                          >
                            {item.quantity === 1 ? <Trash2 className="w-3.5 h-3.5" /> : <Minus className="w-3.5 h-3.5" />}
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-[#231A15]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.cartId, 1)}
                            className="p-1 text-[#4F4137] hover:text-[#9A2E1F] rounded"
                            title="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-xs text-[#8A796A] pt-1">
                    <button
                      onClick={onClearCart}
                      className="text-red-700 hover:underline flex items-center gap-1 text-[11px]"
                    >
                      <Trash2 className="w-3 h-3" /> Clear order bag
                    </button>
                    <span>Prices include GST</span>
                  </div>
                </div>
              )}
            </>
          )}

          {step === 'details' && (
            <form onSubmit={handlePlaceOrder} id="takeaway-details-form" className="space-y-4">
              <div className="bg-white rounded-xl p-4 border border-[#E3D9C9] space-y-3.5">
                <h3 className="font-bold text-sm text-[#241A16] border-b border-[#F0E6D8] pb-2">
                  Contact Information
                </h3>
                
                <div>
                  <label className="block text-xs font-bold text-[#3B3028] mb-1">
                    Your Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Sarah Mitchell"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full p-2.5 bg-[#FAF7F2] border border-[#D9CEBE] rounded-lg text-xs text-[#201814] focus:outline-hidden focus:ring-1 focus:ring-[#9A2E1F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3B3028] mb-1">
                    Mobile Phone <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g., 0412 345 678"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full p-2.5 bg-[#FAF7F2] border border-[#D9CEBE] rounded-lg text-xs text-[#201814] focus:outline-hidden focus:ring-1 focus:ring-[#9A2E1F]"
                  />
                  <p className="text-[10px] text-[#867769] mt-1">
                    We’ll send an SMS when your order is packed and ready.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3B3028] mb-1">
                    Collection Time
                  </label>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full p-2.5 bg-[#FAF7F2] border border-[#D9CEBE] rounded-lg text-xs text-[#201814] focus:outline-hidden focus:ring-1 focus:ring-[#9A2E1F]"
                  >
                    <option value="ASAP (approx. 15-20 mins)">ASAP (approx. 15-20 mins)</option>
                    <option value="In 30 minutes">In 30 minutes</option>
                    <option value="In 45 minutes">In 45 minutes</option>
                    <option value="In 60 minutes">In 1 hour</option>
                    <option value="Dinner Pickup: 5:30 PM">Dinner: 5:30 PM</option>
                    <option value="Dinner Pickup: 6:00 PM">Dinner: 6:00 PM</option>
                    <option value="Dinner Pickup: 6:30 PM">Dinner: 6:30 PM</option>
                    <option value="Dinner Pickup: 7:00 PM">Dinner: 7:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3B3028] mb-1">
                    Kitchen / Packaging Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Cutlery requested, extra napkins, soup packed securely"
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    className="w-full p-2.5 bg-[#FAF7F2] border border-[#D9CEBE] rounded-lg text-xs text-[#201814] focus:outline-hidden focus:ring-1 focus:ring-[#9A2E1F]"
                  />
                </div>
              </div>

              {/* Payment details notice */}
              <div className="bg-[#FAF0E4] border border-[#E9D5BD] rounded-xl p-3 text-xs text-[#6C4217] space-y-1">
                <p className="font-bold flex items-center gap-1.5 text-[#884711]">
                  <AlertCircle className="w-4 h-4" /> Pay on Collection at Counter
                </p>
                <p className="text-[11px] leading-relaxed">
                  You pay in-store at Shop 20 when collecting your hot food. We accept Contactless Apple Pay, Google Pay, Visa, Mastercard, and Cash.
                </p>
              </div>
            </form>
          )}

          {step === 'success' && (
            <div className="space-y-4 py-2">
              <div className="bg-white rounded-2xl p-6 border border-[#E0D5C3] shadow-sm text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif-display text-2xl font-bold text-[#1E1713]">
                  Order Sent to Kitchen!
                </h3>
                <p className="text-xs text-[#6B5E53]">
                  Thank you, <strong className="text-[#201713]">{customerName}</strong>. Your takeaway order has been logged and our chefs are preparing it.
                </p>

                {/* Receipt Card */}
                <div className="bg-[#FAF7F2] rounded-xl p-4 border border-[#E5DBCB] text-left text-xs space-y-2 my-4">
                  <div className="flex justify-between border-b border-[#E8DFC8] pb-2 font-bold">
                    <span>Order Reference:</span>
                    <span className="text-[#9A2E1F] tracking-wide">{confirmedOrderId}</span>
                  </div>
                  <div className="flex justify-between text-[#594C42]">
                    <span>Estimated Ready:</span>
                    <span className="font-semibold text-[#201814]">{pickupTime}</span>
                  </div>
                  <div className="flex justify-between text-[#594C42]">
                    <span>Pickup Location:</span>
                    <span className="font-semibold text-[#201814] text-right">
                      Shop 20, Hawaiian’s Melville
                    </span>
                  </div>
                  <div className="flex justify-between text-[#594C42]">
                    <span>Customer Mobile:</span>
                    <span className="font-semibold text-[#201814]">{customerPhone}</span>
                  </div>
                  <div className="flex justify-between border-t border-[#E8DFC8] pt-2 font-bold text-sm text-[#201814]">
                    <span>Total Due at Pickup:</span>
                    <span className="text-[#9A2E1F]">${subtotal.toFixed(2)} AUD</span>
                  </div>
                </div>

                <p className="text-[11px] text-[#7A6C60] flex items-center justify-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#9A2E1F]" />
                  Need to modify? Call directly on <strong>{RESTAURANT_DETAILS.phone}</strong>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-5 bg-white border-t border-[#E8DFC8] space-y-3">
          {step === 'cart' && cart.length > 0 && (
            <>
              <div className="space-y-1.5 text-xs text-[#5D5046]">
                <div className="flex justify-between text-base font-bold text-[#201814]">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)} AUD</span>
                </div>
                <div className="flex justify-between text-[11px] text-[#8C7D70]">
                  <span>Estimated preparation time</span>
                  <span>15 – 20 mins</span>
                </div>
              </div>

              <button
                onClick={handleProceedToDetails}
                className="w-full py-3 bg-[#9A2E1F] hover:bg-[#832417] text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
                id="cart-proceed-btn"
              >
                <span>Proceed to Collection Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          )}

          {step === 'details' && (
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep('cart')}
                className="flex-1 py-3 border border-[#D5C7B5] rounded-lg text-xs font-semibold text-[#483B32] hover:bg-[#FAF6F0]"
              >
                Back to Cart
              </button>
              <button
                type="submit"
                form="takeaway-details-form"
                className="flex-2 py-3 bg-[#9A2E1F] hover:bg-[#832417] text-white rounded-lg text-xs font-bold shadow-xs transition-colors"
                id="cart-submit-order-btn"
              >
                Send Order to Kitchen (${subtotal.toFixed(2)})
              </button>
            </div>
          )}

          {step === 'success' && (
            <button
              onClick={handleFinished}
              className="w-full py-3 bg-[#241C18] hover:bg-black text-white rounded-lg font-semibold text-xs transition-colors"
            >
              Done & Return to Menu
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
