import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import * as firebase from 'firebase';
import HospitalLogin from '../../auth/hospital/HospitalLogin';

// initializing the firebase app
var firebaseConfig = {
   apiKey: "AIzaSyD3Iwk34YMrbEW34J9B62dUneFEm4LYokw",
   authDomain: "trackmytoken.firebaseapp.com",
   databaseURL: "https://trackmytoken.firebaseio.com",
   projectId: "trackmytoken",
   storageBucket: "trackmytoken.appspot.com",
   messagingSenderId: "191737057361",
   appId: "1:191737057361:web:1cc427652c268fa3"
 };
firebase.initializeApp(firebaseConfig);


export default class AddDoctor extends Component {
  render(){
    let cmp;
    if(localStorage.getItem('hospital'))
    cmp=(<Rad/>);
    else cmp=(<HospitalLogin/>);
    return(
      <div>
        {cmp}
      </div>
    );
  }
}

class Rad extends Component {
  componentDidMount(){
    setInterval(()=>this.setState({
    nameEmpty:false}),7000);
  }
  constructor(props){
    super(props);
    this.state = {
      name:'',
      domain:'None',
      img:'',
      file:null,
      nameEmpty:false
    };
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.file=this.file.bind(this);
  }
  file(e){
    this.setState({file:e.target.files[0]});
  }
  onChange(e){
    this.setState({[e.target.name]:e.target.value});
  }
  onSubmit(e){
    e.preventDefault();
    if(!this.state.name)
    this.setState({nameEmpty:true});
    else{
      let stref=firebase.storage().ref(`doctors/${this.state.file.name}`);
      stref.put(this.state.file);
      stref.getDownloadURL()
      .then(url=>{
        let doctor={
          name:this.state.name,
          img:url,
          domain:this.state.domain
        };
        axios({
          url:'/api/doctor/addDoctor',
          method:'post',
          headers:{
            'Authorization':localStorage.getItem('hospital')
          },
          data:doctor
        })
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err));
      })
      .catch(err=>console.log(err));
  }
}
  render(){
    return(
      <div className='mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h4 className='font-weight-bolder text-center text-uppercase'>
              <span className='hle mr-3'><i className="fa fa-user-md mr-4" aria-hidden="true"></i>add doctor</span> <br/><br/>
              <span className='lead'>to your hospitals/clinics</span>
              </h4>
            </div>
          </div>
          <form className='p-5 mt-5 hlfm border rounded' onSubmit={this.onSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Doctor Name</label>
    <input type="text"
      className={this.state.nameEmpty?"form-control is-invalid":"form-control"}
      name="name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter doctor name" value={this.state.name} onChange={this.onChange}/>
    <p className='text-danger mt-3'>
    {this.state.nameEmpty?'Please enter the doctor name.':''}
    </p>
  </div>
  <div className="form-group my-5">
    <label htmlFor="exampleInputPassword1">Choose Domain</label>
    <br/>
    <select name='domain' id='exampleInputPassword1' onChange={this.onChange}>
    <option value='None'>None</option>
    <option value='ENT'>ENT</option>
    <option value='Surgeon'>Surgeon</option>
    <option value='Pathologist'>Pathologist</option>
    <option value='Dentist'>Dentist</option>
    </select>
  </div>
  <div className="form-group my-5">
    <label htmlFor="exampleInputPassword1">Choose An Image</label>
    <br/>
    <input type='file' name='pic' onChange={this.file}/>
  </div>
  <button type="submit" className="mt-5 btn btn-block edibt rounded-0">
  Add Now <i className="fa fa-user-md ml-2" aria-hidden="true"></i></button>
</form>
        </div>
      </div>
    );
  }
}