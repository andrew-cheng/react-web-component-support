import React from 'react';

import UsingDirectly from './using-directly';
import UsingWrapper from './using-wrapper';

import WrappedIonAlert from './wrapped-ion-alert';

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
    <>
      <UsingDirectly onVote={onVote} />
      <UsingWrapper onVote={onVote} />
      <WrappedIonAlert show={showAlert} name={votedName} onDismiss={onDismiss} />
    </>
  );
}

export default App;
