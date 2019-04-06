import { CHANGE_DIRECTION } from '../actions/types';

export default function (state = "forward", action){
    
    switch(action.type) {
        case CHANGE_DIRECTION:
            return action.payload;
    }
    
    return state;
}