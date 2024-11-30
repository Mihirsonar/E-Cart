import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { LiaCartPlusSolid } from "react-icons/lia";
import SearchBar from './Search';

function Header() {
  const [MobileView, setMobileView] = useState(false);
  const location = useLocation();

  const toggler = () => {
    setMobileView(!MobileView);
  };

  // Get the cart items from the Redux store and calculate the count
  const cartItems = useSelector(state => state.Cart.cartItems || []);
  const cartCount = cartItems.length;

  // Array of navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: `Cart ${cartCount > 0 ? ` (${cartCount})` : ''}`, path: '/cart' } // Display cart count here
  ];

  return (
    <div className="flex sticky text-black p-2 justify-between bg-white top-0 z-50">
      <h2 className="text-2xl font-bold p-2 flex">Local<LiaCartPlusSolid className="mt-1 font-bold" />
      </h2>
      <SearchBar />

      {/* Navigation Links for Large Screens */}
      <div className="lg:flex text-xl p-2 gap-10 font-bold sm:hidden">
        {navLinks.map((link, index) => (
          <Link 
            key={index} 
            to={link.path}
            className={`${location.pathname === link.path ? 'underline' : ''}`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Login Button for Large Screens */}
      <div className="lg:flex sm:hidden">
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black rounded-md group-hover:bg-opacity-0">
Login</span>
</button>
      </div>

      {/* Hamburger Icon for Mobile View */}
      <div className="lg:hidden md:flex p-2 flex-col justify-end font-extrabold text-2xl">
        <button onClick={toggler}>
          {MobileView ? 'X' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 h-full w-full backdrop-blur-2xl bg-black/80 text-white text-2xl font-semibold gap-3 text-center p-5 flex flex-col space-y-4 lg:hidden transform transition-transform duration-300 ease-in-out ${
          MobileView ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {navLinks.map((link, index) => (
          <Link key={index} to={link.path} onClick={toggler}>
            {link.name}
          </Link>
        ))}

        <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-lg px-5 py-3 text-center me-2 mb-2">
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
