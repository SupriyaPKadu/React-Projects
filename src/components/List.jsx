
import React from 'react';

function List({ items }) {
  return (
    <div>
      <h2>Car List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
