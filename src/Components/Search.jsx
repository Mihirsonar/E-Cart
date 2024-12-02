import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/Slice/ProductSlice';
import { CiSearch } from "react-icons/ci";


const SearchBar = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleChange = (value) => {
    setInput(value);
    dispatch(setSearchQuery(value)); // Update Redux state
  };

  return (
    <div className="flex items-center border rounded-md overflow-hidden w-full max-w-md h-12">
      <CiSearch className='ml-5 text-lg'/>
      <input
        type="text"
        placeholder="Search products and brands across shops"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        className="flex-grow px-4 py-1 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
