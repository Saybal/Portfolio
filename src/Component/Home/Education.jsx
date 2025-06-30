import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Sc. in Computer Science",
      institution: "Sylhet Engineering College",
      year: "2023 – Present",
      details: "Studying software development, data structures, algorithms, and computer systems.",
    },
    {
      degree: "HSC – Science",
      institution: "Notre Dame College",
      year: "2021 – 2022",
      details: "Completed Higher Secondary with a focus on Physics, Chemistry, and Mathematics.",
    },
    {
      degree: "SSC – Science",
      institution: "Saint Martha's High School",
      year: "2018 – 2020",
      details: "Achieved GPA 5.0 with strong performance in Science and Mathematics.",
    },
  ];

  return (
    <section id="education" className="px-4 md:px-12 lg:px-24 py-16 bg-[#f9fafb] text-[#0D2E29]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Education
      </h2>

      <div className="flex flex-col gap-8">
        {educationData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#00BFFF] hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-semibold">{item.degree}</h3>
                <p className="text-md text-gray-700">{item.institution}</p>
              </div>
              <p className="text-sm font-medium text-gray-500 mt-2 md:mt-0">
                {item.year}
              </p>
            </div>
            <p className="text-gray-600 mt-4 text-sm">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
