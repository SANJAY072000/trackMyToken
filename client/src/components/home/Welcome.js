import React,{Component} from 'react';
import Banner from './Banner';
import Feature from './Feature';
import Ap from './Ap';
import Nf from './Nf';

export default class Welcome extends Component {
  static defaultProps={
    d:new Date()
  };
  render(){
    return(
      <div>
      <Banner/>
      <Feature/>
      <Ap/>
      <Nf/>
      <div className="my-5 text-center font-weight-bolder">
      copyright@ {this.props.d.getFullYear()}<a href="https://sanjay072000.github.io/newFrontEnd/Portfolio" rel="noopener noreferrer" target="_blank"
      title="Sanjay Here !"> Sanjay Here !</a>
      </div>
      </div>
    );
  }
}
