import { combineReducers } from 'redux';
import currentSlide from './current-slide';
import direction from './direction';

const rootReducer = combineReducers({
    currentSlide,
    direction
});

export default rootReducer;
