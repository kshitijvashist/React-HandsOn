import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comp1 from './Component/comp1'



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
     
      fetch('http://localhost:8080/employee/get')
      .then(res=>res.json())
      .then(json=>{
  
        this.setState({
          isLoaded:true,
  items:json
  
        })
      });
    }
    
    myFunc= ()=>
    {
      const data = {empNo: "2"};
      alert("helo");
      fetch('http://localhost:8080/employee/delete', {
        method: 'delete',
        mode: 'cors',
        body: JSON.stringify({empNo:"3"}),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Accept': 'application/json',
            'Origin': ''
        }
    }).then(res => {
      res.text();
        return res;
    }).catch(err => alert(err));
    }

    createFunc= ()=>
    {
      const data = {empNo: "20",empName:"Kshitij",empAge:"26",empSal:"400000"};
      alert("helo");
      fetch('http://localhost:8080/employee/create', {
        method: 'put',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Accept': 'application/json',
            'Origin': ''
        }
    }).then(res => {
      console.log(res.text());
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
