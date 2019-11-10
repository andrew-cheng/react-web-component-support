import React from 'react';

import WebComponentWrapper from './web-component-wrapper';

function WrappedIonAlert() {
  let ionAlertAttributes = {
    animated: true,
    backdropDismiss: true,
    header: 'Confirm',
    message: ''
  };

  let ionAlertProperties = {
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay')
        }
      }
    ]
  };

  return (
    <WebComponentWrapper
      attributes={ionAlertAttributes}
      properties={ionAlertProperties}
      onLoad={(component) => component.present()}
    >
      <ion-alert></ion-alert>
    </WebComponentWrapper>
  );
}

export default WrappedIonAlert;
