import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="overflow-x-hidden mx-auto  w-full scroll-mt-7 lg:scroll-mt-10 py-16 background-image "
      id="about"
    >
      <div className="max-w-[95rem] px-8 mx-auto">
        <motion.div
          className="flex flex-col gap-y-11 justify-center  "
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-textGreen font-fraunces font-semibold text-2xl md:text-4xl lg:text-5xl ">
            About Us
          </h2>
          <div className="px-3.5 py-6 bg-white/20 rounded-3xl backdrop-blur-sm  flex lg:text-start">
            <p className="text-2xl lg:text-4xl font-fraunces font-light leading-12 md:leading-14">
              <span className="font-semibold ">Luviere’</span> was created for
              the woman who understands that elegance is power. We design
              timeless pieces that feel soft yet unforgettable jewelry that
              elevates your everyday and completes your most special moments.
              Every detail is intentional. Every piece is made to be adored.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
