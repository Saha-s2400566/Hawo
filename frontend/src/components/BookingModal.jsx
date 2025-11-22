import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiCheck } from 'react-icons/hi';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const BookingModal = ({ isOpen, onClose, service, staffList }) => {
    const [step, setStep] = useState(1);
    const [bookingData, setBookingData] = useState({
        date: new Date(),
        time: '',
        staffId: '',
        notes: ''
    });

    if (!isOpen) return null;

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleBook = () => {
        // Handle booking logic here
        console.log('Booking:', { service, ...bookingData });
        nextStep(); // Go to success step
    };

    const renderStep = () => {
        switch (step) {
            case 1: // Select Staff
                return (
                    <div className="space-y-4">
                        <h3 className="text-xl font-serif font-bold text-gray-900">Select Stylist</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {staffList?.map((staff) => (
                                <button
                                    key={staff.id}
                                    onClick={() => {
                                        setBookingData({ ...bookingData, staffId: staff.id });
                                        nextStep();
                                    }}
                                    className={`p-4 rounded-2xl border-2 transition-all ${bookingData.staffId === staff.id
                                            ? 'border-glow-orange bg-orange-50'
                                            : 'border-gray-100 hover:border-glow-orange/50'
                                        }`}
                                >
                                    <img
                                        src={staff.imageUrl || 'https://via.placeholder.com/150'}
                                        alt={staff.name}
                                        className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
                                    />
                                    <p className="font-medium text-gray-900">{staff.name}</p>
                                    <p className="text-xs text-gray-500">{staff.specialization}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 2: // Select Date & Time
                return (
                    <div className="space-y-4">
                        <h3 className="text-xl font-serif font-bold text-gray-900">Select Date & Time</h3>
                        <div className="flex flex-col space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                <DatePicker
                                    selected={bookingData.date}
                                    onChange={(date) => setBookingData({ ...bookingData, date })}
                                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-glow-orange focus:border-transparent"
                                    minDate={new Date()}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                                <select
                                    value={bookingData.time}
                                    onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-glow-orange focus:border-transparent"
                                >
                                    <option value="">Select a time</option>
                                    <option value="09:00">09:00 AM</option>
                                    <option value="10:00">10:00 AM</option>
                                    <option value="11:00">11:00 AM</option>
                                    <option value="14:00">02:00 PM</option>
                                    <option value="15:00">03:00 PM</option>
                                </select>
                            </div>
                        </div>
                        <button
                            onClick={nextStep}
                            disabled={!bookingData.time}
                            className="w-full py-3 bg-glow-orange text-white rounded-xl font-medium disabled:opacity-50"
                        >
                            Continue
                        </button>
                    </div>
                );
            case 3: // Confirm
                return (
                    <div className="space-y-4">
                        <h3 className="text-xl font-serif font-bold text-gray-900">Confirm Booking</h3>
                        <div className="bg-gray-50 p-4 rounded-xl space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Service</span>
                                <span className="font-medium">{service?.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Price</span>
                                <span className="font-medium">${service?.price}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Date</span>
                                <span className="font-medium">{bookingData.date.toLocaleDateString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Time</span>
                                <span className="font-medium">{bookingData.time}</span>
                            </div>
                        </div>
                        <button
                            onClick={handleBook}
                            className="w-full py-3 bg-glow-orange text-white rounded-xl font-medium shadow-glow-orange"
                        >
                            Confirm Booking
                        </button>
                    </div>
                );
            case 4: // Success
                return (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <HiCheck size={32} />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
                        <p className="text-gray-500 mb-6">We've sent a confirmation email to you.</p>
                        <button
                            onClick={onClose}
                            className="px-8 py-3 bg-gray-900 text-white rounded-xl font-medium"
                        >
                            Done
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative bg-white rounded-[30px] p-8 w-full max-w-md shadow-2xl overflow-hidden"
                >
                    {/* Decorative Glow */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-glow-orange to-yellow-400" />

                    {step < 4 && (
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
                        >
                            <HiX size={24} />
                        </button>
                    )}

                    {step < 4 && (
                        <div className="mb-8">
                            <div className="flex justify-between mb-2">
                                {[1, 2, 3].map((i) => (
                                    <div
                                        key={i}
                                        className={`h-1 w-full mx-1 rounded-full ${i <= step ? 'bg-glow-orange' : 'bg-gray-100'
                                            }`}
                                    />
                                ))}
                            </div>
                            <p className="text-xs text-gray-400 text-center uppercase tracking-wider">Step {step} of 3</p>
                        </div>
                    )}

                    {renderStep()}
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default BookingModal;
