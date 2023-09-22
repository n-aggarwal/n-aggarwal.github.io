import React from "react";

const jobDetails = [
  {
    position: "Research Intern",
    company: "privacy-tech-lab",
    companyLink: "https://privacytechlab.org/",
    time: "Jan 2023 - Present",
    address: "Middletown, CT (Remote)",
    work: "Worked on implemeting GPC (Global Privacy Control on Android). To do so, we first explored the different viable implementation approaches of GPC (Global PrivacyControl) on Android. Next, we looked at the legal issues surrounding privacy laws in different regions including CCPA, CDPA, and GDPR. Finally, we counducted a large-scale network nalysis of over 1000 apps. ",
  },

  {
    position: "Frontend Product Manager",
    company: "OurCampus",
    companyLink: "https://about.ourcampuswes.org/",
    time: "May 2023 - Present",
    address: "Middletown, CT",
    work: "Led and managed a team of developers to continously update the app- fixing bugs and addding new features, while taking care of various other aspects of running an app including outreach, marketing, deployment, etc.",
  },
  {
    position: "Teaching Assistant",
    company: "Wesleyan University",
    companyLink: "https://www.wesleyan.edu/",
    time: "Jan 2023 - May 2023",
    address: "Middletown, CT",
    work: "Led weekly help sessions to assist students with basic data structure and memory Management issues; helped the professor in labs by clarifying students' questions and providing examples of good coding; provided constructive feedback on the weekly problem sets for students.",
  },

  // Add more job details objects here
];

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 capitalize hover:underline"
          >
            @{company}
          </a>{" "}
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-[60%] mx-auto text-center">{work}</p>
      </div>
    </li>
  );
};

const Work = () => {
  return (
    <div className="my-40 scroll-mt-[4rem]" id="work">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div className="w-[75] mx-auto relative text-center">
        <div className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top" />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {jobDetails.map((job, index) => (
            <Details key={index} {...job} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Work;
