import React,{Component} from 'react';
import AddCredit from './AddCredit';
import DoctorList from './DoctorList';
import HospitalLogin from '../../auth/hospital/HospitalLogin';
import axios from 'axios';

export default class HospitalDashboard extends Component {
  componentDidMount(){
    axios({
      url:'/api/doctor/credits',
      headers:{
        'Authorization':localStorage.getItem('hospital')
      }
    })
    .then(res=>this.setState({credits:res.data.credits}))
    .catch(err=>console.log(err));
  }
  constructor(props){
    super(props);
    this.state = {
      credits:0
    };
  }
  render(){
    let cmp;
    if(localStorage.getItem('hospital'))
    cmp=(<div><AddCredit/>
    <DoctorList credits={this.state.credits}/></div>);
    else cmp=(<HospitalLogin/>);
    return(
      <div>
      {cmp}
      </div>
    );
  }
}
