import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../Hook/useTheme";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const currentTheme = useTheme();
  const isDark = currentTheme === 'sunset';
  const [theme, settheme] = useState(
    localStorage.getItem("Theme") ? localStorage.getItem("Theme") : "acid"
  );
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleToggle = (e) => {
    if (e.target.checked) {
      settheme("sunset");
    } else {
      settheme("acid");
    }
  };

  useEffect(() => {
    localStorage.setItem("Theme", theme);
    const localtheme = localStorage.getItem("Theme");
    document.querySelector("html").setAttribute("data-theme", localtheme);
  }, [theme]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
        style={{
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(10px)',
          background: scrolled
            ? (isDark 
                ? 'linear-gradient(135deg, rgba(0, 31, 63, 0.85) 0%, rgba(0, 61, 122, 0.85) 100%)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(224, 242, 254, 0.85) 100%)')
            : (isDark
                ? 'linear-gradient(135deg, rgba(0, 31, 63, 0.5) 0%, rgba(0, 61, 122, 0.5) 100%)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(224, 242, 254, 0.5) 100%)'),
          borderBottom: `1px solid ${isDark ? 'rgba(0, 191, 255, 0.2)' : 'rgba(0, 191, 255, 0.3)'}`,
          boxShadow: scrolled 
            ? (isDark 
                ? '0 10px 40px rgba(0, 191, 255, 0.15)'
                : '0 10px 40px rgba(0, 191, 255, 0.2)')
            : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10"
          >
            <Link to="home" smooth={true} duration={600} offset={-80}>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex gap-2 cursor-pointer"
              >
                <img
                  className="w-30 h-12 md:w-40 md:h-14 lg:w-40 lg:h-15"
                  src="https://i.ibb.co/C3V57p3Y/a15c5dbe-3075-47b6-9a6f-3647317ba630-removalai-preview.png"
                  alt="Logo"
                />
              </motion.a>
            </Link>
          </motion.div>

          {/* Desktop Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex items-center gap-2"
          >
            {navLinks.map((link, idx) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                onSetActive={() => setActiveSection(link.id)}
              >
                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 overflow-hidden group"
                  style={{
                    color: activeSection === link.id 
                      ? (isDark ? '#001F3F' : '#FFFFFF')
                      : (isDark ? '#B3E5FF' : '#004C99'),
                    backgroundColor: activeSection === link.id
                      ? '#00BFFF'
                      : 'transparent'
                  }}
                >
                  {/* Hover Effect */}
                  <span 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: isDark 
                        ? 'linear-gradient(135deg, rgba(0, 191, 255, 0.15) 0%, rgba(51, 204, 255, 0.15) 100%)'
                        : 'linear-gradient(135deg, rgba(0, 191, 255, 0.2) 0%, rgba(51, 204, 255, 0.2) 100%)'
                    }}
                  />
                  
                  {/* Active Indicator */}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: '#00BFFF',
                        boxShadow: '0 4px 15px rgba(0, 191, 255, 0.4)'
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  <span className="relative z-10">{link.label}</span>
                </motion.button>
              </Link>
            ))}
          </motion.div>

          {/* Right Side: Theme Toggle + Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {/* Theme Toggle */}
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme === 'sunset'}
              />

              {/* moon icon */}
              <svg
                className="swap-off h-10 w-10 fill-current"
                style={{ color: isDark ? '#00BFFF' : '#004C99' }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>

              {/* sun icon */}
              <svg
                className="swap-on h-10 w-10 fill-current"
                style={{ color: isDark ? '#00BFFF' : '#004C99' }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            </label>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: isDark ? 'rgba(0, 191, 255, 0.1)' : 'rgba(0, 191, 255, 0.15)',
                border: `2px solid ${isDark ? 'rgba(0, 191, 255, 0.3)' : 'rgba(0, 191, 255, 0.4)'}`,
                color: '#00BFFF'
              }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiX size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiMenuAlt3 size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 lg:hidden"
              style={{
                background: isDark 
                  ? 'rgba(0, 0, 0, 0.7)'
                  : 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(10px)'
              }}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 z-50 lg:hidden overflow-y-auto"
              style={{
                background: isDark 
                  ? 'linear-gradient(135deg, rgba(0, 31, 63, 0.95) 0%, rgba(0, 61, 122, 0.95) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(224, 242, 254, 0.95) 100%)',
                backdropFilter: 'blur(20px)',
                borderLeft: `2px solid ${isDark ? 'rgba(0, 191, 255, 0.3)' : 'rgba(0, 191, 255, 0.4)'}`,
                boxShadow: isDark 
                  ? '-10px 0 40px rgba(0, 191, 255, 0.2)'
                  : '-10px 0 40px rgba(0, 191, 255, 0.3)'
              }}
            >
              {/* Mobile Menu Header */}
              <div 
                className="p-6 border-b"
                style={{
                  borderColor: isDark ? 'rgba(0, 191, 255, 0.2)' : 'rgba(0, 191, 255, 0.3)'
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 
                      className="text-2xl font-black"
                      style={{ color: isDark ? '#FFFFFF' : '#001F3F' }}
                    >
                      Navigation
                    </h2>
                    <p 
                      className="text-sm font-medium mt-1"
                      style={{ color: isDark ? '#33CCFF' : '#0096CC' }}
                    >
                      Explore my portfolio
                    </p>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: isDark ? 'rgba(0, 191, 255, 0.1)' : 'rgba(0, 191, 255, 0.15)',
                      color: '#00BFFF'
                    }}
                  >
                    <HiX size={20} />
                  </motion.button>
                </div>
              </div>

              {/* Mobile Menu Links */}
              <div className="p-6 space-y-2">
                {navLinks.map((link, idx) => (
                  <Link
                    key={link.id}
                    to={link.id}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <motion.button
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      whileHover={{ x: 8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-4 rounded-xl font-bold text-left flex items-center justify-between group transition-all duration-300"
                      style={{
                        backgroundColor: activeSection === link.id
                          ? '#00BFFF'
                          : (isDark ? 'rgba(0, 191, 255, 0.05)' : 'rgba(0, 191, 255, 0.08)'),
                        border: `2px solid ${
                          activeSection === link.id
                            ? '#00BFFF'
                            : (isDark ? 'rgba(0, 191, 255, 0.15)' : 'rgba(0, 191, 255, 0.2)')
                        }`,
                        color: activeSection === link.id
                          ? (isDark ? '#001F3F' : '#FFFFFF')
                          : (isDark ? '#B3E5FF' : '#004C99')
                      }}
                    >
                      <span className="text-lg">{link.label}</span>
                      <svg 
                        className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </motion.button>
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Footer */}
              <div 
                className="p-6 mt-auto border-t"
                style={{
                  borderColor: isDark ? 'rgba(0, 191, 255, 0.2)' : 'rgba(0, 191, 255, 0.3)'
                }}
              >
                <p 
                  className="text-xs text-center font-medium"
                  style={{ color: isDark ? '#80D4FF' : '#00598C' }}
                >
                  © 2024 Saybal Roy. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;