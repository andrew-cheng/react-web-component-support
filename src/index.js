import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { defineCustomElements } from '@ionic/core/loader';
import { defineCustomElements as defineListElement } from 'simple-list/dist/loader';

ReactDOM.render(<App />, document.getElementById('root'));

defineListElement(window);
defineCustomElements(window);