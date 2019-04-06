import React, { Component } from 'react';

class Cover extends Component {
	
	constructor(props){
		super(props);
	}
	
	render(){
		
		return (
			<div className={"slide-transition cover"}>
				<div className="cover-content">
					<div className="circle">
						<img src="https://avatars0.githubusercontent.com/u/10575958?v=3&u=d2cd301e42098664d799ae09aee2e0b9032e30ba&s=400" />
					</div>
					<h1 className={"cover-h1"}>Orlando Paredes Hamsho</h1>
					<h2 className={"cover-h2"}>Web Developer | Aspiring UX Designer | Unremarkable Sports Sportster</h2>
				</div>
			</div>
		);
	}
	
}

export default Cover;