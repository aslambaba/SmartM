import React from 'react';
import './style.css';
import StudentMain from './pages/StudentMain'
import Dashboard from './pages/Dashboard'
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
