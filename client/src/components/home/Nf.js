import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Nf extends Component {
  render(){
    return(
      <footer className="text-light p-5">
      <div className="container py-3">
      <div className="row">
      <div className="col-lg-6">
      <h1 className="text-center font-weight-bolder text-uppercase mt-3">read health related articles</h1>
      </div>
      <div className="col-lg-6 text-center">
      <Link to="/" className="btn btn-danger btn-block text-uppercase mt-4 px-4 py-2">
      check out now !</Link>
      </div>
      </div>
      </div>
      </footer>
    );
  }
}
