import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Ap extends Component {
  render(){
    return(
      <aside classname="mt-5">
        <div className="container">
        <div className="row">
        <div className="col-12 mt-0 mt-md-5">
        <h1 className="text-uppercase mt-5 pt-5 bng1">Welcome to
        </h1>
        <h1 className="text-uppercase bng2 font-weight-bolder">
        TrackMyToken
        </h1>
        </div>
        <div className="col-12 mt-3">
        <p className="lead">
        You could register your hospitals or clinics here to provide token number<br/> service to your patients. Get logged into your dashboard to add doctors <br/>for which dashboard should have credits. For n doctors you
        would <br/>require n credits where 1 credit = 1$.<br/>
        Your patients would be passed a URL and their token for appointment <br/>through which they could track the current status of a particular doctor of <br/>your clinic or hospital.
        </p>
        </div>
        <div className="col-12 mt-4">
        <Link to="/" className="btn text-uppercase text-center btn-primary mr-5 px-4 py-2"><i className="fa fa-user-md mr-2" aria-hidden="true"></i>Add a doctor</Link>
        </div>
        </div>
        </div>
      </aside>
    );
  }
}
