import React, { useEffect, useRef } from 'react';

function App() {
  const list = [
    { first: 'John', last: 'Doe' },
    { first: 'Jane', last: 'Doe'},
    { first: 'Johnny', last: 'Doe'}
  ];

  const listRef = useRef();

  useEffect(() => {
    listRef.current.list = list;
    listRef.current.addEventListener('vote', (payload) => {
      console.log('voted', payload.detail);
    });
  });

  return (
    <simple-list ref={listRef}></simple-list>
  );
}

export default App;
