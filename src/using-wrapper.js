import React from 'react';

import WebComponentWrapper from './web-component-wrapper';

function UsingWrapper() {
  const list = [
    { first: 'John', last: 'Doe' },
    { first: 'Jane', last: 'Doe' },
    { first: 'Johnny', last: 'Doe' }
  ];

  const onVote = (payload) => {
    console.log('voted', payload.detail);
  };

  return (
    <WebComponentWrapper
      attributes={{title: 'Using a wrapper'}}
      properties={{list}}
      onEvent={{vote: onVote}}
    >
      <simple-list></simple-list>
    </WebComponentWrapper>
  );
}

export default UsingWrapper;
