import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { defineCustomElements } from 'simple-list/dist/loader';

ReactDOM.render(<App />, document.getElementById('root'));

defineCustomElements(window);