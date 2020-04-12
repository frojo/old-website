import React from 'react';
import {BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import Info from './pages/info';
import Contact from './pages/contact';
import SelectedWorks from './pages/selected-works';
import Blog from './pages/blog';
import BlogPost from './pages/blogpost';
import ProjectPage from './pages/project';
import {Secrets, 
	Bloomfield,
	Haven,
	Sail,
	WordGarden} from './projects';
import {WordGardenBlog
	} from './blogposts';


function Routes(props) {
  return (
    <Router>
      <Switch>
	<Route path='/info'>
	  <Info />
	</Route>


	<Route path='/selected-works'>
	  <SelectedWorks />
	</Route>

	<Route path='/contact'>
	  <Contact />
	</Route>


	// projects
	<Route path='/wdywycs'>
	  <Secrets />
	</Route>

	<Route path='/bloomfield'>
	  <Bloomfield />
	</Route>

	<Route path='/haven'>
	  <Haven />
	</Route>

	<Route path='/word-garden'>
	  <WordGarden />
	</Route>
    
	// blog posts
	<Route path='/word-garden-blog'>
	  <WordGardenBlog />
	</Route>

	<Route path='/blog'>
	  <Blog />
	</Route>

	<Route path='/'>
	  <SelectedWorks />
	</Route>
      </Switch>
    </Router>
  );
}
export default Routes;
