import test from 'tape';
import { reducer } from './src/reducer';
import { List, Map } from 'immutable';

test('does reducer work',(e) => {
  let init = List([]);

  let object = {
    type: 'ADD_EVENT',
    payload: {
      text: 'Hello there',
      id: 1
    }
  }

  let fn = reducer(init, object);
  let after = List([Map({text: 'Hello there', id: 1})]);

  e.equals(fn, after);


})
