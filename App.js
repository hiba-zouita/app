import React , { Component } from 'react';
import { BrowserRouter ,Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Blog from './components/bloc';
//import Items from './components/items';
//import {x as num} from './module';
//import Test from './module';
//import Child from './child';
import Nav from './components/nav';
class App extends Component{
render(){
  return(
    <BrowserRouter>
     <div className="App">
       <Nav/>
       <Route  exact path="/" component={Home}/>
       <Route path="/about" component={About}/>
       <Route path="/bloc" component={Blog}/>




     </div>
    </BrowserRouter>
  );
}
}
export default App;

















/*class App extends Component{
  state={
    name:''
  }
  handleChange=(e)=>{
    this.setState({
      name : e.target.value
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state.name)
  }
  render(){
    return(
      <div className ="App">
        form part 1
        <form onSubmit={this.handleSubmit}>
          <input type="text"/>
          <button onChange ={this.handleChange}>submit</button>
        </form>
          <p>{this.state.name}</p> 
      </div>
    );
  }
}
*/















/*items

class App extends Component {
  state={
    items :[
     {id : 1 ,name: 'hiba ',age:20},
     {id : 2 ,name: 'zouita ',age:21},
     {id : 2 ,name: 'zouita ',age:21}

    ]
  }
  render(){
    return(
      <div className="App">
        listes items 
        <Items items={this.state.items}/>
      </div>
    );
  }
}
export default App;
*/















  /*state={
    name:'hiba',
    age: 21
  }
  change=()=>{
    this.setState({
      name :'zouita',
      age : 22
    })
  }
  render(){
    return(
      <div className="App">
        <button onClick={this.change}> change state </button>
        <Child test ={this.state.name}/>
        <p>{this.state.age}</p>

      </div>

    )
  }*/
  /*Test=()=>{
    console.log(this.state.name)
  }
  handleClick(){
    console.log(this.state.name);
  }
  render(){
    return(
      <div className="App">
        <Child/>
        {this.Test()}
        <button onClick= {this.test}>click</button> 
        */
    
 


