import React from 'react';
import WordEntry from './WordEntry.jsx';


const WordList = ({words, deleteWord}) => {
  return (
    <div>
      {words.map((word) => {
        return <WordEntry word={word} deleteWord={deleteWord} />
      })}
    </div>
  );
};

export default WordList;
