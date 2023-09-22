// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";

const Projects = () => {
  return (
    <div className="my-40" id="ProjectsPage">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Projects</h2>
      <div className="w-[75] mx-auto relative text-center">
        <div className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top" />
      </div>
    </div>
  );
};

export default Projects;
