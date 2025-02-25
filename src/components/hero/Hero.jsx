import React from "react";
import AuctionTimer from "./Auction-timer";
import image from "/assets/hero-image.png";
import ButtonGreen from "../../chip/ButtonGreen";
import ButtonTransparent from "../../chip/ButtonTransparent";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero-container gap-10 pt-[112px] pb-[162px] px-[92px] lg:px-[37px] flex text-white md:flex-col">
      {/* Left Side Content */}
      <div data-aos="fade-right" className="hero-content flex-1">
        <h1 className="hero-title text-[64px] xl:text-[44px] font-medium mb-4 leading-[76px] xl:leading-[46px] md:text-center">
          Discover and <br /> Collect The Best NFT's{" "}
          <span className=" text-[#D6EF0E]">Digital Art.</span>
        </h1>
        <p className="hero-description text-[18px] leading-10 xl:text-[14px] xl:leading-7  mb-6 md:text-center md:text-[18px]">
          Get started with the easiest and most secure platform to buy and trade{" "}
          <br /> digital ART and NFT's. Start exploring the world of digital art
          and NFT's <br /> today and take control of your digital assets with
          confidence!
        </p>
        <div className="hero-buttons md:text-center">
          <ButtonGreen text="Explore Now" />
          <ButtonTransparent text="Learn More" />
        </div>

        <div className="flex gap-12 md:justify-center  items-center text-white mt-14">
          <div className="flex flex-col pr-8 items-center border-r border-white">
            <span className="text-4xl font-bold" style={{ color: "#D6EF0E" }}>
              8.9K
            </span>
            <span>Art work</span>
          </div>

          <div className="flex flex-col pr-8 items-center border-r border-white">
            <span className="text-4xl font-bold" style={{ color: "#D6EF0E" }}>
              65K
            </span>
            <span>Artist</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold" style={{ color: "#D6EF0E" }}>
              87K
            </span>
            <span>Collection</span>
          </div>
        </div>
      </div>

      {/* Right Side Content */}
      <div data-aos="fade-left" className="relative">
        <div className="hero-image-container">
          <img src={image} alt="NFT" className="w-full h-auto" />
        </div>

        {/* Position the AuctionTimer at the bottom right of the hero image */}
        <div className="absolute bottom-[-65px] right-[-45px] m-4">
          <div className="bg-[#131E3A] text-white p-4 rounded-tl-3xl shadow-lg">
            <AuctionTimer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
