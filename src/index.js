import React from 'react';
import ReactDOM from 'react-dom';
import { EventList, AddEvent } from './container';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <div>
        <EventList/>
        <AddEvent/>
    </div>
  </Provider>,
  document.getElementById('root')
);


