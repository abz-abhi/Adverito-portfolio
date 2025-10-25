"use client";

import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import SkillCard from "@/components/skill-card";

const SERVICES = [
  {
    icon: RectangleGroupIcon,
    title: "Web Development",
    children:
      "We create stunning, responsive websites that deliver exceptional user experiences. Our team builds custom web solutions that drive engagement and conversions for your business.",
    features: ["Responsive Design", "Fast Performance", "SEO Optimized"],
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children:
      "We develop high-performance mobile applications for iOS and Android platforms. From concept to deployment, we deliver apps that users love and businesses rely on.",
    features: ["Cross-Platform", "Native Performance", "App Store Ready"],
  },
  {
    icon: SwatchIcon,
    title: "UI/UX Design",
    children:
      "Our design team creates intuitive and beautiful interfaces that enhance user engagement. We focus on user-centered design principles to deliver exceptional digital experiences.",
    features: ["User Research", "Wireframing", "Prototyping"],
  },
  {
    icon: CodeBracketIcon,
    title: "Full-Stack Development",
    children:
      "We provide end-to-end development services using modern technologies. Our expertise spans frontend, backend, database design, and cloud infrastructure.",
    features: ["Modern Stack", "Scalable Architecture", "API Integration"],
  },
  {
    icon: CloudIcon,
    title: "Cloud Solutions",
    children:
      "We help businesses leverage cloud technology for scalability and efficiency. Our solutions include cloud migration, architecture design, and DevOps implementation.",
    features: ["Cloud Migration", "DevOps", "Infrastructure Setup"],
  },
  {
    icon: ChartBarIcon,
    title: "Digital Marketing",
    children:
      "We drive growth through data-driven marketing strategies. Our services include SEO, social media marketing, content strategy, and performance analytics.",
    features: ["SEO Optimization", "Social Media", "Analytics"],
  },
  {
    icon: RocketLaunchIcon,
    title: "Digital Transformation",
    children:
      "We help businesses adapt to the digital age with comprehensive transformation strategies. From process automation to digital innovation, we guide your evolution.",
    features: ["Strategy Planning", "Process Automation", "Innovation"],
  },
  {
    icon: ShieldCheckIcon,
    title: "Quality Assurance",
    children:
      "We ensure your digital products meet the highest standards of quality and security. Our rigorous testing processes guarantee reliable, bug-free performance.",
    features: ["Testing", "Security Audit", "Performance Check"],
  },
  {
    icon: HashtagIcon,
    title: "E-Commerce Solutions",
    children:
      "We build powerful e-commerce platforms that drive sales and enhance customer experiences. Our solutions are scalable, secure, and optimized for conversions.",
    features: ["Payment Integration", "Inventory Management", "Analytics"],
  },
];

export default function ServicesPage() {
  return (
    <section
      id="services"
      className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-white"
    >
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            OUR SERVICES
          </div>
          <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
            Comprehensive Digital
            <span className="text-green-600"> Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            At Adverito, we offer end-to-end digital services designed to propel
            your business forward. From cutting-edge development to strategic
            digital marketing, we&apos;re your trusted partner in achieving
            digital excellence and measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-6 lg:p-8 border border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              {/* Icon Container */}
              <div className="flex items-center justify-center w-16 h-16 bg-green-50 rounded-2xl mb-6 group-hover:bg-green-100 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-green-600" />
              </div>

              {/* Content */}
              <h3 className="mb-4 text-xl font-bold text-black group-hover:text-green-700 transition-colors duration-200">
                {service.title}
              </h3>

              <p className="mb-6 text-gray-700 leading-relaxed">
                {service.children}
              </p>

              {/* Features List */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIdx) => (
                  <div key={featureIdx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-600">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Learn More Link */}
              <div className="flex items-center gap-2 text-green-600 font-semibold group-hover:text-green-500 transition-colors duration-200 cursor-pointer">
                <span className="text-sm">Learn More</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-50/50 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-200">
            <div className="text-3xl lg:text-4xl font-bold text-green-700 mb-2">
              50+
            </div>
            <div className="text-gray-700 font-semibold">
              Projects Delivered
            </div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-200">
            <div className="text-3xl lg:text-4xl font-bold text-green-700 mb-2">
              30+
            </div>
            <div className="text-gray-700 font-semibold">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-200">
            <div className="text-3xl lg:text-4xl font-bold text-green-700 mb-2">
              98%
            </div>
            <div className="text-gray-700 font-semibold">Success Rate</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-200">
            <div className="text-3xl lg:text-4xl font-bold text-green-700 mb-2">
              3+
            </div>
            <div className="text-gray-700 font-semibold">Years Experience</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-8 lg:p-12 border border-green-200">
          <h2 className="mb-4 text-2xl lg:text-3xl font-bold text-black">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="mb-8 text-lg text-gray-700 max-w-2xl mx-auto">
            Let&apos;s discuss how our services can help your business achieve
            its goals. We&apos;ll create a customized solution that drives
            growth and delivers results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2">
              Get Free Consultation
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="group border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 hover:scale-105 flex items-center gap-2">
              View Case Studies
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="w-4 h-4 text-green-600" />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <RocketLaunchIcon className="w-4 h-4 text-green-600" />
              <span>Fast Project Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
