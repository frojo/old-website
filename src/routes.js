import React from 'react';
import {BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import Info from './pages/info';
import SelectedWorks from './pages/selected-works';
import ProjectPage from './pages/project';
import Secrets from './projects';


function Routes(props) {
  return (
    <Router>
      <Switch>
	<Route path='/info'>
	  <Info />
	</Route>

	<Route path='/wdywycs'>
	  <Secrets />
	</Route>

	<Route path='/'>
	  <SelectedWorks />
	</Route>
      </Switch>
    </Router>
  );
}
export default Routes;
