import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/home/Welcome';
import News from './components/News';
import HospitalLogin from './components/auth/hospital/HospitalLogin';
import HospitalRegister from './components/auth/hospital/HospitalRegister';
import HospitalDashboard from './components/dashboards/hospitalDashboard/HospitalDashboard';
import AddDoctor from './components/dashboards/hospitalDashboard/AddDoctor';
import EditStatus from './components/dashboards/hospitalDashboard/EditStatus';
import PatientDashboard from './components/dashboards/patientDashboard/PatientDashboard';

export default class App extends Component {
  render(){
    return(
      <Router>
      <div>
      <Navbar/>
      <Route path='/' exact component={Welcome}/>
      <Route path='/news' component={News}/>
      <Route path='/hospitalLogin' component={HospitalLogin}/>
      <Route path='/hospitalRegister' component={HospitalRegister}/>
      <Route path='/hospitalDashboard' component={HospitalDashboard}/>
      <Route path='/addDoctor' component={AddDoctor}/>
      <Route path='/edit-:dcid' component={EditStatus}/>
      <Route path='/patientDashboard' component={PatientDashboard}/>
      </div>
      </Router>
    );
  }
}
