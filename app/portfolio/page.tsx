"use client";
import Image from "next/image";
import React from "react";
import {
  EyeIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ShoppingCartIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with seamless user experience, secure payments, and admin dashboard.",
    category: "Web Development",
    image: "/images/portfolio/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description:
      "Secure mobile banking application with biometric authentication and real-time transactions.",
    category: "Mobile App",
    image: "/images/portfolio/banking-app.jpg",
    technologies: ["React Native", "Firebase", "Node.js", "AWS"],
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Corporate Website",
    description:
      "Professional corporate website with CMS integration and SEO optimization.",
    category: "Web Design",
    image: "/images/portfolio/corporate.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Contentful", "Vercel"],
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    id: 4,
    title: "Food Delivery App",
    description:
      "Food delivery platform with real-time tracking and multiple restaurant integrations.",
    category: "Mobile App",
    image: "/images/portfolio/food-delivery.jpg",
    technologies: ["Flutter", "Firebase", "Google Maps API", "Node.js"],
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    id: 5,
    title: "Digital Marketing Dashboard",
    description:
      "Analytics dashboard for tracking marketing campaigns and customer engagement.",
    category: "Web Development",
    image: "/images/portfolio/dashboard.jpg",
    technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    id: 6,
    title: "Healthcare Management System",
    description:
      "Comprehensive healthcare platform for patient management and appointment scheduling.",
    category: "Web Development",
    image: "/images/portfolio/healthcare.jpg",
    technologies: ["Angular", "Spring Boot", "MySQL", "Redis"],
    liveUrl: "https://example.com",
    featured: true,
  },
];

const CATEGORIES = [
  { name: "All", icon: CodeBracketIcon, count: 6 },
  { name: "Web Development", icon: CodeBracketIcon, count: 3 },
  { name: "Mobile App", icon: DevicePhoneMobileIcon, count: 2 },
  { name: "E-Commerce", icon: ShoppingCartIcon, count: 1 },
  { name: "Dashboard", icon: ChartBarIcon, count: 1 },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section id="portfolio" className="px-8 py-20 bg-white">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-2 font-bold uppercase text-sm tracking-wider text-green-600">
            OUR WORK
          </div>
          <h1 className="mb-4 text-4xl lg:text-5xl font-bold text-black">
            Featured Projects
          </h1>
          <p className="mx-auto w-full text-gray-700 lg:w-10/12 text-lg leading-relaxed">
            Explore our portfolio of successful projects that showcase our
            expertise in web development, mobile applications, and digital
            solutions. Each project represents our commitment to quality and
            innovation.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map(({ name, icon: Icon, count }) => (
            <button
              key={name}
              onClick={() => setActiveCategory(name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeCategory === name
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-green-50 text-green-700 border border-green-200 hover:text-green-500"
              }`}
            >
              <Icon className="w-4 h-4" />
              {name}
              <span
                className={`text-xs px-2 py-1 rounded-full ml-1 ${
                  activeCategory === name
                    ? "bg-white text-green-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white border border-green-200 rounded-xl"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-4">
                    <button className="bg-white/90 text-black p-3 rounded-full transition-colors duration-200 hover:text-green-500">
                      <EyeIcon className="w-5 h-5" />
                    </button>
                    <button className="bg-green-600 text-white p-3 rounded-full transition-colors duration-200 hover:text-green-500 hover:bg-white">
                      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h5 className="mb-2 font-bold text-black group-hover:text-green-500 transition-colors duration-200 text-lg">
                  {project.title}
                </h5>
                <p className="mb-4 text-sm text-gray-700">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium border border-green-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-green-600">
                    {project.category}
                  </span>
                  <a
                    href={project.liveUrl}
                    className="text-gray-700 hover:text-green-500 text-sm font-semibold flex items-center gap-1 transition-colors duration-200"
                  >
                    View Project
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-green-50 rounded-2xl p-12 shadow-lg border border-green-200">
          <h3 className="mb-4 font-bold text-black text-3xl">
            Have a Project in Mind?
          </h3>
          <p className="mx-auto w-full text-gray-700 lg:w-8/12 text-lg mb-8">
            Let&apos;s discuss your next project and bring your ideas to life
            with our expertise and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md">
              Start a Project
            </button>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
