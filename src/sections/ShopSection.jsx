import { shopCategory } from "../lib";

const ShopSection = () => {
  return (
    <section
      className=" overflow-x-hidden mx-auto w-full scroll-mt-7 lg:scroll-mt-10 "
      id="shop"
    >
      <div className="max-w-[95rem] px-8 py-16 w-full  mx-auto">
        <h1 className="text-textGreen font-fraunces font-semibold text-2xl md:text-4xl lg:text-5xl align-left mx-auto w-full ">
          Shop By Category
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2.5 md:gap-x-14 w-full mt-10 place-items-center md:px-3  ">
          {shopCategory.map((item, index) => (
            <div key={index}>
              <div className="relative group overflow-hidden rounded-2xl aspect-[3/4] w-full">
                <img
                  src={item.img}
                  alt={`${item.name} category`}
                  className="w-full h-full object-cover rounded-2xl shadow-md transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-heroBg/60 backdrop-blur-sm 
                  translate-y-full md:group-hover:translate-y-0
                  transition-transform duration-500 ease-out
                  flex items-end justify-center pb-8 rounded-t-2xl"
                >
                  <h2 className="text-center flex items-end justify-center pb-8 font-didot text-2xl text-black/65">
                    {item.info}
                  </h2>
                </div>
              </div>
              <p className="text-center mt-5 font-didot  text-2xl md:text-3xl lg:text-4xl">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
