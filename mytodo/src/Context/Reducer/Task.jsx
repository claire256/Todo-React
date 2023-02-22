import {ADDTODO, ADDTODO_ERRORS} from '../Types';

export const TodoInitialState = {
 todo: null,
 addtodo_errors: null
}
const TaskReducer = (state, action)=>{
    switch(action.type){
    
    case ADDTODO:
        return{...state, todo: action.payload, addtodo_errors: null}

    case ADDTODO_ERRORS:
        return{...state, addtodo_errs: action.payload, addtodo: null}

    default:
        return state

    }

}

export default TaskReducer;