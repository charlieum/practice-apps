import React, { useState } from 'react';
const axios = require('axios');

const WordAdd = ({wordAdd}) => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState ('');

  const onChangeWord = (e) => {
    setWord(e.target.value);
  };

  const onChangeDef = (e) => {
    setDefinition(e.target.value);
  };

  const startAdd = () => {
    if (word.length !== 0) {
      wordAdd(word, definition);
      setWord('');
      setDefinition('');
    }
  }

  return (
    <div className='wordAdd'>
      <div>
        <strong>Add to glossary:</strong>
      </div>
      <div><span>Word:</span> <input className='inputWord' value={word} onChange={onChangeWord} /></div>
      <div>
        <span>Definition:</span> <input className='inputWord' value={definition} onChange={onChangeDef} />
      </div>
      <div>
        <button onClick={startAdd}><font color='white'><strong>ADD WORD</strong></font></button>
      </div>
    </div>
  );
};



export default WordAdd;