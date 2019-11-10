import React, { useEffect, useRef } from 'react';

function UsingDirectly({onVote}) {
  const list = [
    { first: 'John', last: 'Doe' },
    { first: 'Jane', last: 'Doe' },
    { first: 'Johnny', last: 'Doe' }
  ];

  const listRef = useRef();

  useEffect(() => {
    listRef.current.list = list;
    listRef.current.addEventListener('vote', onVote);
  });

  return (
    <simple-list ref={listRef} title="Using it directly"></simple-list>
  );
}

export default UsingDirectly;
