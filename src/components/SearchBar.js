// SearchBar.js
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <div>
            <input
                type='text'
                value={searchQuery}
                placeholder='Enter Product Details'
          onChange={(e) => setSearchQuery(e.target.value)}
          className='input-search'
            />
            <button className='search-button' onClick={handleSearch}>
                Search
            </button>
        </div>
    );
}

export default SearchBar;
