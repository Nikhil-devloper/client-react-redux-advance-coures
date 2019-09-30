import { AUTH_USER, AUTH_ERROR } from './types.js';
import axios from 'axios';


// usual Action creator -->
// export const signup = ({email, password}) => {
//   return {
//     type: AUTH_USER,
//     payload: '10232323'
//   };
//}

export const signup = ({email , password },callback) =>async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signup',{
     email: email,
     password: password
   });
   dispatch({type: AUTH_USER, payload: response.data.token });

   //localStorage.setItem('tocken',response.data.tocken);
   //Bug Test --> try this above line and comment below line.
   // If you don't set properly tocken into localStorage. after refresh you won't be able to login
   //then you have to ask for new tocken.
   localStorage.setItem('tocken',response.data.token);
   callback();
  }
  catch(e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email is in use'});
  }
}

export const signin = ({email , password },callback) =>async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signin',{
     email: email,
     password: password
   });
   dispatch({type: AUTH_USER, payload: response.data.token });
   localStorage.setItem('tocken',response.data.token);
   callback();
  }
  catch(e) {

    dispatch({ type: AUTH_ERROR, payload: 'Invalid Login Creadentials'});
  }
}



export const signout = () => {

  localStorage.removeItem('tocken');

  return {
      type: AUTH_USER,
      payload: ''
  }
}
