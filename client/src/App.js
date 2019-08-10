import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/home/Welcome';
import News from './components/News';
import HospitalLogin from './components/auth/hospital/HospitalLogin';
import HospitalRegister from './components/auth/hospital/HospitalRegister';
import HospitalDashboard from './components/dashboards/hospitalDashboard/HospitalDashboard';

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
      </div>
      </Router>
    );
  }
}
