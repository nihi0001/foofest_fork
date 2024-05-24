import React from 'react';

const ButtonComponent = ({ onRemoveTentClick }) => {
  return (
    <>
    <button type="button" className="bg-Lightpink text-White rounded-full w-6 align-center" onClick={onRemoveTentClick}>-</button>
    </>
  );
};

export default ButtonComponent;
