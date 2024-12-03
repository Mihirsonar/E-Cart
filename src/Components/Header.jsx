import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { LiaCartPlusSolid } from "react-icons/lia";
import { IoPersonCircleOutline } from "react-icons/io5";
import { PiShoppingCartThin } from "react-icons/pi";
import { BsShop } from "react-icons/bs";
import SearchBar from './Search';

function Header() {
  const [MobileView, setMobileView] = useState(false);
  const location = useLocation();

  const toggler = () => {
    setMobileView(!MobileView);
  };

  // Get the cart items from the Redux store and calculate the count
  const cartItems = useSelector((state) => state.Cart.cartItems || []);
  const cartCount = cartItems.length;

  // Array of navigation links
  const navLinks = [
    // { name: 'Home', path: '/' },
    { name: 'Cart', path: '/cart' },
  ];

  return (
    <div className="flex sticky top-0 z-50 bg-white p-3 px-14 mx-auto">
      {/* Left Section */}
      <div className="flex items-center gap-4 w-full">
        <Link to="/" className="flex items-center text-2xl font-bold">
          Local <LiaCartPlusSolid className="ml-1 w-6 h-6" />
        </Link>
        <SearchBar />
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex items-center gap-12">
        {/* Login Button */}
        <Link to="/login">
          <button
            type="button"
            className="flex items-center text-blue-700 hover:text-white border hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 dark:border-white dark:text-black dark:hover:text-white dark:hover:bg-purple-600 dark:focus:ring-blue-800"
          >
            <IoPersonCircleOutline className="w-6 h-6 mr-2" />
            Login
          </button>
        </Link>

        {/* Cart Links */}
        <div className="flex items-center gap-1 relative">
          <PiShoppingCartThin className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-3 -left-2 bg-red-500 text-white text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`font-semibold`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Become Seller Button */}
        <div className="flex items-center cursor-pointer text-sm font-semibold py-2 w-32">
          <BsShop className="w-6 h-6 mr-2" />
          Become Seller
        </div>
      </div>

      {/* Hamburger Icon for Mobile View */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggler} className="text-2xl font-bold">
          {MobileView ? 'X' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-full bg-black/80 text-white flex flex-col gap-4 p-5 text-lg transform transition-transform duration-300 ease-in-out ${
          MobileView ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            onClick={toggler}
            className="hover:text-purple-500"
          >
            {link.name}
          </Link>
        ))}
        <Link to="/login" onClick={toggler}>
          <button className="bg-gradient-to-br from-purple-600 to-blue-500 text-white font-bold rounded-lg text-lg px-5 py-2 hover:bg-gradient-to-bl">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
