import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useTheme } from "../../Hook/useTheme";

const Banner = () => {
  const currentTheme = useTheme();
  const isDark = currentTheme === 'sunset';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div 
      id="home" 
      className="relative max-w-8xl min-h-[80vh] overflow-hidden"
      style={{
        color: isDark ? '#FFFFFF' : '#001F3F',
        animation: isDark ? "aurora 8s linear infinite" : "none",
      }}
    >

      {/* Foreground Layout */}
      <div className="relative mt-[7rem] w-full h-full px-4 sm:px-8 md:px-12 lg:px-0 py-10 lg:py-0 flex flex-col-reverse lg:flex-row items-center">

        {/* Left Text Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10 flex-1 space-y-6 text-center lg:text-left mt-6 lg:mt-0 px-4 sm:px-8 md:px-12 lg:px-16 py-10"
        >
          <motion.h3
            variants={textVariants}
            className="body-font text-2xl md:text-3xl font-medium"
            style={{ color: isDark ? '#FFFFFF' : '#004C99' }}
          >
            Hello I'm Saybal!
          </motion.h3>
          
          <motion.h1
            variants={textVariants}
            className="body-font text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ color: isDark ? '#FFFFFF' : '#001F3F' }}
          >
            A Web <span 
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #00BFFF, #33CCFF, #00BFFF, #33CCFF)',
                      backgroundSize: '200% 100%'
                    }}
                  >
                    Developer
                  </span>
          </motion.h1>
          
          <motion.p
            variants={textVariants}
            className="body-font max-w-xl mx-auto lg:mx-0 text-sm md:text-base"
            style={{ color: isDark ? '#B3E5FF' : '#004C99' }}
          >
            Thrives in challenging environments, maintains a positive outlook,
            and approaches every problem with a determined, solution-oriented
            attitude.
          </motion.p>
          
          <motion.div
            variants={textVariants}
            className="body-font flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          >
            <Link to="contact" smooth={true} duration={300} offset={-80}>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className="font-semibold px-6 py-3 rounded-md transition-all"
                style={{
                  backgroundColor: '#00BFFF',
                  color: isDark ? '#000000' : '#001F3F',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#33CCFF'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#00BFFF'}
              >
                Hire Me
              </motion.button>
            </Link>
            
            <a href="SaybalRoyResume.pdf" download="SaybalRoyResume.pdf">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-md transition-all border-2"
                style={{
                  borderColor: '#00BFFF',
                  color: '#00BFFF',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#00BFFF';
                  e.target.style.color = isDark ? '#000000' : '#001F3F';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#00BFFF';
                }}
              >
                Download CV
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.02 }}
          className="z-10 flex-1 w-full h-full min-h-[50vh] lg:h-[80vh] bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl"
          style={{
            backgroundImage: "url('https://i.ibb.co/1GCKmDf0/20250608-183249-min.jpg')",
            boxShadow: isDark 
              ? '0 25px 50px -12px rgba(0, 191, 255, 0.3)'
              : '0 25px 50px -12px rgba(0, 191, 255, 0.4)'
          }}
        />
      </div>
    </div>
  );
};

export default Banner;