import { Link } from "react-scroll";

const AboutMe = () => {
  
  return (
    <div id="about" className="px-4 md:px-16 py-12 bg-white text-[#0D2E29]">
      <p className="text-[#0070BB] font-bold mb-2">
        About <span className="text-black">Me</span>
      </p>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-4xl mb-10 leading-snug">
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
        <div className="flex-1 space-y-4">
          <h3 className="font-bold text-base md:text-lg">
            Hello! I'm a Professional Web Designer providing awesome cool design stuff for clients.
            <br />
            <span className="text-[#0D2E29] font-semibold">
              My vision is to satisfy my client.
            </span>
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            I'm Saybal Roy, a passionate Full Stack Web Developer skilled in React, Node.js, Firebase, and MongoDB. I specialize in creating responsive, scalable web apps with clean code and intuitive UI/UX. I love turning ideas into powerful digital solutions that help businesses grow and succeed.
          </p>

          <Link to="contact" smooth={true} duration={300} offset={-80}>
           <button className="bg-[#0070BB] mt-2 text-white font-semibold px-6 py-3 rounded-md hover:bg-[#008fbb] transition-all"> Hire Me
            </button>
          </Link>
         
        </div>

        {/* Right - Skills */}
        <div className="w-full lg:w-1/3 space-y-4">
          <h4 className="font-semibold text-xl border-b pb-2">Skills</h4>

          {/* Skill bars */}
          {[
            { skill: "ReactJS", value: 90 },
            { skill: "MongoDB", value: 80 },
            { skill: "Figma", value: 80 },
            { skill: "HTML", value: 85 },
            { skill: "CSS", value: 90 },
          ].map(({ skill, value }) => (
            <div key={skill}>
              <div className="flex justify-between font-medium text-sm mb-1">
                <span>{skill}</span>
                <span>{value}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-[#2072AF] h-2 rounded"
                  style={{ width: `${value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
