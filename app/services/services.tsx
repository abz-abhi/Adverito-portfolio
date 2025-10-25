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
  ArrowRightIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import SkillCard from "@/components/skill-card";

const SERVICES = [
  {
    icon: RectangleGroupIcon,
    title: "Web Development",
    children:
      "We create stunning, responsive websites that deliver exceptional user experiences. Our team builds custom web solutions that drive engagement and conversions for your business.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children:
      "We develop high-performance mobile applications for iOS and Android platforms. From concept to deployment, we deliver apps that users love and businesses rely on.",
  },
  {
    icon: SwatchIcon,
    title: "UI/UX Design",
    children:
      "Our design team creates intuitive and beautiful interfaces that enhance user engagement. We focus on user-centered design principles to deliver exceptional digital experiences.",
  },
  {
    icon: CodeBracketIcon,
    title: "Full-Stack Development",
    children:
      "We provide end-to-end development services using modern technologies. Our expertise spans frontend, backend, database design, and cloud infrastructure.",
  },
  {
    icon: CloudIcon,
    title: "Cloud Solutions",
    children:
      "We help businesses leverage cloud technology for scalability and efficiency. Our solutions include cloud migration, architecture design, and DevOps implementation.",
  },
  {
    icon: ChartBarIcon,
    title: "Digital Marketing",
    children:
      "We drive growth through data-driven marketing strategies. Our services include SEO, social media marketing, content strategy, and performance analytics.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Digital Transformation",
    children:
      "We help businesses adapt to the digital age with comprehensive transformation strategies. From process automation to digital innovation, we guide your evolution.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Quality Assurance",
    children:
      "We ensure your digital products meet the highest standards of quality and security. Our rigorous testing processes guarantee reliable, bug-free performance.",
  },
  {
    icon: HashtagIcon,
    title: "E-Commerce Solutions",
    children:
      "We build powerful e-commerce platforms that drive sales and enhance customer experiences. Our solutions are scalable, secure, and optimized for conversions.",
  },
];

export function Services() {
  return (
    <section className="px-8 py-20 bg-gray-50">
      <div className="container mx-auto mb-16 text-center">
        <div className="mb-2 font-bold uppercase text-md tracking-wider text-gray-700">
          OUR SERVICES
        </div>
        <h1 className="mb-4 text-4xl lg:text-5xl font-bold text-green-700">
          Comprehensive Digital Solutions
        </h1>
        <p className="mx-auto w-full text-gray-600 lg:w-10/12 text-lg leading-relaxed">
          At Adverito, we offer end-to-end digital services designed to propel
          your business forward. From cutting-edge development to strategic
          digital marketing, we&apos;re your trusted partner in achieving
          digital excellence and measurable results.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="container mx-auto mt-16 text-center">
        <h3 className="mb-4 text-2xl font-semibold text-gray-900">
          Ready to Transform Your Digital Presence?
        </h3>
        <p className="mx-auto w-full text-gray-600 lg:w-8/12 text-lg mb-8">
          Let&apos;s discuss how our services can help your business achieve its
          goals. We&apos;ll create a customized solution that drives growth and
          delivers results.
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
      </div>
    </section>
  );
}

export default Services;
