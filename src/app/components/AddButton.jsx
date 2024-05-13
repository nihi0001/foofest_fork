import React from 'react';

const ButtonComponent = ({ onButtonClick }) => {
  return (
    <>
    <button onClick={onButtonClick}>+</button>
    </>
  );
};

export default ButtonComponent;
