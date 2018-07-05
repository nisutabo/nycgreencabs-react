import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { manageRides } from './reducers/manageRides';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(manageRides, applyMiddleware(thunk))

ReactDOM.render(

    <Provider store={store}>
      <App />
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
