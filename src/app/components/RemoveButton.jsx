import React from 'react';

const RemoveButtonComponent = ({ onRemoveButtonClick }) => {
  return (
    <button onClick={onRemoveButtonClick}>-</button>
  );
};

export default RemoveButtonComponent;
