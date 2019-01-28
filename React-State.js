import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comp1 from './Component/comp1'



class MainComponent extends Component{
    constructor(props){
super(props);
        this.state={
            Java2:"Exception Handling",
            Java5:"Generic Classes",
            Java7:"Try With Resources",
            Java8:"Lambda Expression"
        }
    }

    render()
    {
        return(
<div>

   Java 2 Feature:-  {this.state.Java2}<br />
   Java 5 Feature:-  {this.state.Java5}<br />
   Java 7 Feature:-  {this.state.Java7}<br />
   Java 8 Feature:-  {this.state.Java8}
    
   
</div>

        );


    }
}





export default MainComponent;
