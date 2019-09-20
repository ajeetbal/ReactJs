import React from 'react';
import {Component} from 'react';
import Input from './UserInput/UserInput';
import Output from './UserOutput/UserOutput'
import logo from './logo.svg';
import './App.css';
import './UserOutput/UserOutput.css'
class App extends Component {

  state={
    name:'ajeet'
  }

  changeNameHandler=(event)=>{
    this.setState({
      name:event.target.value
    });
  }

  
  render() {
    return(
    <div className="basic">
      <Input name={this.state.name} changeName={this.changeNameHandler}></Input>
      <Output name={this.state.name}></Output>
    </div>
    )
  
}
}
export default App;
