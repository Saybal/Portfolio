import { Link } from "react-scroll";

const Banner = () => {

  return (
    <div id="home" className="relative min-h-[80vh] mx-2 md:mx-5 lg:mx-10 mt-10 rounded-2xl bg-[#003153] text-white overflow-hidden">
      
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-12"
        style={{
          backgroundImage: "url('https://i.ibb.co/PsmWdjXW/image.png')",
        }}
      ></div>

      {/* Foreground Layout */}
      <div className="relative w-full h-full px-4 sm:px-8 md:px-12 lg:px-0 py-10 lg:py-0 flex flex-col-reverse lg:flex-row items-center">

        {/* Left Text Section */}
        <div className="z-10 flex-1 space-y-6 text-center lg:text-left mt-6 lg:mt-0 px-4 sm:px-8 md:px-12 lg:px-16 py-10">
          <h3 className="head-font text-2xl md:text-3xl font-medium">Hello I’m Saybal!</h3>
          <h1 className="head-font text-4xl md:text-5xl lg:text-6xl font-bold">
            A Web <span className="text-[#00BFFF]">Developer</span>
          </h1>
          <p className="body-font max-w-xl mx-auto lg:mx-0 text-gray-200 text-sm md:text-base">
            Thrives in challenging environments, maintains a positive outlook,
            and approaches every problem with a determined, solution-oriented
            attitude.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link to="contact" smooth={true} duration={300} offset={-80}>
              <button className="bg-[#00BFFF] text-black font-semibold px-6 py-3 rounded-md hover:bg-[#0077ff] transition-all"> Hire Me
            </button>
            </Link>
            
            <a href="SaybalRoyResume.pdf"
            download="SaybalRoyResume.pdf">
              <button className="border border-[#00BFFF] text-[#00BFFF] px-6 py-3 rounded-md hover:bg-[#00BFFF] hover:text-black transition-all">
              Download CV
            </button>
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div
          className="z-10 flex-1 w-full h-full min-h-[50vh] lg:h-[80vh] rounded-2xl lg:rounded-r-2xl lg:rounded-l-none bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://i.ibb.co/1GCKmDf0/20250608-183249-min.jpg')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Banner;
