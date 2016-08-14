import { List, Map } from 'immutable';

const init = List();

export default function reducer(state = init, action) {
  switch(action.type) {
    case 'ADD_EVENT':
      return state.push(Map(action.payload));
    default:
      return state;
  }
}

