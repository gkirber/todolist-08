import type {TasksState} from '../App';
import type {CreateTodolistAction} from './todolists-reducer';

const initialState: TasksState = {};

type Actions = CreateTodolistAction;

export const tasksReducer = (state: TasksState = initialState, action: Actions): TasksState => {
    switch (action.type) {
        case "create_todolist": {
            return {...state, [action.payload.id]: []};
        }
        default:
            return state;
    }
};
