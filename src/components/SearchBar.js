import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <div className="input-group w-50 p-3" >
  <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={(e) => setSearchQuery(e.target.value)}/>
  <button type="button" className="btn btn-outline-primary" onClick={handleSearch}>search</button>
</div>
    );
}

export default SearchBar;
