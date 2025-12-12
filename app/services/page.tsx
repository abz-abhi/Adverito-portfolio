"use client";

import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  CodeBracketIcon,
  CloudIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  SparklesIcon,
  CheckCircleIcon,
  UserGroupIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const SERVICES = [
  {
    icon: RectangleGroupIcon,
    title: "Web Development",
    children: "We create stunning, responsive websites that deliver exceptional user experiences. Our team builds custom web solutions that drive engagement and conversions for your business.",
    features: ["Responsive Design", "Fast Performance", "SEO Optimized"],
    color: "green",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children: "We develop high-performance mobile applications for iOS and Android platforms. From concept to deployment, we deliver apps that users love and businesses rely on.",
    features: ["Cross-Platform", "Native Performance", "App Store Ready"],
    color: "blue",
  },
  {
    icon: SwatchIcon,
    title: "UI/UX Design",
    children: "Our design team creates intuitive and beautiful interfaces that enhance user engagement. We focus on user-centered design principles to deliver exceptional digital experiences.",
    features: ["User Research", "Wireframing", "Prototyping"],
    color: "purple",
  },
  {
    icon: CodeBracketIcon,
    title: "Full-Stack Development",
    children: "We provide end-to-end development services using modern technologies. Our expertise spans frontend, backend, database design, and cloud infrastructure.",
    features: ["Modern Stack", "Scalable Architecture", "API Integration"],
    color: "indigo",
  },
  {
    icon: CloudIcon,
    title: "Cloud Solutions",
    children: "We help businesses leverage cloud technology for scalability and efficiency. Our solutions include cloud migration, architecture design, and DevOps implementation.",
    features: ["Cloud Migration", "DevOps", "Infrastructure Setup"],
    color: "sky",
  },
  {
    icon: ChartBarIcon,
    title: "Digital Marketing",
    children: "We drive growth through data-driven marketing strategies. Our services include SEO, social media marketing, content strategy, and performance analytics.",
    features: ["SEO Optimization", "Social Media", "Analytics"],
    color: "amber",
  },
  {
    icon: RocketLaunchIcon,
    title: "Digital Transformation",
    children: "We help businesses adapt to the digital age with comprehensive transformation strategies. From process automation to digital innovation, we guide your evolution.",
    features: ["Strategy Planning", "Process Automation", "Innovation"],
    color: "orange",
  },
  {
    icon: ShieldCheckIcon,
    title: "Quality Assurance",
    children: "We ensure your digital products meet the highest standards of quality and security. Our rigorous testing processes guarantee reliable, bug-free performance.",
    features: ["Testing", "Security Audit", "Performance Check"],
    color: "red",
  },
  {
    icon: HashtagIcon,
    title: "E-Commerce Solutions",
    children: "We build powerful e-commerce platforms that drive sales and enhance customer experiences. Our solutions are scalable, secure, and optimized for conversions.",
    features: ["Payment Integration", "Inventory Management", "Analytics"],
    color: "emerald",
  },
];

const colorClasses = {
  green: {
    bg: "bg-green-50",
    border: "border-green-200",
    hoverBorder: "hover:border-green-300",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    text: "text-green-700",
    gradient: "from-green-50/50 to-transparent",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    hoverBorder: "hover:border-blue-300",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    text: "text-blue-700",
    gradient: "from-blue-50/50 to-transparent",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    hoverBorder: "hover:border-purple-300",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    text: "text-purple-700",
    gradient: "from-purple-50/50 to-transparent",
  },
  indigo: {
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    hoverBorder: "hover:border-indigo-300",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    text: "text-indigo-700",
    gradient: "from-indigo-50/50 to-transparent",
  },
  sky: {
    bg: "bg-sky-50",
    border: "border-sky-200",
    hoverBorder: "hover:border-sky-300",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    text: "text-sky-700",
    gradient: "from-sky-50/50 to-transparent",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    hoverBorder: "hover:border-amber-300",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    text: "text-amber-700",
    gradient: "from-amber-50/50 to-transparent",
  },
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    hoverBorder: "hover:border-orange-300",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    text: "text-orange-700",
    gradient: "from-orange-50/50 to-transparent",
  },
  red: {
    bg: "bg-red-50",
    border: "border-red-200",
    hoverBorder: "hover:border-red-300",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    text: "text-red-700",
    gradient: "from-red-50/50 to-transparent",
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    hoverBorder: "hover:border-emerald-300",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    text: "text-emerald-700",
    gradient: "from-emerald-50/50 to-transparent",
  },
};

export default function ServicesPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-white overflow-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400" 
           style={{ width: `${scrollProgress}%` }} />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20 max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-green-200 shadow-sm"
          >
            <SparklesIcon className="w-4 h-4 text-green-500" />
            PREMIUM SERVICES
            <SparklesIcon className="w-4 h-4 text-green-500" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
          >
            Comprehensive Digital{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8"
          >
            At Adverito, we offer end-to-end digital services designed to propel your business forward. 
            From cutting-edge development to strategic digital marketing, we&apos;re your trusted partner 
            in achieving digital excellence and measurable results.
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircleIcon className="w-4 h-4 text-green-500" />
              <span>Expert Team</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ClockIcon className="w-4 h-4 text-blue-500" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <UserGroupIcon className="w-4 h-4 text-purple-500" />
              <span>Client-First Approach</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20"
        >
          {SERVICES.map((service, idx) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative ${colors.bg} rounded-2xl p-6 lg:p-8 border ${colors.border} ${colors.hoverBorder} transition-all duration-300 hover:shadow-2xl overflow-hidden`}
              >
                {/* Floating Icon Effect */}
                {hoveredCard === idx && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10"
                    style={{ background: `radial-gradient(circle, currentColor 0%, transparent 70%)` }}
                  />
                )}

                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center justify-center w-16 h-16 ${colors.iconBg} rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300`}
                >
                  <service.icon className={`w-8 h-8 ${colors.iconColor}`} />
                </motion.div>

                {/* Content */}
                <h3 className={`mb-4 text-xl font-bold text-gray-900 group-hover:${colors.text} transition-colors duration-200`}>
                  {service.title}
                </h3>

                <p className="mb-6 text-gray-700 leading-relaxed">
                  {service.children}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIdx) => (
                    <motion.div
                      key={featureIdx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIdx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-2 h-2 ${colors.iconColor} rounded-full`} />
                      <span className="text-sm font-medium text-gray-600">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Learn More Link */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-2 ${colors.text} font-semibold cursor-pointer`}
                >
                  <span className="text-sm">Discover More</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-20"
        >
          {[
            { value: "50+", label: "Projects Delivered", suffix: "Projects" },
            { value: "30+", label: "Happy Clients", suffix: "Clients" },
            { value: "98%", label: "Success Rate", suffix: "Success" },
            { value: "3+", label: "Years Experience", suffix: "Years" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-b from-white to-green-50 rounded-2xl border border-green-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-700 font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.suffix}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative text-center bg-gradient-to-br from-green-50 via-white to-blue-50 rounded-3xl p-8 lg:p-12 border border-green-200 shadow-lg overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,_#10b981_0%,_transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,_#3b82f6_0%,_transparent_50%)]" />
          </div>

          <div className="relative">
            <h2 className="mb-4 text-2xl lg:text-3xl font-bold text-gray-900">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Digital Presence
              </span>
              ?
            </h2>
            
            <p className="mb-8 text-lg text-gray-700 max-w-2xl mx-auto">
              Let&apos;s discuss how our services can help your business achieve its goals. 
              We&apos;ll create a customized solution that drives growth and delivers results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Consultation
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative border-2 border-green-600 text-green-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Case Studies
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <div className="absolute inset-0 bg-green-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </motion.button>
            </div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600"
            >
              {[
                { icon: ShieldCheckIcon, text: "100% Satisfaction Guarantee", color: "text-green-600" },
                { icon: RocketLaunchIcon, text: "Fast Project Delivery", color: "text-blue-600" },
                { icon: UserGroupIcon, text: "Dedicated Support Team", color: "text-purple-600" },
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <badge.icon className={`w-4 h-4 ${badge.color}`} />
                  <span>{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-green-600 to-blue-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 z-40"
      >
        <ArrowRightIcon className="w-6 h-6" />
      </motion.button>
    </section>
  );
}