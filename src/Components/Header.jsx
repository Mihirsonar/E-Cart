import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

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
    { name: `Cart (${cartCount})`, path: '/cart' }  // Display cart count here
  ];

  return (
    <div className="flex sticky text-black p-3 justify-between backdrop-blur-md border-neutral-700/80 top-0 z-50">
      <h2 className="text-xl font-bold">Welcome</h2>
  
      {/* Navigation Links for Large Screens */}
      <div className="lg:flex text-xl gap-10 font-bold sm:hidden">
        {navLinks.map((link, index) => (
          <Link 
            key={index} 
            to={link.path}
            className={`${location.pathname === link.path ? 'underline' : ""}`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Login Button for Large Screens */}
      <div className="lg:flex sm:hidden">
        <button className="p-3 bg-orange-300 text-white text-md rounded-lg font-bold">
          Login
        </button>
      </div>

      {/* Hamburger Icon for Mobile View */}
      <div className="lg:hidden md:flex flex-col justify-end">
        <button onClick={toggler}>
          {MobileView ? 'X' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {MobileView && (
        <div className="absolute top-16 left-0 w-full bg-emerald-300 text-black font-semibold gap-2 text-center p-5 flex flex-col space-y-4 lg:hidden">
          {navLinks.map((link, index) => (
            <Link key={index} to={link.path} onClick={toggler}>
              {link.name}
            </Link>
          ))}

          <button className="p-3 bg-orange-400 text-white text-md rounded-lg font-bold">
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
