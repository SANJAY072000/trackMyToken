import React,{Component} from 'react';
import Banner from './Banner';
import Feature from './Feature';
import Ap from './Ap';
import Nf from './Nf';

export default class Welcome extends Component {
  render(){
    return(
      <div>
      <Banner/>
      <Feature/>
      <Ap/>
      <Nf/>
      </div>
    );
  }
}
