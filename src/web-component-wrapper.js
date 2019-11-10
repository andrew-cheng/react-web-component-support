import React, { Fragment, useRef, useEffect } from 'react';

function WebComponentWrapper({children, attributes, properties, onEvent, onLoad}) {
    const componentRef = useRef();
  
    useEffect(() => {
      if (properties) {
        Object.keys(properties).forEach(prop => {
          componentRef.current[prop] = properties[prop];
        });
      }
      if (onEvent) {
        Object.keys(onEvent).forEach(event => {
          componentRef.current.addEventListener(event, onEvent[event]);
        });
      }

      if (onLoad) {
        onLoad(componentRef.current);
      }
    });
    
    return (
      <Fragment>
        {React.cloneElement(children, {...attributes, ref: componentRef})}
      </Fragment>
    );
}

export default WebComponentWrapper;
