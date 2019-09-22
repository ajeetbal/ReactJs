import React,{Component} from 'react';
import './App.css';
import Validate from './Validate/Validate';
import Char from './Char/Char';
class App extends Component {

  state={
    name:''
  }

  changeNameHandler=(event)=>{
    this.setState({
      name:event.target.value
    });
  }

  eleminateHandler=(index)=>{
    const list=this.state.name.split('');
    list.splice(index,1);
    this.setState({
      name:list.join('')
    });
  }


  render(){
    const items=this.state.name.split('').map((char,index)=>{
       return <Char character={char} eleminate={()=>this.eleminateHandler(index)}/>; 
    });
    return (
      <div className="App">
          <input type="text" onChange={this.changeNameHandler} value={this.state.name}/>
        <Validate name={this.state.name}/>
        {items}
      </div>
      
    );
  }
  
}

export default App;
