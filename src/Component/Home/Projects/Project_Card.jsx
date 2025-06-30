import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdLiveTv } from "react-icons/md";

const Project_Card = ({project}) => {
    return (
        <div className='my-6'>

          {/* Project Card */}
          <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Left: Image */}
            <div className="lg:w-1/2 w-full h-64 lg:h-auto">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-between p-6 lg:w-1/2 w-full">
              <div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Icons */}
                <div className="flex gap-3 text-2xl text-[#00BFFF] mb-6 flex-wrap">
                  {project.techStack?.map((Icon, index) => (
                    <img className='w-8 h-8' key={index} src={Icon} alt="" />
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center gap-1 px-4 py-2 bg-[#00BFFF] text-white font-medium rounded hover:bg-[#0099cc] transition"
                >
                  <MdLiveTv className='text-lg' /> Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center gap-1 px-4 py-2 border border-[#00BFFF] text-[#00BFFF] font-medium rounded hover:bg-[#00BFFF] hover:text-white transition"
                >
                  <FaGithub className='text-lg' /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Project_Card;