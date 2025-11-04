import React from "react";
import { useTheme } from "../../Hook/useTheme";
import { motion } from "framer-motion";

const Education = () => {
  const currentTheme = useTheme();
  const isDark = currentTheme === 'sunset';
  
  const educationData = [
    {
      degree: "B.Sc. in Computer Science",
      institution: "Sylhet Engineering College",
      year: "2023",
      endYear: "Present",
      details: "Studying software development, data structures, algorithms, and computer systems.",
      status: "In Progress",
      progress: 60,
      icon: "💻",
      color: "primary",
      skills: ["Algorithm Design", "Data Structures", "System Design"]
    },
    {
      degree: "HSC – Science",
      institution: "Notre Dame College",
      year: "2021",
      endYear: "2022",
      details: "Completed Higher Secondary with a focus on Physics, Chemistry, and Mathematics.",
      status: "Completed",
      progress: 100,
      icon: "🔬",
      color: "secondary",
      skills: ["Physics", "Chemistry", "Mathematics"]
    },
    {
      degree: "SSC – Science",
      institution: "Saint Martha's High School",
      year: "2018",
      endYear: "2020",
      details: "Achieved GPA 5.0 with strong performance in Science and Mathematics.",
      status: "Completed",
      progress: 100,
      icon: "🏆",
      color: "tertiary",
      skills: ["Science", "Mathematics", "GPA 5.0"]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section 
      id="education" 
      className={`relative min-h-screen w-full py-24 px-6 overflow-hidden ${
        isDark ? 'bg-transparent' : 'bg-transparent'
      }`}
    >
      {/* Ambient Light Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: isDark ? [0.08, 0.15, 0.08] : [0.15, 0.25, 0.15],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: isDark 
            ? 'radial-gradient(circle, rgba(0, 191, 255, 0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(0, 191, 255, 0.15) 0%, transparent 70%)'
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: isDark ? [0.06, 0.12, 0.06] : [0.12, 0.22, 0.12],
          x: [0, -80, 0],
          y: [0, 60, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: isDark 
            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Modern Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
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
              style={{ color: '#00BFFF' }}
            >
              Academic Path
            </span>
            <div className="h-px w-12" style={{ backgroundColor: '#00BFFF' }} />
          </motion.div>

          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black mb-6 ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            My Education
            <motion.span
              className="inline-block ml-4"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            >
              <span 
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #00BFFF, #33CCFF, #00BFFF, #33CCFF)',
                      backgroundSize: '200% 100%'
                    }}
                  >
                    Journey
                  </span>
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}>
            Building a foundation in computer science and problem-solving
          </motion.p>
        </motion.div>

        {/* Horizontal Card Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -12,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="perspective-1000"
            >
              <div 
                className={`relative h-full rounded-3xl overflow-hidden backdrop-blur-xl border-2 transition-all duration-500 group ${
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
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: item.color === "primary" 
                      ? 'linear-gradient(135deg, rgba(0, 191, 255, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)'
                      : item.color === "secondary"
                      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)'
                      : 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)'
                  }}
                />

                {/* Top Accent Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + idx * 0.2 }}
                  className="h-1"
                  style={{
                    background: item.color === "primary" 
                      ? 'linear-gradient(to right, #00BFFF, #3B82F6)'
                      : item.color === "secondary"
                      ? 'linear-gradient(to right, #3B82F6, #6366F1)'
                      : 'linear-gradient(to right, #6366F1, #8B5CF6)'
                  }}
                />

                <div className="relative p-8">
                  {/* Icon & Status Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                      style={{
                        background: item.color === "primary" 
                          ? 'linear-gradient(135deg, #00BFFF 0%, #3B82F6 100%)'
                          : item.color === "secondary"
                          ? 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)'
                          : 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)'
                      }}
                    >
                      {item.icon}
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.3 + idx * 0.2 }}
                      className="px-4 py-2 rounded-full text-xs font-bold border-2"
                      style={{
                        backgroundColor: item.status === "In Progress"
                          ? isDark ? 'rgba(0, 191, 255, 0.15)' : 'rgba(0, 191, 255, 0.1)'
                          : isDark ? 'rgba(16, 185, 129, 0.15)' : 'rgba(16, 185, 129, 0.1)',
                        color: item.status === "In Progress"
                          ? isDark ? '#5DD9FF' : '#0099CC'
                          : isDark ? '#6EE7B7' : '#059669',
                        borderColor: item.status === "In Progress"
                          ? isDark ? 'rgba(0, 191, 255, 0.4)' : 'rgba(0, 191, 255, 0.5)'
                          : isDark ? 'rgba(16, 185, 129, 0.4)' : 'rgba(16, 185, 129, 0.5)'
                      }}
                    >
                      ✓ {item.status}
                    </motion.div>
                  </div>

                  {/* Degree Title */}
                  <h3 className={`text-2xl font-bold mb-3 leading-tight ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}>
                    {item.degree}
                  </h3>

                  {/* Institution */}
                  <p 
                    className="text-base font-semibold mb-4"
                    style={{
                      color: item.color === "primary" 
                        ? (isDark ? '#5DD9FF' : '#0099CC')
                        : item.color === "secondary"
                        ? (isDark ? '#60A5FA' : '#3B82F6')
                        : (isDark ? '#818CF8' : '#6366F1')
                    }}
                  >
                    {item.institution}
                  </p>

                  {/* Year Range */}
                  <div className="flex items-center gap-3 mb-6">
                    <span 
                      className="text-sm font-medium px-3 py-1 rounded-lg"
                      style={{
                        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                        color: isDark ? '#CBD5E1' : '#475569'
                      }}
                    >
                      {item.year}
                    </span>
                    <div 
                      className="flex-1 h-px"
                      style={{ backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }}
                    />
                    <span 
                      className="text-sm font-medium px-3 py-1 rounded-lg"
                      style={{
                        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                        color: isDark ? '#CBD5E1' : '#475569'
                      }}
                    >
                      {item.endYear}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-xs font-semibold ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}>
                        Progress
                      </span>
                      <span 
                        className="text-xs font-bold"
                        style={{ color: '#00BFFF' }}
                      >
                        {item.progress}%
                      </span>
                    </div>
                    <div 
                      className="h-2 rounded-full overflow-hidden"
                      style={{ backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.08)' }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 + idx * 0.2, ease: "easeOut" }}
                        className="h-full"
                        style={{
                          background: item.color === "primary" 
                            ? 'linear-gradient(to right, #00BFFF, #3B82F6)'
                            : item.color === "secondary"
                            ? 'linear-gradient(to right, #3B82F6, #6366F1)'
                            : 'linear-gradient(to right, #6366F1, #8B5CF6)'
                        }}
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <p className={`text-sm leading-relaxed mb-6 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}>
                    {item.details}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + idx * 0.2 + i * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 rounded-lg text-xs font-medium border"
                        style={{
                          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
                          borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                          color: isDark ? '#CBD5E1' : '#475569'
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Corner Decoration */}
                <motion.div
                  animate={{
                    rotate: [0, 180, 360],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-20 blur-2xl"
                  style={{
                    background: item.color === "primary" 
                      ? 'linear-gradient(135deg, #00BFFF, #3B82F6)'
                      : item.color === "secondary"
                      ? 'linear-gradient(135deg, #3B82F6, #6366F1)'
                      : 'linear-gradient(135deg, #6366F1, #8B5CF6)'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;