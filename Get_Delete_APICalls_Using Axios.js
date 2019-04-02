import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comp1 from './Component/comp1'
import axios from 'axios';


class App extends Component {
    state = { show: false };
  
    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };
    
    constructor(props){
      super(props);
      this.state={
        items:[],
        isLoaded:false,
  
      }
    }
  
    componentDidMount()
    {
     
      axios.get('http://localhost:8080/employee/get')
      .then(res=>res.data)
      .then(json=>{
  
        this.setState({
          isLoaded:true,
  items:json
  
        })
      });
    }
    
    myFunc= ()=>
    {
      
      alert("helo");
      axios.delete('http://localhost:8080/employee/delete/4')
    .then(res => {
      console.log(res.data);
        return res;
    }).catch(err => alert(err));
    }

    createFunc= ()=>
    {
      const data = {empNo: "17",empName:"Vizag",empAge:"19",empSal:"200000"};
      alert("helo");
      axios.post('http://localhost:8080/employee/createEmployee', {data}
    ).then(res => {
     console.log(res.data);
        return res;
    }).catch(err => alert(err));
    }
    render() {
      var {isLoaded,items}=this.state;
      return (
        <div className="App"> 
      
      <h1>Employee Management</h1>
       
      
        <table border="1">
          <tr>  
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
  
          </tr>
         
          {items.map(item=>(
             <tr>
            <td >
            {item.empNo}</td>
            
            <td>{item.empName}</td>
  
            <td>{item.empAge}</td>
  
            <td>{item.empSal}</td>
  
            <td><input type="button" value="Edit" class="button" /></td>
  
            <td> <input type="button" value="Delete" class="button" onClick={this.myFunc}/></td>
            </tr>
            
           
  
          ))}
          <tr><input type="button" value="Create" name="Create"  onClick={this.createFunc}/></tr>
          </table>
        </div>
      );
     
     
    }
  }
  
  export default App;
