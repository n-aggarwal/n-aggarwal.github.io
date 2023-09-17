import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer.js";
import ProjectsBtn from "../components/ProjectsBtn.js";
import Avatar from "../components/Avatar.js";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-screen">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className=" text-center flex flex-col mt-4 xl:pt-10 xl:text-left h-full container mx-auto">
          <motion.h1 variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className="h1">
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          <p classname="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            placerat egestas sagittis. Nunc ac tortor a quam rhoncus cursus.
            Donec condimentum ipsum quis varius tempus. Mauris sagittis nulla
            quam, a mattis felis suscipit nec.
          </p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
        </div>
      </div>
      {/*Background Image*/}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
        </div>
        {/*Particles*/}
        <div>Particles</div>
        {/*Avatar Image */}
        <motion.div variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' transition={{duration: 1, ease: 'easeInOut'}} className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
          <Avatar />
        </motion.div>
      </div>

    </div>
  );
};

export default Home;
