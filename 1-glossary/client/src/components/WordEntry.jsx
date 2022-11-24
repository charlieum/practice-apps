import React from 'react';

const WordEntry = ({word}) => {



  return (
    <div>
      <strong>{word.word}</strong> - {word.definition}
    </div>
  );
};

export default WordEntry;
