import { bestSellers } from "../lib";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const items = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const BestSeller = () => {
  return (
    <section className="overflow-x-hidden mx-auto bg-shopColor w-full scroll-mt-7 lg:scroll-mt-10 py-16">
      <div className="max-w-[95rem] px-8 mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center gap-y-3.5">
          <h2 className="text-textGreen font-fraunces font-semibold text-2xl md:text-3xl lg:text-5xl">
            Best Sellers
          </h2>
          <p className="font-fraunces text-2xl md:text-3xl lg:text-4xl font-light text-center">
            See products popular among Luviere{" "}
            <span className="text-textGreen font-semibold">babes</span>.
          </p>
        </div>

        {/* 📱 MOBILE (independent animation) */}
        <div className="grid grid-cols-1 gap-y-16 my-20 md:hidden">
          {bestSellers.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "100%" }}
              transition={{
                opacity: {
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: "easeInOut",
                },

                y: { duration: 0.2, ease: "easeIn" },
              }}
            >
              <div className="w-full aspect-[3/4]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-3xl shadow-md"
                />
              </div>
              <h3 className="text-center font-didot pt-5 text-2xl">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* 💻 DESKTOP (stagger animation) */}
        <motion.div
          className="hidden md:grid md:grid-cols-3 gap-x-6 gap-y-16 my-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {bestSellers.map((item, index) => (
            <motion.div key={index} variants={items}>
              <div className="w-full aspect-[3/4]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-3xl shadow-md"
                />
              </div>
              <h3 className="text-center font-didot pt-5 text-2xl lg:text-4xl">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BestSeller;
