"use client"; // Add this directive at the top

import { ParallaxProvider } from "react-scroll-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamic import for Map to avoid SSR issues
const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  return (
    <ParallaxProvider>
      <>
        {/* Navbar */}
        <nav className="bg-gray-900 p-5 flex justify-between items-center shadow-lg">
          <div className="logo text-white font-extrabold text-3xl">WirelessMag</div>
          <ul className="flex gap-10">
            <li>
              <a href="#" className="text-gray-200 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:text-white">
                Browse
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:text-white">
                Pricing
              </a>
            </li>
          </ul>
        </nav>

        {/* Hero Section */}
        <section className="hero bg-black text-white py-20">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0 lg:space-x-10">
            <div className="hero-text w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Unleash the Power of iPhone 16</h1>
              <p className="text-lg mb-6">Experience the next generation of technology with the latest iPhone 16, designed for performance and elegance.</p>
              <ul className="mb-6 text-gray-400 space-y-2">
                <li>✔ Stunning Camera Features</li>
                <li>✔ Enhanced Battery Life</li>
                <li>✔ Unmatched Performance</li>
              </ul>
              <div className="flex justify-center lg:justify-start space-x-4">
                <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full font-medium">Pre-Order Now</button>
                <button className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-full font-medium">Learn More</button>
              </div>
            </div>
            <div className="hero-image w-full lg:w-1/2">
              <Image src="/ip16_2.png" alt="iPhone 16" width={700} height={600} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* Parallax Section */}
        <div id="scene" className="parallax text-center py-16 bg-gray-900 text-gray-300">
          <div data-depth="0.2" className="parallax-item text-3xl font-medium">
            5+ Colors Available, 700k+ Reviews, 1M+ Buyers
          </div>
        </div>

        {/* CTA Section */}
        <section className="cta bg-gray-900 text-white text-center py-20">
          <h2 className="text-4xl font-semibold mb-8">Get Ready for Our New Product</h2>
          <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full font-medium text-lg">Pre-Order Now</button>
        </section>

        {/* Map Section */}
        <section className="map-container text-center py-16 bg-gray-800 text-white">
          <h2 className="text-4xl font-semibold mb-8">Find Us Here</h2>
          <div id="map" className="h-96">
            <Map />
          </div>
        </section>

        {/* Share Buttons Section */}
        <section className="share-buttons bg-gray-900 text-center py-20">
          <h2 className="text-4xl font-semibold text-white mb-8">Share Our Launch!</h2>
          <div className="flex justify-center space-x-6">
            <FacebookShareButton url="https://yourwebsite.com" className="focus:outline-none">
              <div className="bg-[#4267b2] hover:bg-[#365899] text-white px-8 py-3 rounded-full cursor-pointer">Share on Facebook</div>
            </FacebookShareButton>
            <TwitterShareButton url="https://yourwebsite.com" className="focus:outline-none">
              <div className="bg-[#1da1f2] hover:bg-[#0e8acb] text-white px-8 py-3 rounded-full cursor-pointer">Share on Twitter</div>
            </TwitterShareButton>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Footer Section 1: About */}
            <div className="footer-section">
              <h2 className="font-bold text-2xl mb-6">WirelessMag</h2>
              <p className="text-gray-400 mb-4">Join us as we unveil the future of charging technology with our innovative MagSafe products, designed to enhance your everyday life.</p>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <i className="fas fa-map-marker-alt mr-2"></i>Surabaya, Jawa Timur
                </li>
                <li>
                  <i className="fas fa-envelope mr-2"></i>info@wirelessmag.com
                </li>
                <li>
                  <i className="fas fa-phone-alt mr-2"></i>+6281222002253
                </li>
              </ul>
            </div>

            {/* Footer Section 2: Useful Links */}
            <div className="footer-section">
              <h2 className="font-bold text-2xl mb-6">Quick Links</h2>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Browse Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing Plans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Footer Section 3: Features */}
            <div className="footer-section">
              <h2 className="font-bold text-2xl mb-6">Key Features</h2>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Fast Charging
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Safe and Reliable
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    100% Satisfaction Guarantee
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pre-Order Special Offers
                  </a>
                </li>
              </ul>
            </div>

            {/* Footer Section 4: Stay Connected */}
            <div className="footer-section">
              <h2 className="font-bold text-2xl mb-6">Stay Connected</h2>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="hover:text-white">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="hover:text-white">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-center mt-10 text-gray-500 border-t border-gray-700 pt-6">
            <p>© 2024 WirelessMag. All rights reserved for our innovative charging solutions.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="hover:text-white">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="hover:text-white">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="hover:text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </footer>
      </>
    </ParallaxProvider>
  );
}
