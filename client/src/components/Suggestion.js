import React,{Component} from 'react';
import axios from 'axios';

export default class Suggestion extends Component {
componentDidMount(){
  setInterval(()=>this.setState({
    nameEmpty:false,
    emailEmpty:false,
    textEmpty:false
  }),7000);
}
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email:'',
      text:'',
      nameEmpty:false,
      emailEmpty:false,
      textEmpty:false
    };
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }
  onChange(e){
    if(e.target.name==='name')
    this.setState({[e.target.name]:e.target.value.toUpperCase()});
    else this.setState({[e.target.name]:e.target.value});
  }
  onSubmit(e){
    e.preventDefault();
    if(!(this.state.email.length&&this.state.name.length&&this.state.text.length)){
    if(!this.state.email.length)
    this.setState({emailEmpty:true});
    if(!this.state.name.length)
    this.setState({nameEmpty:true});
    if(!this.state.text.length)
    this.setState({textEmpty:true});
  }
    else{
    axios({
      url:'/api/appointment/send',
      method:'post',
      data:{
        name:this.state.name,
        email:this.state.email,
        text:this.state.text
      }
    })
    .then(res=>{
      this.props.history.push('/suggestions');
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
              <span className='hle mr-3'><i className="fa fa-lightbulb-o mr-4" aria-hidden="true"></i>Any suggestion</span> <br/><br/>
              <span className='lead'>for the improvement of this app</span>
              </h4>
            </div>
          </div>
          <form className='p-5 mt-5 hlfm border rounded' onSubmit={this.onSubmit}>
      <div className="form-group">
      <label htmlFor="exampleInputEmail1">Your Name</label>
      <input type="text"
      className={this.state.nameEmpty?"form-control is-invalid":"form-control"}
      name="name" id="exampleInputEmail1" aria-describedby="emailHelp"
      placeholder="Enter Your Name" value={this.state.name} onChange={this.onChange}/>
      <p className='text-danger mt-3'>
      {this.state.nameEmpty?'Please enter your name.':''}
      </p>
      </div>
      <div className="form-group my-5">
      <label htmlFor="exampleInputPassword1">Your Email</label>
      <input type="email" className={this.state.emailEmpty?"form-control is-invalid":"form-control"} name="email"
      id="exampleInputPassword1" placeholder="Enter Your Email" onChange={this.onChange} value={this.state.email}/>
      <p className='text-danger mt-3'>
      {this.state.emailEmpty?'Please enter your email.':''}
      </p>
      </div>
      <div className="form-group my-5">
      <label htmlFor="exampleInputPassword1">Your Suggestion</label>
      <textarea style={{"height":"200px"}} className={this.state.textEmpty?"form-control is-invalid":"form-control"} name="text" id="exampleInputPassword1" placeholder="Enter Your suggestion" onChange={this.onChange} value={this.state.text}/>
      <p className='text-danger mt-3'>
      {this.state.textEmpty?'Sorry ! You forgot to enter your message.':''}
      </p>
      </div>
      <button type="submit" className="mt-5 btn btn-block edibt rounded-0">
      Send <i className="fa fa-paper-plane ml-2" aria-hidden="true"></i></button>
      </form>
        </div>
      </div>
    );
  }
}
