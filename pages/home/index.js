import Image from "next/image";
import ParticlesContainer from "../../components/ParticlesContainer.js";
import ProjectsBtn from "../../components/ProjectsBtn.js";
import Avatar from "../../components/Avatar.js";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";
import { HiDownload } from "react-icons/hi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

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
          <div className="flex flex-col justify-center relative w-80 xl:ml-2 sm:mx-auto">
            <p>
              I am a sophomore at Wesleyan University studying Computer Science
              and Mathematics. I am a privacy researcher, a product manager, and
              most importantly a coder at heart. I have strong communication,
              problem solving, and abstract & critical thinking skills. I am
              also highly motivated and deeply enthusiastic to write code that
              is efficient, and novel.
              <br /> <br />
            </p>
            <p className=" relative px-6 text-accent font-bold">
              Connect with me!
            </p>
            <div className="absolute xl:bottom-[-5rem] sm:bottom-[-10rem] xs:bottom-[-10rem] z-50 flex items-center space-x-2 xl:flex-row sm:flex-col md:flex-col">
              <a
                className="bg-gray-950 text-white px-7 py-3 my-3 items-center gap-2 rounded-full flex focus:scale-110 hover:scale-110 hover:bg-black active:scale-105 transition"
                href="/nishant-aggarwal-resume-website.pdf"
                download={true}
              >
                Download CV
                <HiDownload />
              </a>
              <a
                className="bg-gray-950 text-white p-4 items-center gap-2 rounded-full flex hover:scale-120 hover:bg-black active:scale-110 transition"
                href="https://www.linkedin.com/in/nishant-aggarwal-387b83252/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a
                className="bg-gray-950 text-white p-4 items-center gap-2 rounded-full flex hover:scale-120 hover:bg-black active:scale-110 transition"
                href="https://github.com/n-aggarwal"
                target="_blank"
              >
                <AiFillGithub />
              </a>
            </div>
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
