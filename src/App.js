import React, { Fragment, useEffect, useRef } from 'react';

import WebComponentWrapper from './web-component-wrapper';

function App() {
  const list = [
    { first: 'John', last: 'Doe' },
    { first: 'Jane', last: 'Doe' },
    { first: 'Johnny', last: 'Doe' }
  ];

  const listRef = useRef();

  useEffect(() => {
    listRef.current.list = list;
    listRef.current.addEventListener('vote', (payload) => {
      console.log('voted', payload.detail);
    });
  });

  const onVote = (payload) => {
    console.log('voted', payload.detail);
  };

  return (
    <Fragment>
      <simple-list ref={listRef} title="Using it directly"></simple-list>
      <WebComponentWrapper
        attributes={{title: 'Using a wrapper'}}
        properties={{list}}
        onEvent={{vote: onVote}}
      >
        <simple-list></simple-list>
      </WebComponentWrapper>
    </Fragment>
  );
}

export default App;
