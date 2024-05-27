import React, { useRef, useState } from 'react';

const MultiplyNumbers = ({ callback }) => {
  const num1Ref = useRef(null);
  const num2Ref = useRef(null);
  const [error, setError] = useState('');

  const handleClick = () => {
    const num1 = parseFloat(num1Ref.current.value);
    const num2 = parseFloat(num2Ref.current.value);

    if (isNaN(num1) || isNaN(num2)) {
      setError('Please enter valid numbers');
      return;
    }

    const result = num1 * num2;
    if (callback) {
      callback(result);
    }

    // Clear input fields after calculation
    num1Ref.current.value = '';
    num2Ref.current.value = '';
    setError('');
  };

  return (
    <div>
      <input type="number" ref={num1Ref} placeholder="Enter first number" />
      <input type="number" ref={num2Ref} placeholder="Enter second number" />
      <button onClick={handleClick}>Multiply Numbers</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

const UseRefExample = () => {
  // Callback function to handle result
  const handleResult = (result) => {
    alert(`The result of the multiplication is: ${result}`);
  };

  return (
    <div>
      <h1>Using useRef for Multiplication in React</h1>
      <MultiplyNumbers callback={handleResult} />
    </div>
  );
};

export default UseRefExample;
