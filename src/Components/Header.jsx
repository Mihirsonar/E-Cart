import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { LiaCartPlusSolid } from "react-icons/lia";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { PiShoppingCartThin } from "react-icons/pi";
import { BsShop } from "react-icons/bs";




import SearchBar from './Search';

// function Header() {
//   const [MobileView, setMobileView] = useState(false);
//   const location = useLocation();

//   const toggler = () => {
//     setMobileView(!MobileView);
//   };

//   // Get the cart items from the Redux store and calculate the count
//   const cartItems = useSelector(state => state.Cart.cartItems || []);
//   const cartCount = cartItems.length;

//   // Array of navigation links
//   const navLinks = [
//     { name: '', path: '/' },
//     // { name: 'About', path: '/about' },
//     // { name: 'Contact', path: '/contact' },
//     { name: `Cart ${cartCount > 0 ? ` (${cartCount})` : ''}`, path: '/cart' } // Display cart count here
//   ];

//   return (
//     <div className="flex sticky text-black p-2 justify-between container mx-auto bg-white top-0 z-50">
//       <div className='flex  gap-4 w-full p-1'>
//       <h2 className="text-2xl font-bold p-2 flex">Local<LiaCartPlusSolid className="mt-1 font-bold" />
//       </h2>
//       <SearchBar />
//       </div>

//       <div className='flex gap-4'>

//       {/* Navigation Links for Large Screens */}
//       <button type="button" className=" flex justify-center items-center text-blue-700 hover:text-white border  hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2 dark:border-white dark:text-black dark:hover:text-white dark:hover:bg-purple-600 dark:focus:ring-blue-800">      <IoPersonCircleOutline className=' w-7 h-7 mr-3 mt-1 '/>
//       Login</button>

//       {/* Login Button for Large Screens */}
//       <div className="lg:flex sm:hidden">
//       <div className="lg:flex justify-center items-center text-lg p-2 font-semibold gap-1 sm:hidden">
//       <PiShoppingCartThin  className='w-7 h-7'/>

//         {navLinks.map((link, index) => (
//           <Link 
//             key={index} 
//             to={link.path}
//             className={`${location.pathname === link.path ? 'text-purple-700' : ''}`}
//           >
//             {link.name}
//           </Link>
//         ))}
//       </div>
//       <button type="button" className=" flex justify-center items-center p-1 ml-4 ">
       
//       <BsShop className='mt-1 w-7 h-7 '/>Become Seller 
//       </button>
//       </div>
//       </div>

//       {/* Hamburger Icon for Mobile View */}
//       <div className="lg:hidden md:flex p-2 flex-col justify-end font-extrabold text-2xl">
//         <button onClick={toggler}>
//           {MobileView ? 'X' : '☰'}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-16 left-0 h-full w-full backdrop-blur-2xl bg-black/80 text-white text-2xl font-semibold gap-3 text-center p-5 flex flex-col space-y-4 lg:hidden transform transition-transform duration-300 ease-in-out ${
//           MobileView ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         {navLinks.map((link, index) => (
//           <Link key={index} to={link.path} onClick={toggler}>
//             {link.name}
//           </Link>
//         ))}

//         <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-lg px-5 py-3 text-center me-2 mb-2">
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Header;

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
    { name: '', path: '/' },
    { name: `Cart`, path: '/cart' }, // Display only the word "Cart" in the navLinks
  ];

  return (
    <div className="flex sticky top-0 z-50 bg-white p-3 container mx-auto">
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
        <button
          type="button"
          className="flex items-center text-blue-700 hover:text-white border hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 dark:border-white dark:text-black dark:hover:text-white dark:hover:bg-purple-600 dark:focus:ring-blue-800"
        >
          <IoPersonCircleOutline className="w-6 h-6 mr-2" />
          Login
        </button>

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
              className={`font-semibold ${
                location.pathname === link.path ? 'text-black' : 'text-black'
              }`}
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
        <button
          className="bg-gradient-to-br from-purple-600 to-blue-500 text-white font-bold rounded-lg text-lg px-5 py-2 hover:bg-gradient-to-bl"
          onClick={toggler}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
