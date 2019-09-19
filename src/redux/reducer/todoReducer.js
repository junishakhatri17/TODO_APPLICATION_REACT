import store from '../store/store';
import constants  from '../action/constants';

let initialState = {
    todos : [{
        id: 1, text: 'hello' , completed: false
    }]
}

function todoReducer(state = initialState, action) {
    switch(action.type) {

        case 'ADD_TODO' :
            state = {
                ...state,
                todos: [...state.todos, action.payload]
               
            } 
        break;
        case 'DELETE_TODO' :
                let _filtered = state.todos.filter((item) =>{
                    if(item.id !== action.payload) {
                        return item;
                    }
                })
            state = {
                ...state,
                todos: _filtered 
            }
            
        break;   
        case 'TOGGLE_TODO' :
            let _todos = state.todos.map((item) =>{
                if(item.id === action.payload) {
                    item.completed = !item.completed
                }
                return item;
            })
            state = {
                ...state,
                todos: _todos
            } 
        break;   
    }
    return state;

}


export default todoReducer;