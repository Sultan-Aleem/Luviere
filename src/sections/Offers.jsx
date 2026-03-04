import React from "react";
import { offerSection } from "../lib";

const Offers = () => {
  return (
    <section className="mx-auto w-full scroll-mt-7 lg:scroll-mt-10">
      <div className="grid grid-cols-2 max-w-[95rem] lg:grid-cols-[4fr_2fr] pl-8 mx-auto py-16 lg:py-20 md:gap-x-16 lg:gap-x-20 ">
        <div className=" flex justify-start items-center ">
          <h2 className="font-fraunces font-semibold lg:text-6xl lg:leading-14 text-textGreen text-2xl md:text-5xl">
            The Luviere’ <br />
            Promise
          </h2>
        </div>
        <div className="flex flex-col gap-y-3.5">
          {offerSection.map((offer, index) => (
            <div
              key={index}
              className="flex justify-start bg-textGreen  rounded-l-full py-2 lg:py-6 px-4 md:pl-8 md:py-3.5 lg:pl-24 items-center gap-x-5"
            >
              <offer.icon size={32} className="fill-white align-left" />
              <p className="font-inter font-medium text-white md:text-2xl text-xl ">
                {offer.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
