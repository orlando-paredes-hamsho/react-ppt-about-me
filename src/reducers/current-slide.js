import { CHANGE_SLIDE } from '../actions/types';

export default function (state = 0, action){
    
    switch(action.type) {
        case CHANGE_SLIDE:
            return action.payload;
    }
    
    return state;
}