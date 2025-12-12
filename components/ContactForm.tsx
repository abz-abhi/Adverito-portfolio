"use client";

import { useState } from "react";
import { PaperAirplaneIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    // Construct WhatsApp message
    const fullMessage = `
🌟 New Inquiry from Adverito Website 🌟

👤 Name: ${data.firstName} ${data.lastName}
📧 Email: ${data.email}
📱 Phone: ${data.phone}
🎯 Service Interest: ${data.service}

💬 Message:
${data.message}
    `.trim();

    const whatsappNumber = "917736516031";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      fullMessage
    )}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Show success message
    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form
    setTimeout(() => {
      (e.target as HTMLFormElement).reset();
      setIsSubmitted(false);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircleIcon className="w-12 h-12 text-green-600" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Message Sent Successfully!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for contacting us. We&apos;ve opened WhatsApp for you to
          continue the conversation. Our team will respond within 24 hours.
        </p>
        <p className="text-sm text-gray-500">
          Redirecting you back to the form...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
              placeholder="John"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Contact Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        {/* Service Dropdown */}
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Service Interest *
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 bg-white"
          >
            <option value="">Select a service</option>
            <option value="web-development">Web Development</option>
            <option value="mobile-apps">Mobile App Development</option>
            <option value="ui-ux-design">UI/UX Design</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="e-commerce">E-commerce Solutions</option>
            <option value="branding">Branding & Strategy</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 resize-none"
            placeholder="Tell us about your project, goals, and timeline..."
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <PaperAirplaneIcon className="w-5 h-5" />
                Send Message via WhatsApp
              </>
            )}
          </button>
          <p className="text-sm text-gray-500 text-center mt-4">
            By submitting, you&apos;ll be redirected to WhatsApp to continue the
            conversation.
          </p>
        </div>
      </form>
    </div>
  );
}
