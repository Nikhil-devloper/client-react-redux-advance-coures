import { AUTH_USER,AUTH_ERROR } from '../actions/types.js';

const INITIAL_STATE = {
  authenticated: '',
  errorMesssage: ''
}

export default function(state=INITIAL_STATE,action) {
  switch (action.type) {
    case AUTH_USER:
      return {...state,authenticated: action.payload};
    case AUTH_ERROR:
      return {...state,errorMesssage: action.payload};
    default:
      return state;
  };
}
