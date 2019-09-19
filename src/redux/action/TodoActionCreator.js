import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from './constants';

let counter = 2;
let status = false;

export function addTodo(_text) {
    let todos = {id : counter , text: _text, completed : status};
    counter++;
    return {
        type: ADD_TODO,
        payload: todos
    }
}

export function delTodo(_id) {
    return {
        type: DELETE_TODO,
        payload: _id
    }
}

export function toggleTodo(_id) {
    return {
        type: TOGGLE_TODO,
        payload: _id
    }
}

export default {addTodo, delTodo, toggleTodo};