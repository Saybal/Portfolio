import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { MdLiveTv } from "react-icons/md";
import { useTheme } from '../../../Hook/useTheme';

const Project_Card = ({ project, index }) => {
  const currentTheme = useTheme();
  const isDark = currentTheme === 'sunset';
  const [isHovered, setIsHovered] = useState(false);

  // Alternate layout: even index = image left, odd index = image right
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="my-8 lg:my-12"
    >
      {/* Project Card Container */}
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className={`body-font flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} rounded-2xl overflow-hidden group relative`}
        style={{
          background: isDark 
            ? 'linear-gradient(135deg, rgba(0, 31, 63, 0.8) 0%, rgba(0, 61, 122, 0.8) 100%)'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(224, 242, 254, 0.95) 100%)',
          backdropFilter: 'blur(20px)',
          border: `2px solid ${isDark ? 'rgba(0, 191, 255, 0.2)' : 'rgba(0, 191, 255, 0.3)'}`,
          boxShadow: isDark 
            ? '0 20px 50px -12px rgba(0, 191, 255, 0.25), 0 0 60px rgba(0, 191, 255, 0.1)'
            : '0 20px 50px -12px rgba(0, 191, 255, 0.35), 0 0 80px rgba(0, 191, 255, 0.15)'
        }}
      >
        {/* Animated Border Gradient */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, rgba(0, 191, 255, 0.15) 0%, rgba(51, 204, 255, 0.15) 100%)`,
          }}
        />

        {/* Left/Right: Image Section */}
        <div className="lg:w-1/2 w-full h-64 lg:h-auto relative overflow-hidden">
          {/* Image with Zoom Effect */}
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          {/* Overlay Gradient */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 191, 255, 0.2) 0%, rgba(0, 153, 204, 0.1) 100%)'
            }}
          />

          {/* Project Number Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="absolute top-6 left-6 w-14 h-14 rounded-full flex items-center justify-center font-black text-xl shadow-xl"
            style={{
              background: isDark 
                ? 'linear-gradient(135deg, #00BFFF 0%, #0096CC 100%)'
                : 'linear-gradient(135deg, #33CCFF 0%, #00BFFF 100%)',
              color: isDark ? '#001F3F' : '#FFFFFF'
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </motion.div>
        </div>

        {/* Right/Left: Content Section */}
        <div className="flex flex-col justify-between p-8 lg:p-10 lg:w-1/2 w-full relative z-10">
          {/* Top Section */}
          <div>
            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span 
                className="px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
                style={{
                  backgroundColor: isDark ? 'rgba(0, 191, 255, 0.2)' : 'rgba(0, 191, 255, 0.25)',
                  color: isDark ? '#33CCFF' : '#0073B3',
                  border: `1px solid ${isDark ? 'rgba(0, 191, 255, 0.4)' : 'rgba(0, 191, 255, 0.5)'}`
                }}
              >
                {project.category || 'Web Application'}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl lg:text-4xl font-black mb-4 leading-tight"
              style={{ 
                color: isDark ? '#FFFFFF' : '#001F3F',
              }}
            >
              {project.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-base leading-relaxed mb-6"
              style={{ 
                color: isDark ? '#B3E5FF' : '#004C99'
              }}
            >
              {project.description}
            </motion.p>

            {/* Key Features (if available) */}
            {project.features && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mb-6"
              >
                <h4 
                  className="text-sm font-bold uppercase tracking-wider mb-3"
                  style={{ color: isDark ? '#00BFFF' : '#0096CC' }}
                >
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <li 
                      key={idx}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: isDark ? '#99E6FF' : '#00598C' }}
                    >
                      <span 
                        className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: '#00BFFF' }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mb-6"
            >
              <h4 
                className="text-sm font-bold uppercase tracking-wider mb-3"
                style={{ color: isDark ? '#00BFFF' : '#0096CC' }}
              >
                Tech Stack
              </h4>
              <div className="flex gap-3 flex-wrap">
                {project.techStack?.map((Icon, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + idx * 0.05, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.15, y: -4 }}
                    className="relative group/tech"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg"
                      style={{
                        backgroundColor: isDark ? 'rgba(0, 191, 255, 0.1)' : 'rgba(0, 191, 255, 0.15)',
                        border: `2px solid ${isDark ? 'rgba(0, 191, 255, 0.3)' : 'rgba(0, 191, 255, 0.4)'}`
                      }}
                    >
                      <img className="w-7 h-7 object-contain" src={Icon} alt="Tech" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section: Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 mt-6"
          >
            {/* Live Demo Button */}
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg group/btn flex-1 justify-center"
              style={{
                backgroundColor: '#00BFFF',
                color: isDark ? '#001F3F' : '#FFFFFF',
                boxShadow: '0 10px 30px rgba(0, 191, 255, 0.3)'
              }}
            >
              <MdLiveTv className="text-xl group-hover/btn:scale-110 transition-transform" />
              <span>Live Demo</span>
              <FaExternalLinkAlt className="text-sm opacity-70" />
            </motion.a>

            {/* GitHub Button */}
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 border-2 group/btn flex-1 justify-center"
              style={{
                borderColor: isDark ? 'rgba(0, 191, 255, 0.5)' : 'rgba(0, 191, 255, 0.6)',
                color: '#00BFFF',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isDark ? 'rgba(0, 191, 255, 0.15)' : 'rgba(0, 191, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <FaGithub className="text-xl group-hover/btn:scale-110 transition-transform" />
              <span>Source Code</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Corner Decoration */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #00BFFF 0%, #33CCFF 50%, transparent 100%)'
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Project_Card;