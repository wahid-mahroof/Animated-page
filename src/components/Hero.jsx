import { motion } from "framer-motion";
import img from "../../public/wahid.png";

const textVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { clipPath: "inset(0 50% 0 50%" },
  visible: {
    clipPath: "inset(0 0% 0 0%",
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const Hero = () => {
  return (
    <section>
      <div className="relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white ">
        <motion.div
          className="w-full md:w-1/2 p-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-2xl md:text-3xl  lg:text-5xl my-14 "
            variants={textVariants}
          >
            Hey there!🖐
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-4xl mb-4"
            variants={textVariants}
          >
            i'm Wahid mahroof ,a creative frontend developer crafting immersive
            and intuitive web experiences.
          </motion.p>
          <motion.p
            className="text-xl md:text-2xl lg:text-4xl underline"
            variants={textVariants}
          >
            I'm currently helping bussinesses bring their vision to life through
            interactive digital solutions.
          </motion.p>

          <motion.a
            className="bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-2xl"
            variants={textVariants}
          >
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          className="w-fulll md:w-1/2 p-8 "
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src={img}
            alt=""
            width={500}
            height={500}
            className="rounded-3xl mt-5 "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

{
  /*const projectsVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: -40,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      bounce: 0.4,
    },
  },
};*/
}
