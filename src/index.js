import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, {initialState} from './Reducer';
import {StateProvider} from './StateProvider';
ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
