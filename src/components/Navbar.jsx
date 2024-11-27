import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="container backdrop-blur-lg bg-stone-950/30 fixed top-0 left-0 w-full z-50">
      <div className="flex  justify-between space-x-2">
        <h1 className="p-3 text-2xl text-gray-300 font-serif uppercase font-semibold">
          Wahid Mahroof
        </h1>

        <ul className="md:flex md:space-x-4 hidden">
          <li>Work</li>
          <li>About</li>
          <li>experience</li>
          <li>Testimonials</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div onClick={handleLinkClick} className="flex gap-4 justify-end">
        {menuOpen ? (
          <ImCross className="text-red-500 text-3xl rounded-full p-2 bg-white" />
        ) : (
          <CiMenuFries className="text-white text-3xl font-bold mr-4 md:hidden block mb-32" />
        )}

        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } text-3xl items-center text-gray-400`}
        >
          <li>Work</li>
          <li>About</li>
          <li>experience</li>
          <li>Testimonials</li>
          <li>Contacts</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
