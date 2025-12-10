"use client";
import Image from "next/image";

import {
  ChartBarIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  HeartIcon,
  ArrowRightIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";

const VALUES = [
  {
    icon: LightBulbIcon,
    title: "Innovation First",
    description:
      "We constantly explore new ideas and technologies to keep your brand ahead of the curve.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: ChartBarIcon,
    title: "Results Driven",
    description:
      "Every strategy is measured by its impact on your business growth and ROI.",
    color: "from-green-600 to-green-700",
  },
  {
    icon: RocketLaunchIcon,
    title: "Rapid Execution",
    description:
      "We move quickly to implement solutions that deliver immediate value to your business.",
    color: "from-green-400 to-green-500",
  },
  {
    icon: HeartIcon,
    title: "Passionate Partnership",
    description:
      "We care deeply about your success and build lasting relationships with our clients.",
    color: "from-green-700 to-green-800",
  },
];

export default function AboutPage() {
  return (
    <section id="about" className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/image/about-main.jpg"
            alt="About Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-green-600/20 backdrop-blur-sm text-green-300 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-green-400/30">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            WELCOME TO ADVERITO
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
            About <span className="text-green-400">Adverito</span>
          </h1>
          <p className="text-xl lg:text-2xl xl:text-3xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Where{" "}
            <span className="text-green-300 font-semibold">Creativity</span>{" "}
            Meets <span className="text-green-300 font-semibold">Strategy</span>
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16 lg:py-24 px-4 bg-gradient-to-br from-white to-green-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <CheckBadgeIcon className="w-4 h-4" />
                  OUR PHILOSOPHY
                </div>
                <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
                  Your Growth{" "}
                  <span className="text-green-600">Defines Ours</span>
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  At{" "}
                  <span className="font-semibold text-green-700">Adverito</span>
                  , we believe that your growth defines ours. We are a creative
                  and digital marketing agency focused on delivering impactful
                  results that help brands stand out in today&apos;s fast-paced
                  digital world.
                </p>
                <p>
                  From innovative designs to strategic marketing solutions, our
                  mission is simple - to help your business grow smarter,
                  stronger, and faster.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-2xl">
                  <p className="text-green-800 font-semibold italic text-lg">
                    &quot;We don&apos;t just create campaigns - we build
                    experiences that connect, inspire, and convert.&quot;
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-700">
                    Digital Strategy
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-700">
                    Creative Design
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-700">
                    Technical Excellence
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-700">
                    Results Focused
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {[
                {
                  number: "50+",
                  label: "Projects Completed",
                  color: "bg-green-500",
                },
                {
                  number: "98%",
                  label: "Client Satisfaction",
                  color: "bg-green-600",
                },
                {
                  number: "3+",
                  label: "Years Experience",
                  color: "bg-green-400",
                },
                {
                  number: "30+",
                  label: "Happy Clients",
                  color: "bg-green-700",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl border border-green-200 hover:border-green-300 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div
                    className={`text-3xl lg:text-4xl font-bold text-black mb-3 group-hover:text-green-500 transition-colors duration-200`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-semibold text-sm lg:text-base">
                    {stat.label}
                  </div>
                  <div
                    className={`w-12 h-1 ${stat.color} rounded-full mx-auto mt-4 group-hover:bg-green-500 transition-colors duration-200`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 lg:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              OUR VALUES
            </div>
            <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
              What <span className="text-green-600">Drives Us</span> Forward
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              These core principles guide every decision we make and every
              solution we deliver for our clients&apos; success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {VALUES.map(({ icon: Icon, title, description, color }, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 lg:p-8 border border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                {/* Gradient Icon Background */}
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}
                >
                  <Icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="mb-4 text-xl font-bold text-black text-center group-hover:text-green-700 transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed text-sm lg:text-base">
                  {description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-20 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-t-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 lg:py-20 px-4 bg-black">
        <div className="container mx-auto text-center max-w-5xl">
          <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to <span className="text-green-200">Grow Together</span>?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s discuss how we can help your business achieve remarkable
            growth through creative digital solutions tailored to your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-white hover:bg-green-50 text-green-700 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3">
              Start Your Project
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="group border-2 border-white text-white hover:bg-white hover:text-green-700 font-semibold py-4 px-8 rounded-lg transition-all duration-200 hover:scale-105 flex items-center gap-3">
              View Our Work
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-green-200">
            <div className="flex items-center justify-center gap-3">
              <CheckBadgeIcon className="w-5 h-5" />
              <span className="text-sm font-semibold">No Upfront Costs</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckBadgeIcon className="w-5 h-5" />
              <span className="text-sm font-semibold">Free Consultation</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckBadgeIcon className="w-5 h-5" />
              <span className="text-sm font-semibold">30-Day Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
