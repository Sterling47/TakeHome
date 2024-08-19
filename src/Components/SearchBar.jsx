import React, { useState } from 'react';

const SearchBar = ({ setSearchQuery }) => {
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    setInput(e.target.value);
    setSearchQuery(e.target.value);
  };

  return (
    <input
      type="text"
      value={input}
      onChange={handleSearch}
      placeholder="Search articles..."
      className='search-bar'
    />
  );
};

export default SearchBar;
