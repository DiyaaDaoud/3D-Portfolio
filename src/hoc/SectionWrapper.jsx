import React from "react";
import { styles } from "../style";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        // variants={staggerContainer()}
        initial="hidden"
        viewport={{ once: true, amount: 0.25 }}
        whileInView="show"
        className={`${styles.padding} mx-auto relative z-0 max-w-7xl`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component></Component>
      </motion.section>
    );
  };

export default SectionWrapper;
