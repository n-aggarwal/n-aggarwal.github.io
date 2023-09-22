const ProjectDetails = [
  {
    name: "GPC Andorid",
    organization: "privacy-tech-lab",
    source_code: "https://github.com/privacy-tech-lab/gpc-android",
    is_deployed: false,
    deployed_version: "No deployment Yet",
    description:
      "GPC Android is an ongoing research project exploring the various viable options for opting you out from ad tracking. The primary goal is to achieve the same result as Global Privacy Control (GPC) signals per the GPC spec that we are developing at the W3C and placing opt out cookies.",
  },

  {
    name: "Privacy Messaging App",
    organization: "Personal Project",
    source_code: "https://github.com/n-aggarwal/privacy-messaging-app",
    is_deployed: true,
    deployed_version:
      "https://expo.dev/@nishant-aggarwal/messaging-app?serviceType=classic&distribution=expo-go",
    description:
      "The privacy messaging app is developed using expo go, on the react-native platform. It is meant to increase security, and privacy of the users.This app contains many features including Anti-Screenshot Functionality (Android Only), End-to-End Encryption, Sequence Message deletion, Password Security (client + server), Inbuilt 2 Factor Authentication, and API Security.",
  },

  {
    name: "ABA Data Analysis",
    organization: "DataFest Hackathon 2023",
    is_deployed: false,
    source_code: "https://github.com/n-aggarwal/qac-datafest-2023",
    deployed_version: "No deployment Yet",
    description:
      "Analyzed complex data including conversations between clients and attorneys among other information provided by the American Bar Association to provide insights on inefficiencies and trends to optimize pro bono service management.",
  },
  {
    name: "Portfolio Website",
    organization: "Personal Project",
    is_deployed: true,
    source_code: "https://github.com/n-aggarwal/n-aggarwal.github.io",
    deployed_version: "https://n-aggarwal.github.io",
    description:
      "My Portfolio Website! The one you are currently viewing! This website has been developed using NextJS, and is filled with lovely animations, and eye-catching CSS styling.",
  },
  // Add more job details objects here
];

const Details = ({
  name,
  source_code,
  deployed_version,
  description,
  organization,
  is_deployed,
}) => {
  return (
    <li className="my-8 w-[60%] last:mb-[6rem] mx-auto flex flex-col items-center justify-between bg-black border border-[#F7AB0A] p-4">
      <div>
        <h3 className="capitalize font-bold text-2xl text-accent">
          {name}&nbsp;
        </h3>
        <div class="mx-auto w-[100%] my-2 border-b-2 border-gray-400"></div>

        <span className="capitalize font-medium text-dark/75">
          {organization}
        </span>
        <p className="font-medium w-[100%] text-center ">{description}</p>
        <div className="flex flex-row space-x-4 justify-center">
          <a
            className="bg-black border border-[#F7AB0A] p-4 text-white px-7 py-3 my-3 items-center gap-2 rounded-full inline-flex focus:scale-110 hover:scale-110 hover:bg-black active:scale-105 transition"
            href={source_code}
            target="_blank"
          >
            Source Code
          </a>
          <button
            className={`${
              is_deployed
                ? "bg-black border border-[#F7AB0A] p-4 text-white px-7 py-3 my-3 items-center gap-2 rounded-full inline-flex focus:scale-110 hover:scale-110 hover:bg-black active:scale-105 transition"
                : "bg-black border border-gray p-4 text-white px-7 py-3 my-3 items-center gap-2 rounded-full inline-flex"
            } `}
            disabled={deployed_version === "No Deployment Yet"}
            onClick={() => {
              if (is_deployed && deployed_version !== "No Deployment Yet") {
                window.open(deployed_version, "_blank");
              }
            }}
          >
            Deployed Version
          </button>
        </div>
      </div>
    </li>
  );
};

const Projects = () => {
  return (
    <div>
      <div className="w-full h-[15rem] bg-gradient-to-b from-[#2e2257]/5 to-gray-900"></div>
      <div className="pt-10 relative bg-gray-900 min-h-[140vh]" id="projects">
        <div className="w-full absolute top-[35%] bg-[#F7AB0A]/10 left-0 min-h-[50vh] -skew-y-12 "></div>
        <h2 className="font-bold text-8xl mb-32 w-full text-center text-white">
          Featured Projects
        </h2>
        <div className="w-[75] mx-auto relative text-center">
          <div className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top" />
          <ul className="w-full flex flex-col items-start justify-between ml-4">
            {ProjectDetails.map((project, index) => (
              <Details key={index} {...project} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
