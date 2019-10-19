import {createStore} from 'redux';

const initState = {
    todos: [],
    post: []
};

function myreduceur(state = initState, action){
    if (action.type == "ADD_TODO"){
        return{
            ...state,
            todos: [...state.todos, action.todo]
        }
    }
}

const store = createStore(myreduceur);

store.subscribe(() => {
    console.log("state updated");
    console.log(store.getState());
})

const todoAction = {
    type: "ADD_TODO",
    todo: "buy milk"
}

store.dispatch(todoAction)
