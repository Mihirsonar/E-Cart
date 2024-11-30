import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/Slice/ProductSlice';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleChange = (value) => {
    setInput(value);
    dispatch(setSearchQuery(value)); // Update Redux state
  };

  return (
    <div className="flex items-center p-1 border rounded-full overflow-hidden w-full max-w-md">
      <input
        type="text"
        placeholder="Search products and brands across shops"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        className="flex-grow px-4 py-2 focus:outline-none"
      />
      <button className="px-3 py-2 bg-purple-600 rounded-full text-white">
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
