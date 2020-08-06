import { SET_TODO } from './actions';
const State = {
    auth: 'kings',
    age: 18,
    todoList:[],
    showType: 'undone'
};
export default function(state = State, action) {
    switch (action.type) {
    case SET_TODO:
        return Object.assign({}, state, action.obj);
    default:
        return state;
    }
}