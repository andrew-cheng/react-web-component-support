import React, { Fragment, useRef, useEffect } from 'react';

function WebComponentWrapper({children, attributes, properties, onEvent}) {
    const componentRef = useRef();
  
    useEffect(() => {
      Object.keys(properties).forEach(prop => {
        componentRef.current[prop] = properties[prop];
      });
      Object.keys(onEvent).forEach(event => {
        componentRef.current.addEventListener(event, onEvent[event]);
      });
    });
    
    return (
      <Fragment>
        {React.cloneElement(children, {...attributes, ref: componentRef})}
      </Fragment>
    );
}

export default WebComponentWrapper;
