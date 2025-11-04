import { Link } from "react-scroll";
import { useTheme } from "../../Hook/useTheme";
import { motion } from "framer-motion";
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
  const currentTheme = useTheme();
  const isDark = currentTheme !== 'acid';
  
  const skills_1 = [
    { id: 1, skill: "ReactJS", icon: react_icon, projects: 6, color: "#61DAFB" },
    { id: 2, skill: "ExpressJS", icon: express_icon, projects: 4, color: "#000000" },
    { id: 3, skill: "MongoDB", icon: mongodb_icon, projects: 4, color: "#47A248" },
    { id: 4, skill: "Firebase", icon: Firebase_icon, projects: 4, color: "#FFCA28" },
    { id: 5, skill: "JWT", icon: JWT_icon, projects: 2, color: "#000000" },
  ];

  const skills_2 = [
    { id: 1, skill: "Tailwind CSS", icon: tailwind_icon, projects: 10, color: "#06B6D4" },
    { id: 2, skill: "Figma", icon: figma_icon, projects: 9, color: "#F24E1E" },
    { id: 3, skill: "JavaScript", icon: js_icon, projects: 9, color: "#F7DF1E" },
    { id: 4, skill: "HTML", icon: html_icon, projects: 12, color: "#E34F26" },
    { id: 5, skill: "CSS", icon: css_icon, projects: 12, color: "#1572B6" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.85, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const skillCardVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <div id="about" className={`relative px-4 md:px-16 py-20 overflow-hidden transition-colors duration-500 `}>
      
      {/* Animated Grid Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isDark ? 0.08 : 0.12 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(${isDark ? 'rgba(0, 112, 187, 0.3)' : 'rgba(0, 112, 187, 0.2)'} 1px, transparent 1px), 
                           linear-gradient(90deg, ${isDark ? 'rgba(0, 112, 187, 0.3)' : 'rgba(0, 112, 187, 0.2)'} 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </motion.div>

      {/* Dynamic Floating Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: isDark ? [0.2, 0.4, 0.2] : [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`absolute top-20 right-10 lg:right-20 w-48 h-48 lg:w-72 lg:h-72 rounded-full blur-3xl ${
          isDark ? "bg-blue-600/20" : "bg-blue-400/30"
        }`}
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: isDark ? [0.15, 0.35, 0.15] : [0.25, 0.45, 0.25],
          x: [0, -40, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className={`absolute bottom-10 left-10 lg:left-20 w-56 h-56 lg:w-80 lg:h-80 rounded-full blur-3xl ${
          isDark ? "bg-cyan-600/20" : "bg-indigo-400/30"
        }`}
      />

      {/* Particle Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${isDark ? "bg-cyan-400/40" : "bg-blue-400/50"}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="relative z-10"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <motion.div 
            className="inline-block mb-3"
            whileHover={{ scale: 1.05 }}
          >
            <p className={`body-font font-bold text-sm uppercase tracking-[0.2em] px-4 py-2 rounded-full border ${
              isDark 
                ? "text-cyan-400 border-cyan-400/30 bg-cyan-400/5" 
                : "text-blue-600 border-blue-400/40 bg-blue-50"
            }`}>
              <span className={isDark ? "text-white" : "text-slate-800"}>About</span> Me
            </p>
          </motion.div>
          
          <h2 className={`body-font text-3xl md:text-4xl lg:text-6xl font-bold max-w-5xl leading-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            Building The Future With{" "}
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <span 
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #00BFFF, #33CCFF, #00BFFF, #33CCFF)',
                      backgroundSize: '200% 100%'
                    }}
                  >
                    Cutting-Edge Tech
                  </span>
              <motion.div
                className={`absolute -bottom-2 left-0 h-1 rounded-full text-transparent`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{
                      backgroundImage: 'linear-gradient(90deg, #00BFFF, #33CCFF, #00BFFF, #33CCFF)',
                      backgroundSize: '200% 100%'
                    }}
              />
            </motion.span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left - Enhanced Image */}
          <motion.div
            variants={imageVariants}
            className="relative group lg:w-[380px] flex-shrink-0"
          >
            
            
            {/* Image Container */}
            <div className={`relative rounded-3xl overflow-hidden border-2 ${
              isDark ? "border-cyan-400/20" : "border-blue-400/30"
            }`}>
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                src="https://i.ibb.co/gZH0bYr1/Whats-App-Image-2025-06-29-at-12-39-13-3c5b5905.jpg"
                alt="Profile"
                className="w-full h-auto object-cover"
              />
              
              {/* Gradient Overlay */}
              <motion.div 
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDark 
                    ? "bg-gradient-to-t from-cyan-900/90 via-blue-900/50 to-transparent" 
                    : "bg-gradient-to-t from-blue-600/80 via-indigo-400/40 to-transparent"
                }`}
              >
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="text-white font-semibold text-lg"
                  >
                    Front End Developer
                  </motion.p>
                  <p className="text-cyan-200 text-sm">MERN Stack Specialist</p>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className={`absolute -top-4 -right-4 w-20 h-20 rounded-full blur-xl ${
                isDark ? "bg-cyan-500/20" : "bg-blue-400/30"
              }`}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className={`absolute -bottom-4 -left-4 w-24 h-24 rounded-full blur-xl ${
                isDark ? "bg-blue-500/20" : "bg-indigo-400/30"
              }`}
            />
          </motion.div>

          {/* Middle - Enhanced Text */}
          <motion.div 
            variants={itemVariants}
            className="body-font flex-1 space-y-8"
          >
            {/* Tech Badge */}
            {/* <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {["React", "Node.js", "MongoDB", "TypeScript"].map((tech, i) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold border ${
                    isDark
                      ? "bg-cyan-400/10 border-cyan-400/30 text-cyan-300"
                      : "bg-blue-100 border-blue-300 text-blue-700"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div> */}

            <div className="space-y-6">
              <h3 className={`font-bold text-xl md:text-2xl leading-relaxed ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                Hello! I'm a{" "}
                <motion.span 
                  className={`relative inline-block ${
                    isDark ? "text-cyan-400" : "text-blue-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  Professional Web Developer
                  <motion.span
                    className={`absolute -bottom-1 left-0 h-0.5 ${
                      isDark ? "bg-cyan-400" : "bg-blue-600"
                    }`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  />
                </motion.span>{" "}
                crafting cutting-edge digital solutions that merge creativity with functionality.
              </h3>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className={`text-base md:text-lg leading-relaxed ${
                  isDark ? "text-gray-300" : "text-slate-700"
                }`}
              >
                I'm{" "}
                <span className={`font-bold ${isDark ? "text-cyan-400" : "text-blue-600"}`}>
                  Saybal Roy
                </span>
                , a passionate Full Stack Web Developer specializing in the MERN stack. 
                I build{" "}
                <span className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                  responsive, scalable, and performant
                </span>{" "}
                web applications with modern UI/UX principles. From concept to deployment, 
                I transform complex problems into elegant, user-centric solutions that drive 
                business growth.
              </motion.p>
            </div>

            {/* CTA Button */}
            <Link to="contact" smooth={true} duration={300} offset={-80}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`relative group px-8 py-4 rounded-xl font-semibold overflow-hidden ${
                  isDark
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Work Together
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className={`absolute inset-0 ${
                    isDark
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500"
                      : "bg-gradient-to-r from-indigo-600 to-blue-600"
                  }`}
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right - Enhanced Skills */}
          <motion.div 
            variants={itemVariants}
            className={`relative body-font w-full lg:w-[400px] flex-shrink-0 space-y-6 rounded-3xl p-6 lg:p-8 border backdrop-blur-xl ${
                  isDark
                    ? "shadow-2xl"
                    : "shadow-2xl"
                }`}
            style={{
                  background: isDark 
                    ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.9) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  borderColor: isDark ? 'rgba(0, 191, 255, 0.2)' : 'rgba(0, 191, 255, 0.3)',
                  boxShadow: isDark 
                    ? '0 25px 50px -12px rgba(0, 191, 255, 0.15)'
                    : '0 25px 50px -12px rgba(0, 191, 255, 0.25)'
                }}
          >
            <motion.div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                              style={{
                                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)'
                                  
                              }}
                            />
            {/* Header */}
            <div className={`flex items-center gap-4 pb-6 border-b ${
              isDark ? "border-cyan-400/20" : "border-blue-200"
            }`}>
              <motion.div 
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  isDark
                    ? "bg-gradient-to-br from-cyan-500 to-blue-600"
                    : "bg-gradient-to-br from-blue-500 to-indigo-600"
                }`}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white text-2xl">⚡</span>
              </motion.div>
              <div>
                <h4 className={`font-bold text-xl ${isDark ? "text-white" : "text-slate-900"}`}>
                  Tech Stack
                </h4>
                <p className={`text-sm ${isDark ? "text-gray-400" : "text-slate-600"}`}>
                  My Arsenal
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                {skills_1.map(({ id, skill, icon, projects }, i) => (
                  <motion.div
                    key={id}
                    custom={i}
                    variants={skillCardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className={`relative flex items-center gap-3 pb-3 rounded-xl cursor-pointer transition-all duration-300 ${
                      isDark
                        ? "hover:bg-cyan-400/10 border border-transparent hover:border-cyan-400/30"
                        : "hover:bg-blue-50 border border-transparent hover:border-blue-300"
                    }`}
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <img
                        className="w-10 h-10 object-contain"
                        src={icon}
                        alt={`${skill} Icon`}
                      />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h2 className={`text-sm font-bold truncate ${
                        isDark ? "text-cyan-300" : "text-blue-700"
                      }`}>
                        {skill}
                      </h2>
                      <p className={`text-xs ${
                        isDark ? "text-gray-400" : "text-slate-500"
                      }`}>
                        {projects} Projects
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="space-y-2">
                {skills_2.map(({ id, skill, icon, projects }, i) => (
                  <motion.div
                    key={id}
                    custom={i + 5}
                    variants={skillCardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className={`relative flex items-center gap-3 pb-3 rounded-xl cursor-pointer transition-all duration-300 ${
                      isDark
                        ? "hover:bg-cyan-400/10 border border-transparent hover:border-cyan-400/30"
                        : "hover:bg-blue-50 border border-transparent hover:border-blue-300"
                    }`}
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <img
                        className="w-10 h-10 object-contain"
                        src={icon}
                        alt={`${skill} Icon`}
                      />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h2 className={`text-sm font-bold truncate ${
                        isDark ? "text-cyan-300" : "text-blue-700"
                      }`}>
                        {skill}
                      </h2>
                      <p className={`text-xs ${
                        isDark ? "text-gray-400" : "text-slate-500"
                      }`}>
                        {projects} Projects
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;