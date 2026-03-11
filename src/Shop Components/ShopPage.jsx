import { Link } from "react-router-dom";
import { categories } from "../lib";
import { shoppingCards } from "../lib/product";
import { motion } from "framer-motion";

const ShopPage = ({
  selectedCategory,
  searchQuery,
  onCategorySelect,
  onSearch,
}) => {
  const shuffledProducts = [...shoppingCards].sort(() => Math.random() - 0.5);

  const filteredProducts = shuffledProducts.filter((card) => {
    const matchesCategory =
      selectedCategory === "All products" ||
      card.category === selectedCategory ||
      (selectedCategory === "New" && card.isNew);
    const matchesSearch = card.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-screen md:h-screen w-full overflow-hidden mx-auto  py-6">
      <div className="w-full h-full bg-[green-400] grid grid-cols-1 md:grid-cols-[1fr_5fr] gap-x-3  ">
        <aside className="hidden md:flex flex-col items-center  cursor-pointer">
          <h2 className="text-3xl font-fraunces font-semibold tracking-wide text-textGreen">
            Categories
          </h2>
          <a
            className="font-didot font-normal text-2xl my-4"
            onClick={() => {
              onCategorySelect("All products");
              onSearch("");
            }}
          >
            All products
          </a>
          <ul className="flex flex-col gap-y-4">
            {categories.map((catey, index) => (
              <li key={index}>
                <a
                  className="font-didot font-normal text-2xl hover:text-textGreen transition-colors duration-300"
                  onClick={() => {
                    onCategorySelect(catey.name);
                    onSearch("");
                  }}
                >
                  {catey.name}
                </a>
              </li>
            ))}
          </ul>
        </aside>
        <div className=" h-full w-full grid grid-cols-2 lg:grid-cols-3 px-12 md:py-6 gap-x-6 gap-y-20 overflow-y-auto py-10 ">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No products found. Try another search or category.
            </p>
          ) : (
            filteredProducts.map((card) => (
              <div className="flex flex-col gap-y-2" key={card.id}>
                <div className=" relative w-full aspect-[3/4] overflow-hidden rounded-[10px]">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="z-40 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {card.isNew && (
                    <span className="absolute top-2 right-2 bg-[#007519] text-white  font-bold  px-3 py-2 rounded-full text-xs md:text-[16px] font-inter ">
                      NEW
                    </span>
                  )}
                </div>
                <p className="lg:text-2xl font-normal font-fraunces text-[15px] md:text-xl">
                  {card.name}
                </p>
                <p className="font-didot lg:text-2xl font-normal text-xl">
                  ₦{card.price.toLocaleString()}
                </p>
                <Link to={`/product/${card.id}`}>
                  <button className="text-white bg-textGreen w-full rounded-[8px] px-4 py-3 lg:text-xl font-bold font-inter text-center md:text-[17px] text-xs">
                    Shop Now
                  </button>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
