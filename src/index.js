import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import Welcome from './component/Welcome';
import Feature from './component/Feature';
import SignUp from './component/auth/SignUp.js';
import SignIn from './component/auth/SignIn.js';
import SignOut from './component/auth/SignOut.js';
import { Provider } from 'react-redux';
import reducer from './reducers/index.js';

ReactDOM.render(
                <Provider store = {createStore(reducer,
                  {
                  auth: {
                    authenticated: localStorage.getItem('tocken')
                  }
                },applyMiddleware(reduxThunk))}>
                <BrowserRouter>
                  <App>
                    <Route path='/' exact component={Welcome} />
                    <Route path='/signup' exact component={SignUp} />
                    <Route path='/feature' exact component={Feature} />
                    <Route path='/signout' exact component={SignOut} />
                    <Route path='/signin' exact component={SignIn} />
                  </App>
                </BrowserRouter>
                </Provider>
                ,
              document.getElementById('root'));
