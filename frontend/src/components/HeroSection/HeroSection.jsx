import React from "react";
import { ArrowDown, Compass, Star } from "lucide-react";
import { Vortex } from "./../ui/Vortex";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center justify-center w-full h-full"
      >
        <div className="text-center px-4 md:px-10 py-4 w-full relative z-10">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-2xl md:text-6xl font-bold animate-gradient">
            Welcome to Numeroverse
          </h2>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 mx-auto">
            Dive into the world of numbers, astrology, and horoscopes. Discover
            how these ancient sciences can illuminate your path and enrich your
            life.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 justify-center">
            <Link
              to="/numerology"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-md flex items-center"
            >
              <Compass className="mr-2" />
              Explore Numerology
            </Link>
            <Link
              to="/astrology"
              className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition duration-200 rounded-lg shadow-md flex items-center"
            >
              <Star className="mr-2" />
              Explore Astrology
            </Link>
          </div>
        </div>
      </Vortex>
    </div>
  );
};

export default HeroSection;
