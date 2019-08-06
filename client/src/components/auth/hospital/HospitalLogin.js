import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class HospitalLogin extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }
  render(){
    return(
      <div className='mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h4 className='font-weight-bolder text-center text-uppercase'>
              <span className='hle mr-3'><i className="fa fa-sign-in mr-4" aria-hidden="true"></i>login here</span> <br/><br/>
              <span className='lead'>for the hospitals/clinics</span>
              </h4>
            </div>
          </div>
          <form className='p-5 mt-5 hlfm border rounded' onSubmit={this.onSubmit}>
  <div className="form-group">
    <label for="exampleInputEmail1">Hospital/Clinic's Registered Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" onChange={this.onChange}/>
  </div>
  <div className="form-group my-5">
    <label for="exampleInputPassword1">Hospital/Clinic's Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" onChange={this.onChange}/>
  </div>
  <button type="submit"
    className="mt-5 btn btn-block edibt rounded-0">Login Here <i className="fa fa-sign-in ml-2" aria-hidden="true"></i></button>
</form>
<h6 className='text-center text-muted mr-2 my-4'>Not registered yet ?
<Link to='/'> Register Here !</Link></h6>
        </div>
      </div>
    );
  }
}
