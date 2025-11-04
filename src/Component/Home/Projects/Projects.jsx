import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import Project_Card from "./Project_Card";
import { useTheme } from "../../../Hook/useTheme";

const Projects = () => {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentTheme = useTheme();
  const isDark = currentTheme === 'sunset';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full py-24 px-6 overflow-hidden"
      
    >
      {/* Animated Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: isDark ? [0.1, 0.18, 0.1] : [0.15, 0.25, 0.15],
          x: [0, -100, 0],
          y: [0, 80, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: isDark 
            ? 'radial-gradient(circle, rgba(0, 191, 255, 0.15) 0%, rgba(0, 150, 200, 0.05) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(0, 191, 255, 0.2) 0%, rgba(77, 210, 255, 0.1) 50%, transparent 100%)'
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: isDark ? [0.08, 0.15, 0.08] : [0.12, 0.2, 0.12],
          x: [0, 120, 0],
          y: [0, -60, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute bottom-40 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: isDark 
            ? 'radial-gradient(circle, rgba(0, 153, 204, 0.12) 0%, rgba(0, 100, 150, 0.04) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(51, 204, 255, 0.18) 0%, rgba(102, 221, 255, 0.08) 50%, transparent 100%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {loading ? (
          <div className="flex items-center justify-center min-h-[60vh]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 rounded-full"
              style={{
                borderColor: `${isDark ? 'rgba(0, 191, 255, 0.3)' : 'rgba(0, 191, 255, 0.4)'}`,
                borderTopColor: '#00BFFF'
              }}
            />
          </div>
        ) : (
          <>
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              {/* Decorative Line */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <div className="h-px w-12" style={{ backgroundColor: '#00BFFF' }} />
                <span 
                  className="text-sm font-bold tracking-[0.3em] uppercase"
                  style={{ color: isDark ? '#00BFFF' : '#0096CC' }}
                >
                  Portfolio
                </span>
                <div className="h-px w-12" style={{ backgroundColor: '#00BFFF' }} />
              </motion.div>

              {/* Main Title */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black mb-6"
                style={{ color: isDark ? '#FFFFFF' : '#001F3F' }}
              >
                Featured
                <motion.span
                  className="inline-block ml-4"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  <span 
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #00BFFF, #33CCFF, #00BFFF, #33CCFF)',
                      backgroundSize: '200% 100%'
                    }}
                  >
                    Projects
                  </span>
                </motion.span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-lg max-w-3xl mx-auto leading-relaxed"
                style={{ color: isDark ? '#99E6FF' : '#004C99' }}
              >
                Explore a collection of innovative web applications showcasing modern technologies, 
                clean architecture, and user-centric design principles
              </motion.p>

              {/* Tech Stack Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="flex items-center justify-center gap-6 mt-10 flex-wrap"
              >
                {[
                  { Icon: FaReact, color: '#61DAFB', label: 'React' },
                  { Icon: FaNodeJs, color: '#68A063', label: 'Node.js' },
                  { Icon: SiMongodb, color: '#47A248', label: 'MongoDB' },
                  { Icon: SiTailwindcss, color: '#06B6D4', label: 'Tailwind' },
                  { Icon: FaHtml5, color: '#E34F26', label: 'HTML5' },
                  { Icon: FaCss3Alt, color: '#1572B6', label: 'CSS3' }
                ].map(({ Icon, color, label }, idx) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + idx * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -8,
                      transition: { duration: 0.2 }
                    }}
                    className="relative group"
                  >
                    <div
                      className="p-3 rounded-xl shadow-lg transition-all duration-300"
                      style={{
                        backgroundColor: isDark ? 'rgba(0, 191, 255, 0.1)' : 'rgba(0, 191, 255, 0.15)',
                        border: `2px solid ${isDark ? 'rgba(0, 191, 255, 0.3)' : 'rgba(0, 191, 255, 0.4)'}`
                      }}
                    >
                      <Icon size={28} style={{ color }} />
                    </div>
                    {/* Tooltip */}
                    <div 
                      className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
                      style={{
                        backgroundColor: isDark ? 'rgba(0, 191, 255, 0.9)' : 'rgba(0, 191, 255, 0.95)',
                        color: isDark ? '#001F3F' : '#FFFFFF'
                      }}
                    >
                      {label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-12"
            >
              {project.map((p, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                >
                  <Project_Card project={p} />
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            {project.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center mt-20"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg group"
                    style={{
                      backgroundColor: isDark ? 'rgba(0, 191, 255, 0.15)' : 'rgba(0, 191, 255, 0.2)',
                      border: `2px solid ${isDark ? 'rgba(0, 191, 255, 0.4)' : 'rgba(0, 191, 255, 0.5)'}`,
                      color: '#00BFFF'
                    }}
                  >
                    <span>View All Projects</span>
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 20 20" 
                      fill="none"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path 
                        d="M4 10h12m0 0l-4-4m4 4l-4 4" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;