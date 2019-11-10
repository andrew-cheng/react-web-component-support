import React from 'react';

function WebComponentWrapper({children, attributes, properties, onEvent, onLoad}) {
    const componentRef = React.useRef();
  
    React.useEffect(() => {
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

      //TODO: parent needs to be able to call this at will, preferably no refs needed
      if (onLoad) {
        onLoad(componentRef.current);
      }
    });
    
    return (
      <>
        {React.cloneElement(children, {...attributes, ref: componentRef})}
      </>
    );
}

export default WebComponentWrapper;
