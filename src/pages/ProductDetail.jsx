import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { shoppingCards } from "../lib/product";

const ProductDetail = () => {
  const { id } = useParams();
  const product = shoppingCards.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);

  if (!product) return <p>Product Not Found</p>;

  return (
    <section className="overflow-x-hidden mx-auto  w-full  py-10 my-11">
      <div className="max-w-6xl px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-32 md:gap-y-7 gap-y-5">
        {/* images */}
        <div className="flex flex-col gap-y-8">
          <div className="w-full aspect-square overflow-hidden rounded-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-x-1">
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-20 object-cover"
            />
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-20 object-cover"
            />
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-20 object-cover"
            />
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-20 object-cover"
            />
          </div>
        </div>
        {/* Right side */}
        <div className="flex flex-col gap-y-9 md:gap-y-8">
          {/* texts */}
          <div className="flex flex-col gap-y-5 ">
            <h2 className="font-fraunces font-semibold lg:text-5xl text-2xl md:text-4xl">
              {product.name}
            </h2>
            <p className="font-inter font-normal text-xl lg:text-3xl md:text-2xl">
              {" "}
              ₦{product.price.toLocaleString()}
            </p>
            <p className="font-inter font-light text-[10px] lg:text-2xl md:text-xl">
              Non-tarnish, Non- fade fashion ring{" "}
            </p>
          </div>
          {/* Quantity-selector */}
          <div className="flex flex-col gap-y-3">
            <span className="text-xs  text-[#777777]">Quantity</span>
            <div className="border border-black rounded-lg lg:py-3 lg:px-3.5 py-1.5 px-2 md:py-2.5 md:px-3 flex justify-between items-center w-[50%]">
              <button
                className="px-3 py-1 text-2xl"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="px-3 py-1 text-2xl"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex flex-col gap-y-7">
            <button className="border border-black rounded-xl py-4 font-inter font-normal md:text-2xl w-full  text-xs">
              {" "}
              Add to Cart
            </button>
            <button className="bg-textGreen w-full rounded-xl py-4 font-inter font-normal md:text-2xl text-white text-xs ">
              {" "}
              Buy It Now
            </button>
          </div>
        </div>
      </div>
      ;
    </section>
  );
};

export default ProductDetail;
