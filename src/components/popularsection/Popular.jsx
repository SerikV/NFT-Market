import React from "react";
import PopularCard from "../popularcard/PopularCard"; // Переконайтеся, що шлях до компонента PopularCard вірний
import ButtonGreen from "../../chip/ButtonGreen";

const Popular = () => {
  return (
    <section className="">
      <div className="px-[92px] pb-[112px] lg:px-[37px] md:px-[7px] md:py-[40px]">
        <div
          data-aos="zoom-in"
          className="flex justify-between sm:flex-col sm:justify-center sm:text-center md:w-full pb-16">
          <div className="">
            <h2 className="w-[240px] sm:w-full text-3xl text-white  font-extrabold leading-tight md:text-center">
              Popular <span className=" text-[#D6EF0E]">Artists </span>On This
              Week
            </h2>
          </div>
          <div className="mt-8 flex md:justify-center">
            <ButtonGreen text="See all" />
          </div>
        </div>
        <div className="flex justify-center lg:flex-col">
          <div data-aos="fade-up">
            <div className="flex sm:flex-col">
              <div className="w-full sm:ml-auto sm:mr-auto max-w-[300px] lg:w-full h-auto min-h-[311px] md:mb-0 transform transition duration-500 hover:scale-105">
                <PopularCard
                  image="/assets/osvaldo.png"
                  avatar="/assets/sebastian-ava.png"
                  owner="Oswaldo Percy"
                />
              </div>
              <div className="w-full  max-w-[520px] transform transition duration-500 hover:scale-105">
                <PopularCard
                  className="!h-fit "
                  image="/assets/ranson.png"
                  avatar="/assets/ranson-ava.png"
                  owner="Ranson Sqiure"
                />
              </div>
            </div>

            <div className="flex md:w-full sm:flex-col sm:ml-auto sm:mr-auto space-x-4 sm:space-x-0">
              <div className="w-full  max-w-[410px] md:max-w-none mb-4 md:mb-0 transform transition duration-500 hover:scale-105">
                <PopularCard
                  image="/assets/sebastian.png"
                  avatar="/assets/sebastian-ava.png"
                  owner="Sebastian Waltan"
                />
              </div>
              <div className="w-full max-w-[410px] md:max-w-none transform transition duration-500 hover:scale-105">
                <PopularCard
                  image="/assets/abraham.png"
                  avatar="/assets/abraham-ava.png"
                  owner="Abraham Zack"
                />
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="column h-auto space-y-4 transform transition duration-500 hover:scale-105">
            <div className="mb-4">
              <PopularCard
                image="/assets/cristio.png"
                avatar="/assets/cristio-ava.png"
                owner="Cristio Leo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
