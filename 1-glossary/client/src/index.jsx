import React, { useState } from 'react';
import { render } from 'react-dom';
import SearchBar from './components/SearchBar.jsx';
import WordList from './components/WordList.jsx';
import WordAdd from './components/WordAdd.jsx';
const axios = require('axios'); //save

const App = () => {
  const [words, setWords] = useState([]);

  const deleteWord = (word) => {
    var wordObj = {params: {word}};
    axios.delete('/glossaries', wordObj)
      .then((response) => {
        axios.get('/glossaries')
          .then((response) => {
            setWords(response.data);
          })
          .catch((error) => {
            console.log(error);
          })
      })
      .catch((error) => {
        console.log('client > deleteWord: error!')
        console.log(error);
      })
  };

  const search = (term) => {
    if (term === '') {
      axios.get('/glossaries')
      .then((response) => {
        setWords(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
    } else {
      var wordObj = {params: {term}};
      axios.get('/glossaries', wordObj)
        .then ((response) => {
          setWords(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  };

  const wordAdd = (word, definition) => {
    let wordObj = {word: word, definition: definition};

    axios.post('/glossaries', wordObj)
      .then ((response) => {
        axios.get('/glossaries')
          .then((response) => {
            setWords(response.data);
          })
          .catch((error) => {
            console.log(error);
          })
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
  }, []);

  return (
    <div>
      <div className='title'>
        <h1>Glossary</h1>
      </div>
      <div className='search'>
        <SearchBar search={search} />
      </div>
      <div className='add'>
        <WordAdd wordAdd={wordAdd} />
      </div>
      <div className='list'>
        <WordList words={words} deleteWord={deleteWord} />
      </div>
    </div>
  );
}

render(<App />, document.getElementById('root')); //save