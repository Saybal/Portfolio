import { Link } from "react-scroll";
import react_icon from "../../assets/React.png";
import express_icon from "../../assets/Express.png";
import mongodb_icon from "../../assets/mongodb.png";
import Firebase_icon from "../../assets/Firebase.png";
import JWT_icon from "../../assets/JWT.png";
import tailwind_icon from "../../assets/Tailwind.png";
import figma_icon from "../../assets/Figma.png";
import js_icon from "../../assets/JS.png";
import html_icon from "../../assets/HTML.png";
import css_icon from "../../assets/CSS.png";

const AboutMe = () => {
  const skills_1 = [
    {
      id: 1,
      skill: "ReactJS",
      icon: react_icon,
      projects: 0,
    },
    {
      id: 2,
      skill: "ExpressJS",
      icon: express_icon,
      projects: 0,
    },
    {
      id: 3,
      skill: "MongoDB",
      icon: mongodb_icon,
      projects: 0,
    },
    {
      id: 4,
      skill: "Firebase",
      icon: Firebase_icon,
      projects: 0,
    },
    {
      id: 5,
      skill: "JWT",
      icon: JWT_icon,
      projects: 0,
    },
  ];

  const skills_2 = [
    {
      id: 1,
      skill: "Tailwind CSS",
      icon: tailwind_icon,
      projects: 0,
    },
    {
      id: 2,
      skill: "Figma",
      icon: figma_icon,
      projects: 0,
    },
    {
      id: 3,
      skill: "JavaScript",
      icon: js_icon,
      projects: 0,
    },
    {
      id: 4,
      skill: "HTML",
      icon: html_icon,
      projects: 0,
    },
    {
      id: 5,
      skill: "CSS",
      icon: css_icon,
      projects: 0,
    },
  ];

  return (
    <div id="about" className="px-4 md:px-16 py-12 bg-white text-[#0D2E29]">
      <p className="text-[#0070BB] body-font font-bold mb-2">
        About <span className="text-black">Me</span>
      </p>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-4xl mb-10 leading-snug font-head">
        Described Briefly My Professional Background Skills and Accomplishments
      </h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left - Image */}
        <div className="rounded-2xl corner-border-box p-2 flex justify-center lg:justify-start">
          <img
            src="https://i.ibb.co/gZH0bYr1/Whats-App-Image-2025-06-29-at-12-39-13-3c5b5905.jpg"
            alt="Profile"
            className="w-full max-w-xs md:max-w-sm h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Middle - Text */}
        <div className="body-font flex-1 space-y-4">
          <h3 className="font-bold text-base md:text-lg">
            Hello! I'm a Professional Web Designer providing awesome cool design
            stuff for clients.
            <br />
            <span className="text-[#0D2E29] font-semibold">
              My vision is to satisfy my client.
            </span>
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            I'm Saybal Roy, a passionate Full Stack Web Developer skilled in
            React, Node.js, Firebase, and MongoDB. I specialize in creating
            responsive, scalable web apps with clean code and intuitive UI/UX. I
            love turning ideas into powerful digital solutions that help
            businesses grow and succeed.
          </p>

          <Link to="contact" smooth={true} duration={300} offset={-80}>
            <button className="bg-[#0070BB] mt-2 text-white font-semibold px-6 py-3 rounded-md hover:bg-[#008fbb] transition-all">
              {" "}
              Hire Me
            </button>
          </Link>
        </div>

        {/* Right - Skills */}
        <div className="body-font w-full lg:w-1/3 space-y-4 bg-gray-50 rounded-lg p-4 ">
          <h4 className="font-semibold text-xl border-b pb-2">Skills</h4>

          <div className="grid grid-cols-2 gap-4 mx-auto">
            <div className="border-r-2">
              {skills_1.map(({ id, skill, icon, projects }) => (
                <div
                  key={id}
                  className="flex items-center gap-2 sm:gap-3 md:gap-4"
                >
                  <img
                    className="w-6 sm:w-8 md:w-10"
                    src={icon}
                    alt={`${skill} Icon`}
                  />
                  <div>
                    <h2 className="text-[#2072AF] text-sm sm:text-lg md:text-xl font-semibold">
                      {skill}
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base">
                      {projects} Projects
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {skills_2.map(({ id, skill, icon, projects }) => (
                <div
                  key={id}
                  className="flex items-center gap-2 sm:gap-3 md:gap-4"
                >
                  <img
                    className="w-6 sm:w-8 md:w-10"
                    src={icon}
                    alt={`${skill} Icon`}
                  />
                  <div>
                    <h2 className="text-[#2072AF] text-sm sm:text-lg md:text-xl font-semibold">
                      {skill}
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base">
                      {projects} Projects
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
