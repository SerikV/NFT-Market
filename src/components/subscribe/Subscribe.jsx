import React from 'react';

const Subscription = () => {
  return (
    <section className="bg-dark text-white px-[92px] pb-[112px] xl:px-[40px] lg:px-[37px] md:px-[7px] md:py-[40px]">
      <div className=" mx-auto flex lg:flex-col items-center justify-between  space-y-4 md:space-y-0">
        {/* Image container */}
        <div data-aos='fade-right' className="flex space-x-4 md:pb-4">
          {/* Images with rotation */}
          <img src="/assets/subscribe-image1.png" alt="First Description" className="relative left-0 bottom-10 transform rotate-[-10deg] w-full max-w-[410px] md:max-w-[300px] sm:max-w-[250px] sm:left-[10px] md:left-[40px]" />
          <img src="/assets/subscribe-image2.png" alt="Second Description" className="relative right-[170px] z-10 transform min-h-full h-[350px] w-full max-w-[280px] md:right-[100px] sm:right-[120px] sm:max-w-[180px] sm:h-[240px]" />
        </div>

        {/* Text and subscription form */}
        <div data-aos='fade-left' className="subs-right flex-1 flex flex-col items-start justify-center space-y-6 w-full max-w-[400px]">
          <h2 className="text-5xl xl:text-[30px] lg:text-5xl font-extrabold mb-4">
            Subscribe And  <span className=" text-[#D6EF0E]">get our Updates</span> Every Week
          </h2>
          <p className="text-xl">
            We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly
          </p>
          <div className="flex w-full">
          <input
            type="email"
            placeholder="Enter your e-mail"
            className="flex-1 p-3 rounded-l text-black w-full"
          />
          <button
            type="submit"
            className="bg-[#D6EF0E] text-white hover:bg-green-600 px-6 py-3 rounded-r"
          >
            Subscribe
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
