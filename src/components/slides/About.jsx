import React, { Component } from 'react';

class Cover extends Component {
	
	constructor(props){
		super(props);
	}
	
	render(){
		
		return (
			<div className={"slide-transition cover"}>
			    <div className="about">
    				<h3 className={"cover-h1"}>About Me</h3>
    				<p>I’m Orlando Paredes Hamsho, internationally recognized Web Developer, User Experience Designer & Instructor; hailing from the white city of Merida, land of the Cochinita Pibil and the Jarana.</p>
                    <p>A seasoned professional with experience ranging from design agencies to huge enterprises, from freelancing to co-running a company. All of this in just 5 years total.</p>
                    <p>My hobbies include: Boxing, Brewing, Traveling and Corgis (Click <a href="http://codepen.io/orliph/pen/vLwMBj">Here</a> for some awesome css art of Sam.) I’m also a huge fan of the Ketogenic diet.</p>
		            <h2>Where else can I find you?</h2>
                    <p>Obligatory list of links? Obligatory list of links:</p>
                    <ul>
                    	<li>You may want to start with my <a href="https://mx.linkedin.com/in/orlandoparedeshamsho">LinkedIn</a>.</li>
                    	<li>Look! The Yucatan Living <a href="http://www.yucatanliving.com/about">About</a> Page.</li>
                    	<li>Perhaps checkout my <a href="http://codepen.io/orliph/">CodePen</a>.</li>
                    	<li>Or maybe you prefer <a href="https://github.com/orlando-paredes-hamsho">Github</a>.</li>
                    	<li><a href="http://stackoverflow.com/users/5083142/orlando-paredes-hamsho">StackOverflow</a>?</li>
                    </ul>
		        </div>
			</div>
		);
	}
	
}

export default Cover;