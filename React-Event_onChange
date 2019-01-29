import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comp1 from './Component/comp1'



class MainComponent extends Component{
    constructor(props){
super(props);
        this.state={
            myValue:"Write Anything Here...."
            
        }
        this.updateMyValue=this.updateMyValue.bind(this);
        
    }
    updateMyValue(e)
    {
        this.setState({myValue:e.target.value});
    }
    render()
    {
        return(
<div>

  <input type="text" value={this.state.myValue} onChange={this.updateMyValue} />
  <br />
  {this.state.myValue}
   
</div>

        );


    }
}





export default MainComponent;
