import React from 'react';
import ReactDOM from 'react-dom';
import { EventList, AddEvent } from './container';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
  <div>
    <Provider store={store}>
      <EventList/>
    </Provider>
    <Provider store={store}>
      <AddEvent/>
    </Provider>
  </div>,
  document.getElementById('root')
);


