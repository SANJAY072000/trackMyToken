import React,{Component} from 'react';
import axios from 'axios';

const key='8efb4d00ecb5445d9c27a0addb9bd51e';
export default class News extends Component {
  componentDidMount(){
    axios({
      url:`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${key}`,
    })
    .then(res=>{
      this.setState({articles:res.data.articles})
    })
    .catch(err=>console.log(err));
  }
  constructor(props){
    super(props);
    this.state = {
      articles:[]
    };
  }
  render(){
    return(
      <div>
      <div className="container mt-5">
      {this.state.articles.map((a,i)=><Fm key={i} rd={a}/>)}
      </div>
      </div>
    );
  }
}


class Fm extends Component {
  render(){
    return(
      <div className="row">
      <div className="col-12">
      <img src={this.props.rd.urlToImage} width="300" height="300" alt="Unavailable" className="mx-auto d-block img-fluid mt-5"/>
      </div>
      <div className="col-12">
      <h3 className="font-weight-bolder text-center mt-5 text-uppercase" style={{"fontFamily": "'Catamaran', sans-serif"}}>{this.props.rd.title}</h3>
      <p className="lead mt-5">{this.props.rd.description}</p>
      <a href={this.props.rd.url} target="_blank" rel="noopener noreferrer">Read more ...</a>
      </div>
      </div>
    );
  }
}
