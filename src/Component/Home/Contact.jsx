import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneSquareAlt } from "react-icons/fa";
import {
  MdEmail,
  MdEventAvailable,
  MdTouchApp,
  MdWavingHand,
  MdSend,
} from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaSquareGithub, FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { useTheme } from "../../Hook/useTheme";

const Contact = () => {
  const currentTheme = useTheme();
  const isDark = currentTheme === 'sunset';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_i5dbacf",
        "template_75cfbrs",
        e.target,
        "pEZMbRC7IYbn9wEcl"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully!",
            text: "Thank you for reaching out. I'll get back to you soon.",
            confirmButtonColor: "#00BFFF",
            showConfirmButton: true,
          });
          console.log(result);
          e.target.reset();
          setIsSubmitting(false);
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Please try again.",
            confirmButtonColor: "#00BFFF",
          });
          console.error(error);
          setIsSubmitting(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: MdEmail,
      label: "Email",
      value: "roysaybal@gmail.com",
      link: "mailto:roysaybal@gmail.com"
    },
    {
      icon: FaPhoneSquareAlt,
      label: "Phone",
      value: "+8801706673432",
      link: "tel:+8801706673432"
    },
    {
      icon: IoLocation,
      label: "Location",
      value: "Sylhet, Bangladesh",
      link: null
    },
    {
      icon: MdEventAvailable,
      label: "Availability",
      value: "Freelance | Remote",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/saybal-roy/",
      color: "#0A66C2",
      label: "LinkedIn"
    },
    {
      icon: FaSquareGithub,
      url: "https://github.com/Saybal",
      color: isDark ? "#FFFFFF" : "#181717",
      label: "GitHub"
    },
    {
      icon: FaSquareFacebook,
      url: "https://www.facebook.com/saybal.roy",
      color: "#1877F2",
      label: "Facebook"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-24 px-6 overflow-hidden"
      
    >
      {/* Animated Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: isDark ? [0.1, 0.2, 0.1] : [0.15, 0.25, 0.15],
          x: [0, 100, 0],
          y: [0, -80, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: isDark 
            ? 'radial-gradient(circle, rgba(0, 191, 255, 0.15) 0%, rgba(0, 150, 200, 0.05) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(0, 191, 255, 0.2) 0%, rgba(77, 210, 255, 0.1) 50%, transparent 100%)'
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: isDark ? [0.08, 0.15, 0.08] : [0.12, 0.2, 0.12],
          x: [0, -120, 0],
          y: [0, 70, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute bottom-20 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: isDark 
            ? 'radial-gradient(circle, rgba(0, 153, 204, 0.12) 0%, rgba(0, 100, 150, 0.04) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(51, 204, 255, 0.18) 0%, rgba(102, 221, 255, 0.08) 50%, transparent 100%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
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
              Let's Connect
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
            Get in
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
                Touch
              </span>
            </motion.span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-lg max-w-3xl mx-auto leading-relaxed flex items-center justify-center gap-2"
            style={{ color: isDark ? '#99E6FF' : '#004C99' }}
          >
            Feel free to reach out for collaborations or just say hello
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            >
              <MdWavingHand className="text-2xl" style={{ color: '#00BFFF' }} />
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Main Contact Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Left Side - Contact Info */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-3xl overflow-hidden group"
            style={{
              background: isDark 
                ? 'linear-gradient(135deg, rgba(0, 31, 63, 0.8) 0%, rgba(0, 61, 122, 0.8) 100%)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(224, 242, 254, 0.95) 100%)',
              backdropFilter: 'blur(20px)',
              border: `2px solid ${isDark ? 'rgba(0, 191, 255, 0.2)' : 'rgba(0, 191, 255, 0.3)'}`,
              boxShadow: isDark 
                ? '0 20px 50px -12px rgba(0, 191, 255, 0.25)'
                : '0 20px 50px -12px rgba(0, 191, 255, 0.35)'
            }}
          >
            {/* Background Pattern */}
            <div
              className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-5"
              style={{
                backgroundImage: isDark 
                  ? "url('https://i.ibb.co/PsmWdjXW/image.png')"
                  : "url('https://i.ibb.co/5XX3c1C6/image.png')"
              }}
            />

            <div className="relative p-10">
              {/* Title with Icon */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 mb-8"
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
                  style={{
                    background: isDark 
                      ? 'linear-gradient(135deg, #00BFFF 0%, #0096CC 100%)'
                      : 'linear-gradient(135deg, #33CCFF 0%, #00BFFF 100%)',
                    color: isDark ? '#001F3F' : '#FFFFFF'
                  }}
                >
                  <MdTouchApp />
                </div>
                <h3 
                  className="text-3xl font-black"
                  style={{ color: isDark ? '#FFFFFF' : '#001F3F' }}
                >
                  Contact Information
                </h3>
              </motion.div>

              {/* Contact Details */}
              <div className="space-y-6 mb-10">
                {contactInfo.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="group/item"
                  >
                    {item.link ? (
                      <a 
                        href={item.link}
                        className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300"
                        style={{
                          backgroundColor: isDark ? 'rgba(0, 191, 255, 0.05)' : 'rgba(0, 191, 255, 0.08)'
                        }}
                      >
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-xl transition-all duration-300 group-hover/item:scale-110"
                          style={{
                            backgroundColor: isDark ? 'rgba(0, 191, 255, 0.2)' : 'rgba(0, 191, 255, 0.25)',
                            color: '#00BFFF'
                          }}
                        >
                          <item.icon />
                        </div>
                        <div className="flex-1">
                          <p 
                            className="text-sm font-bold uppercase tracking-wider mb-1"
                            style={{ color: isDark ? '#33CCFF' : '#0096CC' }}
                          >
                            {item.label}
                          </p>
                          <p 
                            className="text-base font-medium"
                            style={{ color: isDark ? '#B3E5FF' : '#004C99' }}
                          >
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div 
                        className="flex items-start gap-4 p-4 rounded-xl"
                        style={{
                          backgroundColor: isDark ? 'rgba(0, 191, 255, 0.05)' : 'rgba(0, 191, 255, 0.08)'
                        }}
                      >
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-xl"
                          style={{
                            backgroundColor: isDark ? 'rgba(0, 191, 255, 0.2)' : 'rgba(0, 191, 255, 0.25)',
                            color: '#00BFFF'
                          }}
                        >
                          <item.icon />
                        </div>
                        <div className="flex-1">
                          <p 
                            className="text-sm font-bold uppercase tracking-wider mb-1"
                            style={{ color: isDark ? '#33CCFF' : '#0096CC' }}
                          >
                            {item.label}
                          </p>
                          <p 
                            className="text-base font-medium"
                            style={{ color: isDark ? '#B3E5FF' : '#004C99' }}
                          >
                            {item.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <h4 
                  className="text-xl font-black mb-6 text-center"
                  style={{ color: isDark ? '#FFFFFF' : '#001F3F' }}
                >
                  Connect With Me
                </h4>
                <div className="flex justify-center items-center gap-4">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 + idx * 0.1, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.15, y: -5 }}
                      className="relative group/social"
                    >
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl transition-all duration-300 shadow-lg"
                        style={{
                          backgroundColor: isDark ? 'rgba(0, 191, 255, 0.1)' : 'rgba(0, 191, 255, 0.15)',
                          border: `2px solid ${isDark ? 'rgba(0, 191, 255, 0.3)' : 'rgba(0, 191, 255, 0.4)'}`
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = social.color;
                          e.currentTarget.querySelector('svg').style.color = '#FFFFFF';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = isDark ? 'rgba(0, 191, 255, 0.1)' : 'rgba(0, 191, 255, 0.15)';
                          e.currentTarget.querySelector('svg').style.color = social.color;
                        }}
                      >
                        <social.icon style={{ color: social.color, transition: 'color 0.3s' }} />
                      </div>
                      {/* Tooltip */}
                      <div 
                        className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-semibold opacity-0 group-hover/social:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
                        style={{
                          backgroundColor: isDark ? 'rgba(0, 191, 255, 0.9)' : 'rgba(0, 191, 255, 0.95)',
                          color: isDark ? '#001F3F' : '#FFFFFF'
                        }}
                      >
                        {social.label}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: isDark 
                ? 'linear-gradient(135deg, rgba(0, 61, 122, 0.8) 0%, rgba(0, 31, 63, 0.8) 100%)'
                : 'linear-gradient(135deg, rgba(224, 242, 254, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%)',
              backdropFilter: 'blur(20px)',
              border: `2px solid ${isDark ? 'rgba(0, 191, 255, 0.2)' : 'rgba(0, 191, 255, 0.3)'}`,
              boxShadow: isDark 
                ? '0 20px 50px -12px rgba(0, 191, 255, 0.25)'
                : '0 20px 50px -12px rgba(0, 191, 255, 0.35)'
            }}
          >
            {/* Background Pattern */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
              style={{
                backgroundImage: "url('https://i.ibb.co/PsmWdjXW/image.png')"
              }}
            />

            <div className="relative p-10">
              {/* Form Title */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h3 
                  className="text-3xl font-black mb-2"
                  style={{ color: isDark ? '#FFFFFF' : '#001F3F' }}
                >
                  Send a Message
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: isDark ? '#99E6FF' : '#004C99' }}
                >
                  I'll respond within 24 hours
                </p>
              </motion.div>

              {/* Form */}
              <form onSubmit={sendEmail} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label 
                    className="block mb-2 text-sm font-bold uppercase tracking-wider"
                    style={{ color: isDark ? '#33CCFF' : '#0096CC' }}
                  >
                    Your Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-5 py-4 rounded-xl outline-none transition-all duration-300 font-medium"
                    style={{
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
                      border: `2px solid ${focusedField === 'name' ? '#00BFFF' : (isDark ? 'rgba(0, 191, 255, 0.2)' : 'rgba(0, 191, 255, 0.3)')}`,
                      color: isDark ? '#FFFFFF' : '#001F3F'
                    }}
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <label 
                    className="block mb-2 text-sm font-bold uppercase tracking-wider"
                    style={{ color: isDark ? '#33CCFF' : '#0096CC' }}
                  >
                    Your Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-5 py-4 rounded-xl outline-none transition-all duration-300 font-medium"
                    style={{
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
                      border: `2px solid ${focusedField === 'email' ? '#00BFFF' : (isDark ? 'rgba(0, 191, 255, 0.2)' : 'rgba(0, 191, 255, 0.3)')}`,
                      color: isDark ? '#FFFFFF' : '#001F3F'
                    }}
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <label 
                    className="block mb-2 text-sm font-bold uppercase tracking-wider"
                    style={{ color: isDark ? '#33CCFF' : '#0096CC' }}
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell me about your project..."
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-5 py-4 rounded-xl outline-none transition-all duration-300 resize-none font-medium"
                    style={{
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
                      border: `2px solid ${focusedField === 'message' ? '#00BFFF' : (isDark ? 'rgba(0, 191, 255, 0.2)' : 'rgba(0, 191, 255, 0.3)')}`,
                      color: isDark ? '#FFFFFF' : '#001F3F'
                    }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg group/btn"
                    style={{
                      backgroundColor: '#00BFFF',
                      color: isDark ? '#001F3F' : '#FFFFFF',
                      boxShadow: '0 10px 30px rgba(0, 191, 255, 0.3)',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-6 h-6 border-3 border-t-transparent rounded-full"
                          style={{
                            borderColor: isDark ? '#001F3F' : '#FFFFFF',
                            borderTopColor: 'transparent'
                          }}
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <MdSend className="text-2xl group-hover/btn:translate-x-1 transition-transform" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;