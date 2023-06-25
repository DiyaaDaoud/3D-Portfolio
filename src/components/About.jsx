import React from "react";
import { styles } from "../style";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="h-16 w-16 object-contain"
          ></img>
          <h3 className="text-white text-[20px] font-bold text-center font-sans">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} font-sans`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} font-sans`}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.2, 0.1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] font-sans text-justify"
      >
        I'm a skilled software developer, with experience in javascript and
        typescript, and expertise in frameworks like React, Next, Nodejs. on the
        other hand, I'm a fullstack blockchain and Web3 developer, having an
        excellent base in solidity, hardhat, EVMs, tokens' protocols, and DeFi
        apps. I'm a quick learner and collaborate closely with clients to create
        efficient, scalable, and user-friendly solutions to solve real-world
        problems.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
