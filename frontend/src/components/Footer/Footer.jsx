import React from "react";
import {
  astrologyLinks,
  horoscopeLinks,
  numerologyLinks,
} from "../../../constants";
import { BookOpen, Star, Moon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-2 py-8 border-t border-neutral-700 bg-gradient-to-tr from-cyan-800 to-blue-900 text-white ">
      <div className="container mx-auto px-6 lg:px-20 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <BookOpen className="mr-2" />
              Numerology
            </h3>
            <ul className="space-y-4">
              {numerologyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Star className="mr-2" />
              Astrology
            </h3>
            <ul className="space-y-4">
              {astrologyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:mt-0 sm:mt-10">
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Moon className="mr-2" />
              Horoscope
            </h4>
            <ul className="space-y-4">
              {horoscopeLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center text-sm text-gray-400">
          © 2024 Numeroverse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
