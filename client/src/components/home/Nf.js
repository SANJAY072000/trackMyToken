import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Nf extends Component {
  render(){
    return(
      <footer className="text-light">
      <div className="container pt-5">
      <div className="row">
      <div className="col-lg-6">
      <h1 className="text-center font-weight-bolder text-uppercase mt-4">read health related articles</h1>
      </div>
      <div className="col-lg-6 text-center">
      <Link to="/" className="btn btn-danger text-uppercase mt-4">check out now !</Link>
      </div>
      </div>
      </div>
      </footer>
    );
  }
}
