"use client";

import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <h1 className="mb-4 lg:text-5xl !leading-tight text-3xl text-gray-900 font-bold">
            Transforming Ideas into <br /> Powerful Digital Experiences
          </h1>
          <p className="mb-4 text-gray-500 text-lg md:pr-16 xl:pr-28">
            At Adverito, we specialize in building modern websites and
            result-driven digital marketing strategies. Our goal is simple —
            help businesses grow, stand out, and succeed in the digital world.
          </p>
          <br />
          <div className="flex flex-wrap gap-4">
            {/* Explore Portfolio Button */}
            <Link href="/portfolio">
              <button className="bg-black text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                Get Started
              </button>
            </Link>

            {/* Download Brochure Button */}
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
              View Our Work
            </button>
          </div>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/home-image.jpg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
