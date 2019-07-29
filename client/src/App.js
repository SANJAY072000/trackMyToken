import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/home/Welcome';
import News from './components/News';

export default class App extends Component {
  render(){
    return(
      <Router>
      <div>
      <Navbar/>
      <Route path='/' exact component={Welcome}/>
      <Route path='/news' component={News}/>
      </div>
      </Router>
    );
  }
}
