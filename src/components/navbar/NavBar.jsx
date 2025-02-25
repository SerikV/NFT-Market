import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const navItems = [
  {
    id: 0,
    name: "Home",
    link: "/marketplace"
  },
  {
    id: 1,
    name: "Artists",
    link: "/artists"
  },
  {
    id: 2,
    name: "Community",
    link: "/community" 
  },
  {
    id: 3,
    name: "Collections",
    link: "/collections"
  },
];

const NavBar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the navbar
  const toggleNav = (name) => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  // Перший ефект для встановлення scrollPosition
useEffect(() => {
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

// Другий ефект для встановлення isOpen для мобільної версії
useEffect(() => {
  if (window.innerWidth < 768) {
    setIsOpen(false); // for mobile view, start with a closed menu
  }
}, []);

return (
  <div
    className={`w-full px-[92px] fixed top-0 py-5 sm:py-4 z-30 ${
      scrollPosition > 0 ? " bg-sky-700 shadow-md" : "bg-transparent"
    }`}
  >
    <nav className="w-full md:h-14 flex items-center justify-between">
      <div className="left-side nav-items flex items-center justify-between">
        {/* hamburger */}
        <button
          onClick={toggleNav}
          className="cursor-pointer text-2xl hidden md:block"
        >
          <HiMenu color="white" size={45} />
        </button>

          <ul
            className={`flex items-center space-x-11 ${
              !isOpen ? "md:flex" : "md:left-[0%]"
            } md:flex-col md:absolute  md:top-0 md:left-[-100%] md:w-[78%] md:h-screen md:bg-sky-700 `}
          >
          {/* Use a button tag for better accessibility */}
          <button
            onClick={toggleNav}
            className={`text-3xl hidden md:block relative right-0 top-4 container mx-auto`}
          >
            <RxCross2 color="white" size={35} />
          </button>
          {navItems.map((item) => (
            <li
              key={item.id}
              className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center"
            >
               <a
                  onClick={() => toggleNav(item.name)}
                  href={`#${item.name}`}
                  className={`text-3xl text-white text-[16px] cursor-pointer hover:text-yellow-600 md:text-[38px] md:mt-8 ${item.name === activeIndex ? "text-yellow-600" : ""}`}
                  >
                  {item.name}
                </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="right-side ml-auto">
        <a
          href="https://www.upwork.com/freelancers/~011cfa5d36905a298d"
          className=" mr-auto bg-orange-400 text-[1rem] text-white px-8 py-2 rounded-lg font-bold hover:text-yellow-400 md:m-5 md:block md:mx-auto md:w-fit lg:px-3"
        >
          Contact
        </a>
      </div>
    </nav>
  </div>
);

};

export default NavBar;