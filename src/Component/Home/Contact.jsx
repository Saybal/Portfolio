import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import {
  MdEmail,
  MdEventAvailable,
  MdTouchApp,
  MdWavingHand,
} from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i5dbacf", // Your Service ID
        "template_75cfbrs", // Replace with your actual Template ID
        e.target,
        "pEZMbRC7IYbn9wEcl" // Your EmailJS Public Key (from account settings)
      )
      .then(
        (result) => {
          Swal.fire({
            // position: "top-end",
            icon: "success",
            title: "Your email has been send successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(result);
          e.target.reset(); // Clear the form
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            // footer: '<a href="#">Why do I have this issue?</a>',
          });
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="px-4 md:px-12 lg:px-24 py-16 bg-[#f1f5f9] text-[#0D2E29]"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Contact Me
      </h2>

      <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left Side - Contact Info */}
        <div className="relative flex-1">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-9"
            style={{
              backgroundImage: "url('https://i.ibb.co/5XX3c1C6/image.png')",
            }}
          ></div>
          <div className="relative p-8 bg-none">
            <h3 className="flex gap-1 items-center justify-center text-4xl font-bold mb-4 text-[#003153]">
              Get in Touch <MdTouchApp />{" "}
            </h3>
            <p className="text-gray-600 mb-6 flex items-center gap-1 text-base md:text-lg lg:text-xl">
              Feel free to reach out for collaborations or just say hello{" "}
              <MdWavingHand className="text-2xl" />
            </p>
            <div className="space-y-4 ttext-base md:text-lg lg:text-xl">
              <p>
                <strong className="flex gap-1 items-center">
                  <MdEmail className="text-2xl" /> Email:
                </strong>{" "}
                roysaybal@gmail.com
              </p>
              <p>
                <strong className="flex gap-1 items-center">
                  <FaPhoneSquareAlt className="text-2xl" />
                  Phone:
                </strong>{" "}
                +8801706673432
              </p>
              <p>
                <strong className="flex items-center">
                  <IoLocation className="text-2xl" />
                  Location:
                </strong>{" "}
                Sylhet, Bangladesh
              </p>
              <p>
                <strong className="flex gap-1 items-center">
                  <MdEventAvailable className="text-2xl" />
                  Availability:
                </strong>{" "}
                Freelance | Remote{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className=" relative flex-1 p-8 bg-[#003153] text-white">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
            style={{
              backgroundImage: "url('https://i.ibb.co/PsmWdjXW/image.png')",
            }}
          ></div>
          <div className="relative">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="block mb-1 text-sm">Your Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-md bg-white text-black outline-none focus:ring-2 focus:ring-[#00BFFF]"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Your Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-md bg-white text-black outline-none focus:ring-2 focus:ring-[#00BFFF]"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Type your message"
                  className="w-full px-4 py-3 rounded-md bg-white text-black outline-none focus:ring-2 focus:ring-[#00BFFF]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#00BFFF] hover:bg-[#0099ff] text-black px-6 py-3 rounded-md font-semibold transition-all flex items-center gap-1"
              >
                <MdEmail className="text-2xl" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
