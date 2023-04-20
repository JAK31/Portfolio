import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceCard from "./ServiceCard";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hii, I am A MERN stack web developer specialized in
        developing web applications using the MERN (MongoDB, Express, React,
        Node.js) technology stack. I am proficient in building full-stack
        web applications, designing and implementing APIs, and integrating
        frontend and backend components. I also have experience in using
        various tools and technologies such as Git, Redux, and Webpack to
        optimize the development process.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services?.map((service, index) => (
          <ServiceCard
            index={index}
            icon={service.icon}
            title={service.title}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
