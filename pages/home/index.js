import Image from "next/image";
import ParticlesContainer from "../../components/ParticlesContainer.js";
import ProjectsBtn from "../../components/ProjectsBtn.js";
import Avatar from "../../components/Avatar.js";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";

const Home = () => {
  return (
    <div className="bg-primary/60 h-screen scroll-mt-[100rem]" id="home">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className=" text-center flex flex-col mt-4 xl:pt-10 xl:text-left h-full container mx-auto ">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Bytes of Brilliance <br />
            <span className="text-accent">One Line at a Time</span>
          </motion.h1>
          <div className="flex justify-center relative w-80 xl:ml-2 sm:mx-auto">
            <p>
              I am a sophomore at Wesleyan University studying Computer Science
              and Mathematics. I have been working on Privacy Research, more
              specifically, on implementing GPC on Android. I am interested in
              Privacy and theoretical Cryptography along with other concepts
              including Neural Networks, and Algorithms.
              <br /> <br />I have experience with React and React Native,
              building frontend, backend, and full stack applications. I also
              have expierence with large scale data-analysis and automation.
              Additionally, I have a bit of experience with dev-ops and database
              maangement.
            </p>
          </div>
        </div>
      </div>
      {/*Background Image*/}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/*Particles*/}
        <ParticlesContainer />
        {/*Avatar Image */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[1200px] max-h-[1050px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
