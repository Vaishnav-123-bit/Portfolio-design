import React from "react";
import { motion } from "framer-motion";
const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
      py-3 px-6 absolute shadow-dark cursor-pointer"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-7xl mt-64 w-full text-center">Skills</h2>
      <div className="bg-circularLight w-full h-screen relative flex items-center justify-center rounded-full">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
      p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-60vh" y="2vw" />
        <Skill name="CSS" x="25vh" y="-10vw" />
        <Skill name="Javascript" x="60vh" y="6vw" />
        <Skill name="firebase" x="40vh" y="15vw" />
        <Skill name="Java" x="-30vh" y="-15vw" />
        <Skill name="Web Design" x="55vh" y="-12vw" />
        <Skill name="C" x="-25vh" y="-5vw" />
        <Skill name="Python" x="0" y="-20vw" />
        <Skill name="TailwindCSS" x="-35vh" y="15vw" />
        <Skill name="ReactJS" x="-55vh" y="-10vw" />
        <Skill name="NodeJS" x="70vh" y="-3vw" />
      </div>
    </>
  );
};

export default Skills;
