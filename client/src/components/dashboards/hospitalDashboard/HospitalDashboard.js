import React,{Component} from 'react';
import AddCredit from './AddCredit';
import DoctorList from './DoctorList';
import HospitalLogin from '../../auth/hospital/HospitalLogin';

export default class HospitalDashboard extends Component {
  render(){
    let cmp;
    if(localStorage.getItem('hospital'))
    cmp=(<div><AddCredit/>
    <DoctorList/></div>);
    else cmp=(<HospitalLogin/>);
    return(
      <div>
      {cmp}
      </div>
    );
  }
}
