import React from 'react';

// Define the callback function
const handleResult = (result) => {
  alert(`The result of the addition is: ${result}`);
};

const AddNumbers = ({ a, b, callback }) => {
  const handleClick = () => {
    const result = a + b;
    if (callback) {
      callback(result);
    }
  };

  return (
    <div>
      <p>
        Click the button to add {a} and {b}.
      </p>
      <button onClick={handleClick}>Add Numbers</button>
    </div>
  );
};

const UseCallBack = () => {
  return (
    <div>
      <h1>Using Callbacks in React</h1>
      <AddNumbers a={3} b={7} callback={handleResult} />
    </div>
  );
};

export default UseCallBack;
