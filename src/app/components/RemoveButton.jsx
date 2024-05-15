import React from 'react';

const RemoveButtonComponent = ({ onRemoveButtonClick }) => {
  return (
    <button className="bg-Lightpink rounded-full w-6 align-center text-White" onClick={onRemoveButtonClick}>-</button>
  );
};

export default RemoveButtonComponent;
