import React, { useRef } from 'react';
import Home from './Home';
import { RecoilRoot } from 'recoil';
const ParentComponent = () => {
  const childRef = useRef(null);
  const handleAddTodo = (newTodo) => {
    console.log('Added from parent:', newTodo);
  };

  const handleButtonClick = () => {
    childRef.current.addTodo();
  };

  return (
    <div>
      <RecoilRoot>
        <button onClick={handleButtonClick}>Add Todo from Parent</button>
        <Home onAddTodo={handleAddTodo} ref={childRef} />
      </RecoilRoot>
    </div>
  );
};

export default ParentComponent;
