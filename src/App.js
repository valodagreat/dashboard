import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Employee from './components/employee/Employee';
import DashBoard from './components/dashboard/DashBoard';

class App extends Component {
  state={
    route : 'noProduct',
    title : '',
    url : ''
  }
  handleRouteChange=(route)=>{
    this.setState({route: route})
  }
  handleProjectTitleChange=(e)=>{
    this.setState({title : e.target.value})
  }

  handleProjectUrlChange=(e)=>{
    this.setState({url : e.target.value})
  }

  render(){
  return (
    <div className="App">
      <Navigation/>
      <div className='d-flex justify-content-between media'>
        <Employee route={this.state.route} onRouteChange={this.handleRouteChange}
        url={this.state.url} title={this.state.title}  titleChange={this.handleProjectTitleChange} urlChange={this.handleProjectUrlChange} />
        <DashBoard/>
      </div>
    </div>
  );
  }
}

export default App;
