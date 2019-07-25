import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import cartReducer from './components/reducers/cartReducer';
import reducer from './components/reducers/dataReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import thunk from 'redux-thunk';

// const store = createStore(cartReducer, applyMiddleware(thunk));
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
