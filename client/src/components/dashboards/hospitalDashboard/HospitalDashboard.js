import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import AddCredit from './AddCredit';
import DoctorList from './DoctorList';

export default class HospitalDashboard extends Component {
  render(){
    return(
      <div>
      <AddCredit/>
      <DoctorList/>
      </div>
    );
  }
}
