import bg from "../assets/images/Shopnow/shopBg.jpg";
import SearchIcon from "../assets/images/Shopnow/searchIcon.png";
import SearchBar from "./SearchBar";
import { useState } from "react";

import { categories } from "../lib";
import { motion, AnimatePresence } from "framer-motion";

const ShopHeader = ({ onCategorySelect, onSearch }) => {
  const [showcategory, setShowCategory] = useState(false);

  const handleSearch = (query) => {
    onSearch(query);
  };

  return (
    <section className="overflow-x-hidden mx-auto w-full  min-h-screen relative">
      <div className=" h-screen relative">
        <div
          className="min-h-[90vh] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute inset-0 bg-black/20 h-[90vh]"></div>
          <h1 className="relative text-white font-fraunces italic text-3xl md:text-5xl lg:text-8xl text-center">
            The Luviere’ Collection
          </h1>
        </div>
        <div className="absolute left-1/2 bottom-9 -translate-x-1/2 w-[90%] flex items-center justify-between bg-white rounded-full py-1 px-2 md:py-5 md:px-6 lg:py-8 lg:px-9 shadow-xl">
          {/* text for large screens */}
          <h3 className="font-semibold  hidden md:block md:text-xl lg:text-2xl font-fraunces text-black">
            Only the best for you.
          </h3>
          {/* mobile icon */}
          <div className="relative md:hidden pr-1.5">
            <button
              onClick={() => setShowCategory((prev) => !prev)}
              className="pl-3"
            >
              <img
                src={SearchIcon}
                alt="Category icon"
                className=" object-contain"
              />
            </button>
          </div>

          {/* Search bar */}
          <div className="flex gap-x-3 md:w-[40%]  w-[90%]">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </div>
      {/* dropdown attached to this bar */}
      <AnimatePresence>
        {showcategory && (
          <motion.div
            className="fixed top-56 left-9-translate-x-1/2 bg-white rounded-xl shadow-lg p-4 z-50 md:hidden w-[90%] max-w-sm"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 2, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
            onClick={() => setShowCategory(false)}
          >
            <ul className="flex flex-col gap-y-1 py-5 px-6">
              <a
                className="cursor-pointer hover:text-textGreen text-xl font-normal font-didot"
                onClick={() => onCategorySelect("All products")}
              >
                All products
              </a>
              {categories.map((category, index) => (
                <a
                  key={index}
                  className="cursor-pointer hover:text-textGreen text-xl font-normal font-didot "
                  onClick={() => {
                    onCategorySelect(category.name);
                    setShowCategory(false);
                    onSearch("");
                  }}
                >
                  {category.name}
                </a>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ShopHeader;
