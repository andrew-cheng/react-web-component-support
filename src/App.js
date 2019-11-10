import React from 'react';

import UsingDirectly from './using-directly';
import UsingWrapper from './using-wrapper';

import WrappedIonAlert from './wrapped-ion-alert';
import WrappedWebComponentMethodCall from './call-methods/wrapped-web-component-method-call';

function App() {

  const [showAlert, setShowAlert] = React.useState(false);
  const [votedName, setVotedName] = React.useState('');
  
  const onVote = (payload) => {
    setShowAlert(true);
    setVotedName(`${payload.detail.first} ${payload.detail.last}`);
  };

  const onDismiss = () => {
    setShowAlert(false);
  }

  return (
    <React.StrictMode>
      <UsingDirectly onVote={onVote} />
      <UsingWrapper onVote={onVote} />
      <WrappedIonAlert show={showAlert} name={votedName} onDismiss={onDismiss} />
      <WrappedWebComponentMethodCall />
    </React.StrictMode>
  );
}

export default App;
