import React from 'react';
import {BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import Info from './info';
import SelectedWorks from './selected-works';


function Routes(props) {
  return (
    <Router>
      <Switch>
	<Route path='/info'>
	  <Info />
	</Route>
	<Route path='/'>
	  <SelectedWorks />
	</Route>
      </Switch>
    </Router>
  );
}
export default Routes;
