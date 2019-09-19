import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import TodoApp from './TodoApp';
import {Provider} from 'react-redux';
import createStore from './redux/store/store'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={createStore}><TodoApp /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
