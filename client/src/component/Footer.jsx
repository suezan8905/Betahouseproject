import footer1 from "../assets/footer1.png";
import footer2 from "../assets/footer2.png";
import footer3 from "../assets/footer3.png";
import footer4 from "../assets/footer4.png";
import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import BhLogo from "../assets/BhLogo.png";
import location from "../assets/location.png";
import message from "../assets/message.png";
import phone from "../assets/phone.png";

const Footer = () => {
  return (
    <>
      {/* The Properties Section */}
      <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
          Discover Our Popular Properties
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Card 1 - HOUSE 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={footer1}
              alt="Luxury Duplex"
              className="w-full object-cover aspect-[16/12]"
            />
            <div className="p-4">
              <p className="font-bold text-green-700 text-lg">₦1,430,000,000</p>
              <h3 className="font-semibold text-lg">Luxury Duplex</h3>
              <p className="text-gray-500 text-sm">
                6 Beds | 3 Baths | 720 sq ft
              </p>
              <p className="flex items-center text-gray-600 text-sm mt-2">
                <MapPinIcon className="h-4 w-4 mr-1" />
                Victoria Island, Lagos
              </p>
            </div>
          </div>

          {/* Card 2 - HOUSE 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={footer2}
              alt="Modern Duplex"
              className="w-full object-cover aspect-[16/12]"
            />
            <div className="p-4">
              <p className="font-bold text-green-700 text-lg">₦670,000,000</p>
              <h3 className="font-semibold text-lg">Special Duplex</h3>
              <p className="text-gray-500 text-sm">
                6 Beds | 3 Baths | 720 sq ft
              </p>
              <p className="flex items-center text-gray-600 text-sm mt-2">
                <MapPinIcon className="h-4 w-4 mr-1" />
                Victoria Island, Lagos
              </p>
            </div>
          </div>

          {/* Card 3 - HOUSE 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={footer3}
              alt="Luxury Mansion"
              className="w-full object-cover aspect-[16/12]"
            />
            <div className="p-4">
              <p className="font-bold text-green-700 text-lg">₦340,000,000</p>
              <h3 className="font-semibold text-lg">Split-Level House</h3>
              <p className="text-gray-500 text-sm">
                6 Beds | 3 Baths | 720 sq ft
              </p>
              <p className="flex items-center text-gray-600 text-sm mt-2">
                <MapPinIcon className="h-4 w-4 mr-1" />
                Victoria Island, Lagos
              </p>
            </div>
          </div>

          {/* Card 4 - HOUSE 4 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={footer4}
              alt="Executive Duplex"
              className="w-full object-cover aspect-[16/12]"
            />
            <div className="p-4">
              <p className="font-bold text-green-700 text-lg">₦290,000,000</p>
              <h3 className="font-semibold text-lg">Twin Duplex</h3>
              <p className="text-gray-500 text-sm">
                6 Beds | 3 Baths | 720 sq ft
              </p>
              <p className="flex items-center text-gray-600 text-sm mt-2">
                <MapPinIcon className="h-4 w-4 mr-1" />
                Victoria Island, Lagos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM FOOTER - SECTION */}
      <footer className="bg-green-700 text-white py-10 px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* About */}
          <div>
            {/* Logo and Title */}
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-green-500 rounded-full flex items-center justify-center h-8 w-8">
                <img src={BhLogo} alt="BetaHouse Logo" className="h-3 w-4" />
              </div>
              <h3 className="text-2xl font-bold">BetaHouse</h3>
            </div>

            {/* About (Below BetaHouse) */}
            <p className="text-x mb-4 leading-relaxed">
              Discover, rent, and find your ideal home hassle-free with <br />
              Take control of your rental journey <br />
              today!
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <p className="flex items-center text-x">
                <img src={location} alt="Location" className="h-4 w-4 mr-2" />
                95 Tinubu Estate, Lekki, Lagos
              </p>
              <p className="flex items-center text-sm">
                <img src={phone} alt="Phone" className="h-4 w-4 mr-2" />
                +234 675 8935 675
              </p>
              <p className="flex items-center text-sm">
                <img src={message} alt="Email" className="h-4 w-4 mr-2" />
                support@rentbetahouse.com
              </p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-4 text-2xl font-bold">Quick Links</h4>
            <ul className="space-y-2 text-x">
              <li>Home</li>
              <li>Properties</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* MENU */}
          <div>
            <h4 className="font-bold text-2xl mb-4">Menu</h4>
            <ul className="space-y-2 text-x">
              <li>Agents</li>
              <li>Affordable Houses</li>
              <li>FAQ's</li>
            </ul>
          </div>

          {/* POPULAR SEARCH */}
          <div>
            <h4 className="font-bold text-2xl mb-4">Popular Search</h4>
            <ul className="space-y-2 text-x">
              <li>Apartment for sale</li>
              <li>Apartment for rent</li>
              <li>3 bedroom flat</li>
              <li>Bungalow</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="border-t border-green-600 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-200 gap-2">
          <p>Copyright 2023 BetaHouse | Designed by Michael.fig</p>
          <p>Privacy Policy</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;


  {
    /* Remember me + Forgot password */
  }
 