// components/AdoptionFormModal.tsx
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Josefin_Sans } from "next/font/google"; // Assuming you have this font

const josefin = Josefin_Sans({
    subsets: ['latin'],
    weight: ['400', '600', '700']
});

interface AdoptionFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    petName: string;
}

const AdoptionFormModal: React.FC<AdoptionFormModalProps> = ({ isOpen, onClose, petName }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        reason: '',
    });

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send formData to your backend or an API
        console.log('Adoption form submitted:', { ...formData, petName });
        alert(`Thank you for your interest in adopting ${petName}! We'll review your application.`);
        setFormData({ // Reset form after submission
            fullName: '',
            email: '',
            phone: '',
            address: '',
            reason: '',
        });
        onClose(); // Close modal after submission
    };

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 ${josefin.className}`}>
            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-md md:max-w-lg relative transform transition-all scale-100 opacity-100 duration-300 ease-out">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                    aria-label="Close form"
                >
                    <X size={24} />
                </button>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">Adopt {petName}</h2>
                <p className="text-gray-600 mb-6 text-center">Please provide your details so we can process your adoption application.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="fullName" className="block text-gray-700 text-sm font-semibold mb-2">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-2">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-gray-700 text-sm font-semibold mb-2">Address</label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            rows={3}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 outline-none resize-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="reason" className="block text-gray-700 text-sm font-semibold mb-2">Why do you want to adopt {petName}?</label>
                        <textarea
                            id="reason"
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            rows={4}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 outline-none resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mt-6"
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdoptionFormModal;