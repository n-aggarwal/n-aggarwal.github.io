const Projects = () => {
  return (
    <div>
      <div className="w-full h-[15rem] bg-gradient-to-b from-[#2e2257]/5 to-gray-900"></div>
      <div className="pt-10 relative bg-gray-900 min-h-[140vh]" id="projects">
        <h2 className="font-bold text-8xl mb-32 w-full text-center text-white">
          Featured Projects
        </h2>
        <div className="w-[75] mx-auto relative text-center">
          <div className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top" />
        </div>
        <div className="w-full absolute top-[35%] bg-[#F7AB0A]/10 left-0 min-h-[50vh] -skew-y-12 "></div>
      </div>
    </div>
  );
};

export default Projects;
