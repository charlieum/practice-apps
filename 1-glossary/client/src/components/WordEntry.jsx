import React from 'react';

const WordEntry = ({word, deleteWord}) => {

  const startDelete = () => {
    deleteWord(word.word);
  };

  return (
    <div className="wordEntry" >
      <div>
        <strong>{word.word}</strong> - {word.definition}
      </div>
      <div>
        <button className='changeBttn' onClick={startDelete}><font color='white'>EDIT</font></button>
        <button className='changeBttn' onClick={startDelete}><font color='white'>DELETE</font></button>
      </div>
    </div>
  );
};

export default WordEntry;
