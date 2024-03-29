import { useState } from "react";
// import Link from "react-router-dom";
import { Link } from "react-router-dom";
import icons1 from "../../assets/Logo/logo1.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "./Navbar.scss";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Gallery", link: "/projects/gallery" },
    { id: 4, text: "About", link: "about" },
    { id: 5, text: "Contact", link: "contact" },
    { id: 3, text: "Services", link: "services" },
  ];

  return (
    <div
      className={`bg-black flex justify-between items-center h-24 max-w-[1600px] mx-auto px-4 text-white z-10 nav`}
    >
      {/* Logo */}
      <Link to="/">
        <img className="w-[200px] h-[200px]" src={icons1} />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4  rounded-lg m-2 cursor-pointer duration-300 hover:scale-110"
          >
            <Link to={`${item.link}`}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-black m-4 ">
          <img className="w-[200px] h-[200px]" src={icons1} />
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl  duration-300  cursor-pointer border-none hover:scale-105 "
          >
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
