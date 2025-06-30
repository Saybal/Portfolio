import { Link } from "react-scroll";


const Navbar = () => {
  const link = (
    <>
      <li className="font-semibold mx-3 text-base-content text-lg cursor-pointer">
        <Link to="home" smooth={true} duration={600} offset={-80}>Home</Link>
      </li>
      <li className="font-semibold mx-3 text-base-content text-lg cursor-pointer">
        <Link to="about" smooth={true} duration={600} offset={-80}>About Me</Link>
      </li>
      <li className="font-semibold mx-3 text-base-content text-lg cursor-pointer">
        <Link to="education" smooth={true} duration={600} offset={-80}>Education</Link>
      </li>
      <li className="font-semibold mx-3 text-base-content text-lg cursor-pointer">
        <Link to="projects" smooth={true} duration={600} offset={-80}>Projects</Link>
      </li>
      <li className="block font-semibold mx-3 text-base-content text-lg cursor-pointer">
        <Link to="contact" smooth={true} duration={1000} offset={-80}>Contact Me</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="flex gap-2 btn btn-ghost text-xl">
          <img
            className="w-30 h-12 md:w-40 md:h-14 lg:w-40 lg:h-15"
            src="https://i.ibb.co/C3V57p3Y/a15c5dbe-3075-47b6-9a6f-3647317ba630-removalai-preview.png"
            alt=""
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end flex gap-2"></div>
    </div>
  );
};

export default Navbar;
