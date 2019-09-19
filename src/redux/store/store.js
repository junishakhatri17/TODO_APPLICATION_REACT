import {createStore} from 'redux';
import todoReducer from '../reducer/todoReducer';


export default createStore(todoReducer);
