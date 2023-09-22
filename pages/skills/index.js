// icons

const SkillsDetails = [
  {
    name: "Java",
    img: "java.png",
    expertise: "85%",
  },

  {
    name: "C",
    img: "c-programming.png",
    expertise: "85%",
  },
  {
    name: "Python",
    img: "python.png",
    expertise: "60%",
  },
  {
    name: "Android Studio",
    img: "android-studio.png",
    expertise: "50%",
  },
  {
    name: "Bash",
    img: "bash.png",
    expertise: "40%",
  },
  {
    name: "CSS",
    img: "css.png",
    expertise: "50%",
  },
  {
    name: "HTML",
    img: "html.png",
    expertise: "75%",
  },
  {
    name: "JavaScript",
    img: "javaScript.png",
    expertise: "65%",
  },
  {
    name: "Microsoft Office",
    img: "microsoft-office.png",
    expertise: "60%",
  },
  {
    name: "React Native",
    img: "react-native.png",
    expertise: "60%",
  },
  {
    name: "NextJS",
    img: "nextjs.png",
    expertise: "50%",
  },
  {
    name: "Git",
    img: "git.png",
    expertise: "80%",
  },
  {
    name: "React",
    img: "react.png",
    expertise: "60%",
  },
  {
    name: "Non-Relational Database",
    img: "database.png",
    expertise: "35%",
  },
];

const Details = ({ img, expertise, name }) => {
  return (
    <div>
      <div className="group relative flex cursor-pointer">
        <img
          src={img}
          className="rounded-full border border-gray-500 object-cover w-24 h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          width={24}
          alt="Skill Logo"
        ></img>
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">
              {expertise}
            </p>
          </div>
        </div>
        <div className="absolute pr-14 right-[10rem] bottom-[2rem] hidden xl:group-hover:flex">
          <div className="bg-white relative flex text-primary items-center p-[6px] rounded-3[px]">
            <div className="text-[12px] leading-none font-semibold capitalize">
              {name}
            </div>
            <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div>
      {/* Your gradient background */}
      <div className="w-full h-[15rem] bg-gradient-to-b to-[#2e2257]/5 from-gray-900 "></div>

      {/* Skills section */}
      <div className="mt-[-5rem] scroll-mt-[4rem] relative" id="skills">
        <h2 className="font-bold text-8xl mb-32 w-full text-center ">Skills</h2>
        <h3 className="text-accent mx-auto mt-[-8rem] mb-[6rem] text-center font-bold">
          Hover over a Skill to view proficiency
        </h3>

        {/* Grid container */}
        <div className="grid grid-cols-4 gap-5 w-[60%] ml-[25%]">
          {SkillsDetails.map((skill, index) => (
            // Grid item
            <div key={index} className="center-items">
              <Details {...skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
