import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class DoctorList extends Component {
  render(){
    return(
      <div className='mt-5'>
      <div className='container'>
      <div className='row border pt-4 my-5 shadow rounded'>
      <div className='col-md-6 text-center'>
      <img src='./images/download.jpg' alt='Unavailable' width='200'
      height='200' className='img-fluid rounded-circle'/>
      </div>
      <div className='col-md-6 my-5 lead d-block d-md-none text-center'>
      Name : SANJAY SINGH BISHT
      <br/>
      <br/>
      Id : 15263GD8EG537R
      </div>
      <div className='col-md-6 my-5 lead d-none d-md-block'>
      Name : SANJAY SINGH BISHT
      <br/>
      <br/>
      Id : 15263GD8EG537R
      </div>
      <div className='col-12 d-flex justify-content-between mt-3 pt-3 px-5' style={{"background":"#e9ecef"}}>
      <h6 className='text-uppercase'>token  :
      <span className='ml-2 crdes bg-info text-light p-2'>5
      </span></h6>
      <Link to=''>Edit Status</Link>
      <p className=''>Status :
      <span className='ml-2 crdes bg-danger text-light p-2'>InActive
      </span></p>
      </div>
      </div>
      <div className='mt-5 d-flex justify-content-center mx-auto w-50'>
      <Link to='' className='btn btn-outline-info btn-block text-uppercase'>
      add a doctor <i className="fa fa-user-md" aria-hidden="true"></i>
      </Link>
      </div>
      <div className='my-4 d-flex justify-content-center mx-auto w-50'>
      <Link to='' className='btn btn-outline-danger btn-block text-uppercase'>
      Delete the account <i className="fa fa-times" aria-hidden="true"></i>
      </Link>
      </div>
      </div>
      </div>
    );
  }
}
