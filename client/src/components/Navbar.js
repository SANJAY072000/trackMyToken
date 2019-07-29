import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  render(){
    return(
    <nav className="navbar navbar-light py-4" style={{"background":"white"}}>
    <div className="container">
    <Link to='/' className="navbar-brand text-uppercase text-center mx-auto animated infinite pulse">
      <span className="fa-stack fa-lg mr-2">
      <i className="fa fa-plus fa-stack-1x  bdic" aria-hidden="true"></i>
      <i className="fa fa-circle-thin fa-stack-2x text-success" aria-hidden="true"></i>
      </span>
      <span className="font-weight-bold fsty">TrackMy</span><span className="tken text-center">Token</span></Link>
      <ul className="navbar-nav mx-auto">
        <li className="nav-item active">
        <Link to='/'
        className="btn btn-block idbt text-uppercase rounded-0 mb-2 shadow my-4 mt-md-0">
        <i className="fa fa-lightbulb-o mr-2" aria-hidden="true"></i> Want to suggest an idea ?
          </Link>
        </li>
      </ul>
    </div>
  </nav>
    );
  }
}
