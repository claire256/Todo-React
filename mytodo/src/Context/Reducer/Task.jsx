import {ADDTODO, ADDTODO_ERRORS} from '../Types';

export const TodoInitialState = {}
const TaskReducer = (state, action)=>{
    switch(action.type){
    
    case ADDTODO:
        return{...state, addtodo: action.payload, addtodo_errors: null}

    case ADDTODO_ERRORS:
        return{...state, addtodo_errors: action.payload, addtodo: null}

    default:
        return state

    }

}

export default TaskReducer;