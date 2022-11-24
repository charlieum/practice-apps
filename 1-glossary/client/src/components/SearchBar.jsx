import React, { useState } from 'react';
const axios = require('axios');

const SearchBar = ({search}) => {

  const[term, setTerm] = useState('')

  const onChangeSearch = (e) => {
    setTerm(e.target.value);
  }

  const startSearch = () => {
    search(term);
  }

  return (
    <div className='searchBar'>
      <div>
        Search:
      </div>
      <input value={term} onChange={onChangeSearch}/>
      <button onClick={startSearch}>search</button>
    </div>
  );
}

export default SearchBar;