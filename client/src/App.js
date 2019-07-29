import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/home/Welcome';

export default class App extends Component {
  render(){
    return(
      <Router>
      <div>
      <Navbar/>
      <Route path='/' exact component={Welcome}/>
      </div>
      </Router>
    );
  }
}
