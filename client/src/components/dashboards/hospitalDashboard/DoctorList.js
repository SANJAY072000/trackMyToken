import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class DoctorList extends Component {
  componentDidMount(){
    axios({
      url:'/api/doctor/listOfDoctors',
      headers:{
        'Authorization':localStorage.getItem('hospital')
      }
    })
    .then(res=>this.setState({arr:res.data}))
    .catch(err=>console.log(err));
  }
  constructor(props){
    super(props);
    this.state = {
      arr:[]
    };
    this.onClick=this.onClick.bind(this);
  }
  onClick(){
    axios({
      url:'/api/auth/delete',
      method:'delete',
      headers:{
        Authorization:localStorage.getItem('hospital')
      }
    })
    .then(res=>{console.log(res.data.Deleted);localStorage.removeItem('hospital')})
    .catch(err=>console.log(err));
  }
  render(){
    return(
      <div className='mt-5'>
      <div className='container'>
        {
          this.state.arr.map((a,i)=>
          <div className='row border pt-4 my-5 shadow rounded' key={i}>
          <div className='col-md-6 text-center'>
          <img src={a.img} alt='Unavailable' width='350'
          height='350' className='img-fluid rounded-circle'/>
          </div>
          <div className='col-md-6 my-5 lead d-block d-md-none text-center'>
          {`Name : ${a.name}`}
          <br/>
          <br/>
          {`Id : ${a._id}`}
          </div>
          <div className='col-md-6 my-5 lead d-none d-md-block'>
          {`Name : ${a.name}`}
          <br/>
          <br/>
          {`Id : ${a._id}`}
          </div>
          <div className='col-12 d-flex justify-content-between mt-3 pt-3 px-5'
          style={{"background":"#e9ecef"}}>
          <h6 className='text-uppercase'>token  :
          <span className='ml-2 crdes bg-info text-light p-2'>{a.currentToken}
          </span></h6>
        <Link to={`/edit-${a._id}`}>Edit Status</Link>
          <p className=''>Status :
          <span className={a.status==='Active'?'ml-2 crdes bg-success text-light p-2':'ml-2 crdes bg-danger text-light p-2'}>{a.status}
          </span></p>
          </div>
          </div>
        )}
      <div className={this.props.credits>0?'mt-5 d-flex justify-content-center mx-auto w-50':'d-none'}>
      <Link to='/addDoctor' className='btn btn-outline-info btn-block text-uppercase'>
      add a doctor <i className="fa fa-user-md" aria-hidden="true"></i>
      </Link>
      </div>
      <div className='my-4 d-flex justify-content-center mx-auto w-50'>
      <Link to='/hospitalLogin' onClick={this.onClick} className='btn btn-outline-danger btn-block text-uppercase'>
      Delete the account <i className="fa fa-times" aria-hidden="true"></i>
      </Link>
      </div>
      </div>
      </div>
    );
  }
}
