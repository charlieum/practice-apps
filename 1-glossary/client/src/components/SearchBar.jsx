import React, { useState } from 'react';
const axios = require('axios');

const SearchBar = ({search}) => {

  const[term, setTerm] = useState('');

  const onChangeSearch = (e) => {
    setTerm(e.target.value);
  };

  const startSearch = () => {
    search(term);
  };

  return (
    <div className='searchBar'>
      <div>
        <strong>Search:</strong>
      </div>
      <input className='searchInput' value={term} onChange={onChangeSearch} />
      <button onClick={startSearch}><font color='white'><strong>SEARCH</strong></font></button>
    </div>
  );
}

export default SearchBar;