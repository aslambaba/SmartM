import React from 'react';
import './style.css';
import Dashboard from './pages/Dashboard'
import StudentMain from './pages/StudentMain'
import AddStudent from './pages/AddStudent';
import TeacherMain from './pages/TeacherMain';

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
          <Route path='/students/addstudent' component={AddStudent}></Route>
          <Route path='/teachers' component={TeacherMain}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
