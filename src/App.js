import React, { Component, Suspense } from 'react';
import './App.css';
import Sidebar from './components/Sidebar.js';
import Introduction from './components/Introduction.js';
import About from './components/About.js';
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
          	</div>
      	</div>
      </div>
	  </Suspense>
    );
  }
}

export default App;
