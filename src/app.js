import React from 'react';
import { Component } from 'react';
import _ from 'lodash';

import SlideShow from './components/slide-show.jsx';
import Cover from './components/slides/Cover.jsx';
import About from './components/slides/About.jsx';

export default class App extends Component {
  constructor(props){
		super(props);
  }
  
  render(){
	return (
		<SlideShow transition="opacity" theme="orlando">
			<Cover />
			<About />
		</SlideShow>
	);
  }
}
