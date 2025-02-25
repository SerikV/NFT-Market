import React from "react";
import img1 from "/assets/sell-1.png";
import img2 from "/assets/sell-2.png";
import ButtonGreen from "../../chip/ButtonGreen";
import ButtonTransparent from "../../chip/ButtonTransparent";

export default function Create() {
  return (
    <section className="px-[92px] pb-[2px] lg:px-[37px] md:px-[7px] md:py-[40px] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  flex-row md:flex-col items-center justify-between py-1 md:py-14">
          <div data-aos="zoom-in" className="w-[350px] md:w-full">
            <h2 className="text-3xl w-full font-extrabold leading-tight md:text-center">
              Create And Sell Your{" "}
              <span className="text-[#D6EF0E]">Best NFTs</span>
            </h2>
            <p className="mt-3 text-lg w-10/12 md:w-full md:text-center">
              Start exploring the world of digital art and NFTs today and take
              control of your digital assets with confidence!
            </p>
            <div className="mt-8 flex md:justify-center">
              <ButtonGreen text="Create Now" />
              <ButtonTransparent text="Learn More" />
            </div>
          </div>
          <div className="md:w-[400px] flex justify-center mt-8 md:mt-0">
            <div data-aos="zoom-in" className="space-x-4 ">
              <img
                className="rounded-lg shadow-xl w-full max-w-[410px] xl:max-w-[210px] md:w-64 transform transition duration-500 hover:scale-105 relative right-[350px] sm:right-[40px] top-[250px] xl:right-[140px] z-10"
                src={img1}
                alt="NFT example"
              />
              <img
                className="rounded-lg shadow-xl w-full max-w-[410px] xl:max-w-[210px]  transform transition duration-500 hover:scale-105 relative right-[40px] bottom-[340px] xl:bottom-[140px] sm:right-[-60px] "
                src={img2}
                alt="NFT example"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
