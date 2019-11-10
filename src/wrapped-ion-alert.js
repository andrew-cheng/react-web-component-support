import React from 'react';

import WebComponentWrapper from './web-component-wrapper';

function WrappedIonAlert({name, show, onDismiss}) {
  let ionAlertAttributes = {
    animated: true,
    backdropDismiss: true,
    header: 'Confirm',
    message: `Voting for ${name}`
  };

  let ionAlertProperties = {
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Okay'
      }
    ]
  };

  return (
    <>
      {show &&
        <WebComponentWrapper
          attributes={ionAlertAttributes}
          properties={ionAlertProperties}
          onLoad={(component) => component.present()}
          onEvent={{ionAlertDidDismiss: onDismiss}}
        >
          <ion-alert></ion-alert>
        </WebComponentWrapper>
      }
    </>
  );
}

export default WrappedIonAlert;
