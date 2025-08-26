import { NavLink } from "react-router-dom";
import Logo from '../assets/images/favicon.png';

const NavBar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-black font-bold hover:text-gray-800 hover:bg-white/10  hover:shadow-sm rounded-md px-3 py-2'
      : 'text-black text-bold hover:text-gray-800 hover:bg-white/10  hover:shadow-sm rounded-md px-3 py-2';

  return (
      <nav className="bg-white shadow-sm">
        <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
          <div className="flex py-2 items-center justify-between w-full">
            
            {/* Left: Logo + Text */}
            <div className="flex items-center">
              <img src={Logo} alt="Water Logo" className="h-10 w-auto" />
              <span className="hidden md:block text-gray-800 text-xl font-bold ml-2">
                reliee/
              </span>
            </div>

            {/* Right: Nav Links */}
            <div className="flex items-center space-x-6">
              <NavLink to="/" className={linkClass}>Home</NavLink>
              <NavLink to="/pets" className={linkClass}>Pets</NavLink>
              <NavLink to="/project" className={linkClass}>Project</NavLink>
              <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            </div>
            
          </div>
        </div>
      </nav>


  );
};

export default NavBar;
