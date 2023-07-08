import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { web3projects, webprojects } from "../constants";
import { Tilt } from "react-tilt";
import { github } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          ></img>
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]font-sans">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] font-sans text-justify">
            {description}
          </p>
        </div>
        <div className="m-4 flex flex-wrap gap-4">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} font-sans`}>My Work</p>
        <h2 className={`${styles.sectionHeadText} font-sans`}>
          Full-Stack Web3 Projects
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary max-w-3xl text-[17px] leading-[30px] text-justify"
        >
          Folowing projects showcases my skills and exreience in Full-stack Web3
          and blockchain Dapps. Each project is vriefly described with links
          code repositories.
        </motion.p>
      </div>
      <div className="flex flex-wrap gap-7 mt-20">
        {web3projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} font-sans mt-16`}>
          Front-End Web Projects
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary max-w-3xl text-[17px] leading-[30px] text-justify"
        >
          Folowing projects showcases my skills and exreience in Front-end Web
          applications. Each project is vriefly described with links code
          repositories. Side note: Each web3 project above can be in this
          category as they are ful stack DApps
        </motion.p>
      </div>
      <div className="flex flex-wrap gap-7 mt-20">
        {webprojects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
