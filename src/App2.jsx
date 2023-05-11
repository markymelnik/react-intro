import React, { useState } from 'react';

const App2 = () => {
  const [heading, setHeading] = useState('Green');

  const clickHandler = () => {
    setHeading('Blue');
  };

  return (
    <>
      <button type='button' onClick={clickHandler}>
        Click Me
      </button>
      <h1>{heading}</h1>
    </>
  );
};

export default App2;