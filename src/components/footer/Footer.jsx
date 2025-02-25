import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section>
      <footer className=" text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-start">
            {/* Left Section */}
            <div className="mb-6 flex flex-col space-y-4 w-full max-w-[150px]">
              <p className="text-[16px]">
                Discover NFTs by category, track the latest drop, and and follow
                the collections you love. Enjoy it!
              </p>
              <div className="flex space-x-3">
                <FaFacebook />
                <FaTwitter />
                <FaYoutube />
                <FaLinkedin />
              </div>
            </div>

            {/* Links Section */}
            <div className="flex flex-wrap gap-10">
              {/* Explore Column */}
              <div className="mb-6 flex flex-col space-y-2">
                <span className="font-bold">Explore</span>
                <a href="#art-sign-in">Art Sign In</a>
                <a href="#collectibles">Collectibles</a>
                <a href="#domain-name">Domain Name</a>
                <a href="#utility">Utility</a>
              </div>

              {/* Statistic Column */}
              <div className="mb-6 flex flex-col space-y-2">
                <span className="font-bold">Statistic</span>
                <a href="#ranking">Ranking</a>
                <a href="#collectibles">Collectibles</a>
                <a href="#activity">Activity</a>
              </div>

              {/* Company Column */}
              <div className="mb-6 flex flex-col space-y-2">
                <span className="font-bold">Company</span>
                <a href="#about-us">About Us</a>
                <a href="#career">Career</a>
                <a href="#support">Support</a>
                <a href="#partners">Partners</a>
              </div>

              {/* Resources Column */}
              <div className="mb-6 flex flex-col space-y-2">
                <span className="font-bold">Resources</span>
                <a href="#help-center">Help Center</a>
                <a href="#platform-status">Platform Status</a>
                <a href="#blog">Blog</a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 mt-8 pt-4 flex flex-wrap justify-between items-center">
            <span>© Copyright 2023 - davinq</span>
            <div className="flex space-x-6">
              <a href="#privacy-policy">Privacy Policy</a>
              <a href="#terms-conditions">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
