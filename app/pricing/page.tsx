"use client";

import {
  CheckIcon,
  XMarkIcon,
  StarIcon,
  RocketLaunchIcon,
  BuildingStorefrontIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyRupeeIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";

// Custom icon components with inline typing
const PaintBrushIcon = (props: { className?: string }) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M7 17h10"
    />
  </svg>
);

const PRICING_PLANS = [
  {
    name: "Startup",
    price: "₹25,000",
    description:
      "Perfect for startups and small businesses looking to establish online presence",
    icon: BuildingStorefrontIcon,
    popular: false,
    features: [
      "Responsive Website (5 pages)",
      "Basic SEO Setup",
      "Contact Form Integration",
      "Social Media Integration",
      "1 Month Technical Support",
      "Basic Google Analytics",
      "Mobile Friendly Design",
      "Fast Loading Speed",
    ],
    notIncluded: [
      "E-commerce Functionality",
      "Custom Web Applications",
      "Advanced SEO Optimization",
      "Priority Support",
      "Custom Domain & Hosting",
    ],
    delivery: "2-3 Weeks",
  },
  {
    name: "Business",
    price: "₹50,000",
    description: "Ideal for growing businesses with e-commerce needs",
    icon: BuildingOfficeIcon,
    popular: true,
    features: [
      "Responsive Website (10 pages)",
      "Advanced SEO Optimization",
      "E-commerce Store Setup",
      "Payment Gateway Integration",
      "CMS Integration",
      "3 Months Technical Support",
      "Advanced Analytics Dashboard",
      "Mobile Responsive Design",
      "Product Management System",
      "Inventory Management",
      "Order Tracking System",
    ],
    notIncluded: [
      "Custom Web Applications",
      "Enterprise-level Features",
      "Dedicated Account Manager",
    ],
    delivery: "4-6 Weeks",
  },
  {
    name: "Enterprise",
    price: "₹1,00,000",
    description: "Complete custom solutions for large scale businesses",
    icon: RocketLaunchIcon,
    popular: false,
    features: [
      "Custom Web Application Development",
      "Enterprise SEO Strategy",
      "Advanced E-commerce Solutions",
      "Multiple Payment Gateways",
      "Custom CMS Development",
      "6 Months Priority Support",
      "Dedicated Account Manager",
      "24/7 Priority Support",
      "Custom API Integrations",
      "Advanced Performance Optimization",
      "Security Audit & Implementation",
      "Scalable Architecture",
    ],
    notIncluded: [],
    delivery: "8-12 Weeks",
  },
];

const ADDON_SERVICES = [
  { name: "Mobile App Development", price: "₹75,000", icon: RocketLaunchIcon },
  { name: "Digital Marketing (Monthly)", price: "₹15,000", icon: ChartBarIcon },
  {
    name: "SEO Optimization Package",
    price: "₹20,000",
    icon: MagnifyingGlassIcon,
  },
  { name: "Content Writing (per page)", price: "₹1,000", icon: PencilIcon },
  { name: "Logo & Branding Package", price: "₹5,000", icon: PaintBrushIcon },
  { name: "Social Media Management", price: "₹10,000", icon: ShareIcon },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-white"
    >
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-green-200 shadow-lg">
            <CurrencyRupeeIcon className="w-4 h-4 text-green-400" />
            TRANSPARENT PRICING
          </div>
          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Choose Your
            <span className="text-green-600"> Digital Growth</span> Plan
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Invest in quality digital solutions that drive real business
            results.
            <span className="font-semibold text-black">
              {" "}
              No hidden costs, no surprises.
            </span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 lg:mb-24">
          {PRICING_PLANS.map((plan, index) => (
            <div
              key={index}
              className={`relative group rounded-3xl p-8 border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                plan.popular
                  ? "border-green-500 bg-gradient-to-br from-green-50 to-white shadow-2xl scale-105"
                  : "border-gray-200 bg-white hover:border-green-300"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                    <StarIcon className="w-5 h-5" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto ${
                    plan.popular
                      ? "bg-gradient-to-r from-green-600 to-green-700 shadow-lg"
                      : "bg-black group-hover:bg-green-600 transition-colors duration-300"
                  }`}
                >
                  <plan.icon
                    className={`w-10 h-10 ${
                      plan.popular
                        ? "text-white"
                        : "text-white group-hover:text-white"
                    }`}
                  />
                </div>

                <h3
                  className={`mb-2 text-2xl font-bold ${
                    plan.popular ? "text-green-700" : "text-black"
                  } group-hover:text-green-700 transition-colors duration-300`}
                >
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

                {/* Delivery Time */}
                <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-xs font-semibold">
                  <ClockIcon className="w-4 h-4" />
                  Delivery: {plan.delivery}
                </div>
              </div>

              {/* Price */}
              <div className="text-center mb-8 p-6 bg-black rounded-2xl group-hover:bg-green-600 transition-colors duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {plan.price}
                </div>
                <p className="text-green-300 text-sm font-semibold">
                  One-time payment • No hidden fees
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="font-semibold text-black text-sm uppercase tracking-wide mb-4">
                  What&apos;s Included:
                </div>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? "bg-green-100" : "bg-gray-100"
                      } group-hover:bg-green-100 transition-colors duration-200`}
                    >
                      <CheckIcon
                        className={`w-3 h-3 ${
                          plan.popular ? "text-green-600" : "text-gray-600"
                        } group-hover:text-green-600 transition-colors duration-200`}
                      />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Not Included */}
              {plan.notIncluded.length > 0 && (
                <div className="space-y-3 mb-8 pt-6 border-t border-gray-200">
                  <div className="text-gray-500 text-sm font-semibold uppercase tracking-wide">
                    Not Included:
                  </div>
                  {plan.notIncluded.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start gap-3 opacity-70"
                    >
                      <div className="w-5 h-5 rounded-full flex items-center justify-center bg-gray-200 mt-0.5">
                        <XMarkIcon className="w-3 h-3 text-gray-500" />
                      </div>
                      <span className="text-gray-500 text-sm line-through">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA Button */}
              <button
                className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 group/btn ${
                  plan.popular
                    ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl"
                    : "bg-black hover:bg-green-600 text-white border-2 border-black hover:border-green-600"
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: ShieldCheckIcon, text: "Secure Payments" },
            { icon: ClockIcon, text: "On-Time Delivery" },
            { icon: StarIcon, text: "5-Star Support" },
            { icon: CurrencyRupeeIcon, text: "No Hidden Costs" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 text-center border border-green-200"
            >
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-black font-semibold text-sm">
                {item.text}
              </div>
            </div>
          ))}
        </div>

        {/* Addon Services */}
        <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 lg:p-12 border border-green-200 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl lg:text-4xl font-bold text-white">
              Additional Services
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Enhance your digital presence with our specialized addon services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDON_SERVICES.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-green-400 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-200">
                  {service.name}
                </div>
                <div className="text-2xl font-bold text-green-400 mb-3">
                  {service.price}
                </div>
                <div className="w-0 group-hover:w-16 h-1 bg-green-500 rounded-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 lg:p-16 shadow-2xl">
          <h2 className="mb-6 text-3xl lg:text-4xl font-bold text-white">
            Ready to Start Your Project?
          </h2>
          <p className="mb-8 text-green-100 text-xl max-w-2xl mx-auto">
            Let&apos;s discuss your requirements and create a custom solution
            that fits your budget and goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white hover:bg-gray-100 text-green-700 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3">
              Get Free Consultation
              <ArrowRightIcon className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
              View Our Portfolio
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
