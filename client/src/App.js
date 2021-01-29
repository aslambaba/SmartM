import React from 'react';
import StudentMain from './components/StudentMain'
import Dashboard from './components/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      < Router>
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route exact path='/students' component={StudentMain}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
