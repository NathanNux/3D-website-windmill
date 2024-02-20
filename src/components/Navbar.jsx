import { NavLink } from "react-router-dom";

import { logo2 } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo2} alt='logo' className='w-12 h-12 object-contain rounded-full shadow-inner hover:animation-spin' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          O Nás
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projekty
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
