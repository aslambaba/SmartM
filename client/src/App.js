import React from 'react';
import './style.css';
import Dashboard from './pages/Dashboard'
import StudentMain from './pages/StudentMain'
import AddStudent from './pages/AddStudent';
import TeacherMain from './pages/TeacherMain';
import AddTeacher from './pages/AddTeacher';
import FeesChallans from './pages/Payments';
import StudentFees from './components/Payments/StudentFees';
import TeacherSalary from './components/Payments/TeachersSalary';
import SettingMain from './pages/SettingMain';
import GeneralSetting from './components/Settings/GeneralSettings';
import UsersSettings from './components/Settings/UsersSettings';

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
          <Route exact path='/teachers' component={TeacherMain}></Route>
          <Route exact path='/teachers/addteacher' component={AddTeacher}></Route>
          <Route exact path='/settings' component={SettingMain}></Route>
          <Route exact path='/payments' component={FeesChallans}></Route>
          <Route exact path='/payments/students' component={StudentFees}></Route>
          <Route exact path='/payments/teachers' component={TeacherSalary}></Route>
          <Route path='/settings/general' component={GeneralSetting}></Route>
          <Route path='/settings/users' component={UsersSettings}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
