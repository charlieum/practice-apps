import React from 'react';
import WordEntry from './WordEntry.jsx';


const WordList = ({words, deleteWord, editWord}) => {
  return (
    <div>
      {words.map((word) => {
        return <WordEntry word={word} deleteWord={deleteWord} editWord={editWord} />
      })}
    </div>
  );
};

export default WordList;
