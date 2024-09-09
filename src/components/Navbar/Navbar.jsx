
import { useDispatch } from 'react-redux';
import {logout} from '../../redux/authslice'
import { useSelector } from 'react-redux';
import { useState } from 'react';
const Navbar = () => {
  const userToken =useSelector((state) => state.auth.token); 
    const dispatch = useDispatch();
const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleLogout = () => {
           dispatch(logout());
         };

  
         const toggleDropdown = () => {
          setIsDropdownOpen(!isDropdownOpen);
        };
    return <>
   {userToken ? (
        <nav className=" bg-gray-800 p-4 flex justify-between items-center">
          {/* Left: Logo */}
          <div className="text-white font-bold">
            <a href="/home" className="text-lg">My App</a>
          </div>

          {/* Center: Links */}
          <div className="navbar-center">
            <ul className="flex space-x-4 text-white">
              <li>
                <a href="/home" className="hover:text-gray-300">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300">About Us</a>
              </li>
            </ul>
          </div>

          {/* Right: Avatar Dropdown */}
          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleDropdown}
            >
              <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white">
                <i className="fas fa-user"></i>
              </div>
              <svg
                className="ml-2 w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                <ul className="py-2">
                  <li>
                    <a
                      href="/home"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Details
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>):'' }

    </>
}

export default Navbar
