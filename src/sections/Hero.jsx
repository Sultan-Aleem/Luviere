import { motion } from "framer-motion";
import Img from "../assets/images/hero-image-removebg-preview.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative bg-heroBg min-h-[86vh] md:min-h-screen overflow-x-hidden mx-auto flex items-center"
      id="home"
    >
      <motion.img
        src={Img}
        alt="Elegant woman wearing gold jewellery from Luviere collection"
        className="absolute right-0 top-0 h-full object-cover z-10 w-auto "
        loading="eager"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-heroBg via-heroBg/20 to-transparent z-15" />
      <motion.div
        className="relative z-20 px-8 max-w-[80rem]  pt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="lg:max-w-[50rem]">
          <h1 className="font-fraunces text-4xl md:text-6xl lg:text-[64px] font-semibold text-black lg:tracking-wider leading-11.5 md:leading-18">
            Crafted for the Woman You’re Becoming.
          </h1>
        </div>

        <div className="mt-16 flex gap-3 md:gap-4  outline-none">
          <a
            href="#shop"
            className="greenButton flex flex-shrink-0 items-center justify-center shadow-md hover:shadow-lg"
          >
            Shop now
          </a>
          <Link to="/shop">
            <button
              className="bg-transparent text-[#414141] px-3 py-2 md:px-6 md:py-3 rounded-full border-2 border-white font-extrabold md:font-bold md:tracking-wider text-[14px] md:text-[18px]
            hover:bg-white hover:text-black hover:border-white transition-colors
            duration-300 ease-in-out flex flex-shrink-0 items-center justify-center shadow-md hover:shadow-lg"
            >
              Explore New Collection
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
