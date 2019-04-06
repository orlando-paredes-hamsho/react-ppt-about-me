import { CHANGE_SLIDE, CHANGE_DIRECTION } from "./types";

export function change_slide(slide){
    
    return ({
    
        type: CHANGE_SLIDE,
        payload: slide
        
    });
    
}

export function change_direction(direction){
    
    return({
        
        type: CHANGE_DIRECTION,
        payload: direction
        
    })
    
}