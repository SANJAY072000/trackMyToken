import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class AddCredit extends Component {
  render(){
    return(
      <div className='mt-3 p-4 text-light adc'>
      <div className='container'>
      <div className='row'>
      <div className='col-md-4 d-block d-md-none'>
      <h6 className='text-center mt-0 mt-md-2 text-uppercase'>
      <span className='mr-3'>Credits</span> :
      <span className='ml-4 crdes bg-warning text-dark font-weight-bolder px-2 py-1 shadow-lg'>0</span>
      </h6>
      </div>
      <div className='col-md-4 d-none d-md-block'>
      <h5 className='text-center mt-0 mt-md-2 text-uppercase'>
      <span className='mr-3'>Credits</span> :
      <span className='ml-4 crdes bg-warning text-dark font-weight-bolder px-2 py-1 shadow-lg'>0</span>
      </h5>
      </div>
      <div className='col-md-4 text-center my-3 my-md-0'>
      <button className='btn adcbt btn-block font-weight-bolder text-uppercase shadow-lg'>
      Add Credits <i className="fa fa-usd ml-1" aria-hidden="true"></i>
      </button>
      </div>
      <div className='col-md-4 d-block d-md-none'>
      <h6 className='text-center text-uppercase mt-0 mt-md-2'>
      logout
      <i className="fa fa-sign-out ml-2" aria-hidden="true"></i>
      </h6>
      </div>
      <div className='col-md-4 d-none d-md-block'>
      <h5 className='text-center text-uppercase mt-0 mt-md-2'>
      logout
      <i className="fa fa-sign-out ml-2" aria-hidden="true"></i>
      </h5>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
