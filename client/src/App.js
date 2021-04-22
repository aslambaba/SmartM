import React from 'react';
import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/login/Login';
import Dashboard from './pages/Dashboard'

import StudentMain from './pages/StudentMain'
import AddStudent from './pages/AddStudent';
import UpdateStudent from './pages/UpdateStudent';
import ViewStudent from './pages/ViewStudent';

import TeacherMain from './pages/TeacherMain';
import AddTeacher from './pages/AddTeacher';
import UpdateTeacher from './pages/UpdateTeacher';
import ViewTeacher from './pages/ViewTeacher';

import FeesChallans from './pages/Payments';
import StudentFees from './components/Payments/StudentFees';
import TeacherSalary from './components/Payments/TeachersSalary';

import Classes from './pages/classes/Classes';
import SingleClass from './pages/classes/SingleClass';
import VSinClass from './pages/classes/VSinClass';

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

          <Route exact path='/login' component={Login}></Route>

          <Route exact path='/' component={Dashboard}></Route>
          <Route exact path='/students' component={StudentMain}></Route>
          <Route path='/students/addstudent' component={AddStudent}></Route>
          <Route path='/students/viewstudent/:id' component={ViewStudent}></Route>
          <Route path='/students/updatestudent/:id' component={UpdateStudent}></Route>


          <Route exact path='/teachers' component={TeacherMain}></Route>
          <Route path='/teachers/addteacher' component={AddTeacher}></Route>
          <Route path='/teachers/viewteacher/:teacherId' component={ViewTeacher}></Route>
          <Route path='/teachers/updateteacher/:teacherId' component={UpdateTeacher}></Route>

          <Route exact path='/classes' component={Classes}></Route>
          <Route exact path='/classes/:classNo' component={SingleClass}></Route>
          <Route path='/classes/:class/:ClassSection' component={VSinClass}></Route>
          <Route exact path='/settings' component={SettingMain}></Route>
          <Route path='/settings/general' component={GeneralSetting}></Route>
          <Route path='/settings/users' component={UsersSettings}></Route>


          <Route exact path='/payments' component={FeesChallans}></Route>
          <Route exact path='/payments/students' component={StudentFees}></Route>
          <Route exact path='/payments/teachers' component={TeacherSalary}></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
