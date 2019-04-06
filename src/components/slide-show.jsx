import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Swipeable from 'react-swipeable';

import Slide from './slide.jsx';

import { change_slide, change_direction } from '../actions/index';

class SlideShow extends Component {
    
    constructor(props){
        super(props);
    }
    
    handleClick(e){
        e.preventDefault();
        //TODO: Reset on click behaviour
        //this.setCurrentSlide(this.props.currentSlide + 1,"forward");
    }
    
    setCurrentSlide(slide, direction){
        if(slide >= React.Children.count(this.props.children)){
            slide = 0;
        } else if (slide < 0) {
            slide = React.Children.count(this.props.children) - 1;
        }
        this.props.change_direction(direction);
        this.props.change_slide(slide);
    }
    
    handleKeyboard(e){
        
        e.preventDefault();
        
        switch(e.keyCode){
            case 8:
            case 37:
            case 40:
                this.setCurrentSlide(this.props.currentSlide-1,"backward");
                break;
            case 13:
            case 32:
            case 38:
            case 39:
                this.setCurrentSlide(this.props.currentSlide+1, "forward");
                break;
        }
        
        return false;
    }
    
    swipedLeft(e) {
        this.setCurrentSlide(this.props.currentSlide+1, "forward");
    }
    
    swipedRight(e) {
        this.setCurrentSlide(this.props.currentSlide-1,"backward");
    }
    
    render(){
        if( React.Children.count(this.props.children) === 0 ) return null;
        
        let className = (this.props.transition) 
                                ? "slide_show " + this.props.transition + " " + this.props.direction
                                : "slide_show " + this.props.direction;
        return (
         <Swipeable
                onSwipedRight={this.swipedRight.bind(this)}
                onSwipedLeft={this.swipedLeft.bind(this)}
            >
            <div tabIndex="0"
                className={className + " " + this.props.theme} 
                onClick={ this.handleClick.bind(this)}
                onKeyUp={ this.handleKeyboard.bind(this) }
            >
                    <ReactCSSTransitionGroup transitionName="slides" transitionEnterTimeout={1} transitionLeaveTimeout={500} >
                        <Slide key={this.props.currentSlide}>
                            {(React.Children.count(this.props.children) > 1) ? this.props.children[this.props.currentSlide] : this.props.children}
                        </Slide>
                    </ReactCSSTransitionGroup>
            </div>
            </Swipeable>
        );
    }
    
}

function mapStateToProps ({currentSlide, direction}, {transition,theme}){
    return{
        currentSlide,
        direction,
        transition,
        theme
    }
}

export default connect(mapStateToProps, {change_slide, change_direction})(SlideShow);