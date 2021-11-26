import React, { Component, Suspense } from 'react';
import './App.css';
import Sidebar from './components/Sidebar.js';
import Introduction from './components/Introduction.js';
import About from './components/About.js';
import Education from './components/Education.js';
import Experience from './components/Experience.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import WhatIDo from './components/WhatIDo';
import './i18n.js';

class App extends Component {
	
  render() {	
	return (	  
		<Suspense fallback="loading">
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<WhatIDo></WhatIDo>
					<Experience></Experience>
					<Education></Education>
					<Skills></Skills>
					<Projects></Projects>
          	</div>
      	</div>
      </div>
	  </Suspense>
    );
  }
}

export default App;
