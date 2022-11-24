import React from 'react';
import WordEntry from './WordEntry.jsx';


const WordList = ({words}) => {


  console.log('words: ', words);
  return (
    <div>
      {words.map((word) => {
        console.log(word);
        return <WordEntry word={word}/>
      })}
    </div>
  );
};

export default WordList;
