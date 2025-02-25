import React from "react";
import ButtonGreen from "../../chip/ButtonGreen";

import Card from "../weekcards/Cards";

export default function BestOfWeek() {
  return (
    <section className="px-[92px] pb-[112px] lg:px-[37px] md:px-[7px] md:py-[40px] w-full art-section text-white ">
      <div
        data-aos="fade-bottom"
        className=" flex justify-between md:flex-col md:text-center">
        <h2 className="text-4xl font-bold mb-6">
          <span className=" text-[#D6EF0E]">Amazing</span> and Super <br />{" "}
          Unique Art of This <span className=" text-[#D6EF0E]">Week</span>
        </h2>

        <div>
          <ButtonGreen text="See all" />
        </div>
      </div>

      <Card />
    </section>
  );
}
