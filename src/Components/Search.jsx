import React, { useState } from 'react';

const SearchBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const categories = ['Fruits & Vegetables', 'Dairy', 'Bakery', 'Snacks', 'Beverages', 'Meat'];

  return (
    <div className="flex items-center p-1 border rounded-full overflow-hidden  w-full max-w-md">
      {/* Dropdown for Categories */}
      <div
        className="relative"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <button className="px-4 py-2 rounded-full bg-gray-300 font-bold">
          ALL
        </button>
        {isDropdownOpen && (
          <div className="absolute left-0 top-full mt-1 bg-white border rounded-lg shadow-lg w-48 z-10">
            {categories.map((category) => (
              <div key={category} className="px-4 py-2 hover:bg-gray-100">
                {category}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products and brands across shops"
        className="flex-grow px-4 py-2 focus:outline-none"
      />

      {/* Search Button */}
      <button className="px-3 py-2 bg-purple-600 rounded-full text-white ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m1.7-5.9a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
