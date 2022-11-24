import React, { useState } from 'react';
import { render } from 'react-dom';
import SearchBar from './components/SearchBar.jsx';
import WordList from './components/WordList.jsx';
import WordAdd from './components/WordAdd.jsx';
const axios = require('axios'); //save

const App = () => {
  const [words, setWords] = useState([]);

  const search = (term) => {
    // let searchObj = {term: term};
    // axios.get('/glossaries', searchObj)
    //   .then ((response) => {
    //     console.log()
    //   })
    //   .catch((error) => {
    //     xx
    //   })
  };

  const wordAdd = (word, definition) => {
    let wordObj = {word: word, definition: definition};

    axios.post('/glossaries', wordObj)
      .then ((response) => {
        console.log('client > wordAdd SUCCESS!');
      })
      .catch((error) => {
        console.log(error);
      })
  };

  React.useEffect (() => {
    axios.get('/glossaries')
      .then((response) => {
        setWords(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <div>
      <div>
        <h1>Glossary</h1>
      </div>
      <div className='search'>
        <SearchBar search={search} />
      </div>
      <div className='add'>
        <WordAdd wordAdd={wordAdd} />
      </div>
      <div>
        List goes here.
        <WordList words={words}/>
      </div>
    </div>
  );
}

render(<App />, document.getElementById('root')); //save