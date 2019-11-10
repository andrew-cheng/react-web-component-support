import React from 'react';

import WebComponentMethodWrapper from './web-component-method-wrapper';

function WrappedWebComponentMethodCall() {
  const [method, callMethod] = React.useState({
    method: (component) => {component.logSomething('something')},
    call: true,
    ignored: 0
  });

  const log = () => {
    callMethod({
      method: (component) => {component.logSomething('something else')}, 
      call: true, 
      ignored: method.ignored + 1
    });
  };
  
  const ionAlertAttributes = {
    animated: true,
    backdropDismiss: true,
    header: 'Confirm',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Okay'
      }
    ]
  };

  const [alertMethod, callAlertMethod] = React.useState({
    method: async (component) => {
      const alert = await component.create(ionAlertAttributes);
      alert.present()
    },
    call: false,
    ignored: 0
  });

  const show = () => {
    callAlertMethod({
      ...alertMethod,
      call: true, 
      ignored: method.ignored + 1
    });
  };

  return (
    <>
      <button onClick={log}>log</button>
      <WebComponentMethodWrapper
        callMethod={method}
      >
        <simple-logger></simple-logger>
      </WebComponentMethodWrapper>
      <button onClick={show}>show</button>
      <WebComponentMethodWrapper
        callMethod={alertMethod}
      >
        <ion-alert-controller></ion-alert-controller>
      </WebComponentMethodWrapper>
    </>
  );
}

export default WrappedWebComponentMethodCall;
