import React, { useState } from 'react';
const axios = require('axios');

const WordAdd = ({wordAdd}) => {
  const [word, setWord] = useState('word');
  const [definition, setDefinition] = useState ('definition');

  const onChangeWord = (e) => {
    setWord(e.target.value);
  };

  const onChangeDef = (e) => {
    setDefinition(e.target.value);
  };

  const startAdd = () => {
    wordAdd(word, definition);
  }

  return (
    <div className='wordAdd'>
      <div>
        Add new word:
      </div>
      <input value={word} onChange={onChangeWord} />
      <input value={definition} onChange={onChangeDef} />
      <button onClick={startAdd}>Add Word</button>
    </div>
  );
};



export default WordAdd;