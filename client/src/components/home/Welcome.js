import React,{Component} from 'react';
import Banner from './Banner';
import Feature from './Feature';
import Ap from './Ap';
import Nf from './Nf';
import HospitalDashboard from '../dashboards/hospitalDashboard/HospitalDashboard';
import PatientDashboard from '../dashboards/patientDashboard/PatientDashboard';

export default class Welcome extends Component {
  static defaultProps={
    d:new Date()
  };
  render(){
    let cm;
    if(localStorage.getItem('hospital')||localStorage.getItem('patient')){
    if(localStorage.getItem('hospital'))
    cm=(<HospitalDashboard/>);
    else if(localStorage.getItem('patient'))
    cm=(<PatientDashboard/>);}
    else cm=(<div>
    <Banner mh={this.props.history}/>
    <Feature/>
    <Ap/>
    <Nf/>
    <div className="my-5 text-center font-weight-bolder">
    copyright@ {this.props.d.getFullYear()}<a href="https://sanjay072000.github.io/newFrontEnd/Portfolio" rel="noopener noreferrer" target="_blank"
    title="Sanjay Here !"> Sanjay Here !</a>
    </div>
    </div>);
    return(
      <div>
        {cm}
      </div>
    );
  }
}
