import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import Project_Card from "./Project_Card";
import { useTheme } from "../../../Hook/useTheme";

const Projects = () => {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentTheme = useTheme();

  useEffect(() => {
    axios
      .get("projects.json")
      .then((res) => {
        setProject(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

  console.log(project);

  return (
    <div id="projects">
      {loading ? (
        <span className="loading text-[#0070BB] loading-dots loading-xl"></span>
      ) : (
        <div
          className={`body-font px-4 md:px-12 lg:px-24 py-16 ${
            currentTheme === "acid"
              ? "bg-[#f1f5f9] text-[#0D2E29]"
              : "text-base-content"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-[#0070BB]">Featured</span> Project
          </h2>
          {project.map((p, i) => (
            <Project_Card key={i} project={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
