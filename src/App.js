import './App.css';
import { Switch, Route } from 'react-router-dom';
import Example from './views/Example';
import Home from './views/Home';
import Login from './views/Login';
import NavBar from './components/NavBar';
import Page2 from './views/Page2';
import Page3 from './views/Page3';
import Logout from './views/Logout';
import ProtectedRoute from './components/ProtectedRoute'
import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  constructor() {
    super();
    this.state={
      user:'',
      test:'This is a test', 
      token:''
    }
  }

static getDerivedStateFromProps=(props,state)=>{
  return {"token":localStorage.getItem('token')}
}

setUser = (user)  =>{
  this.setState({user:user},()=>console.log("User is",this.state.user));
}

setToken=(token)=>{
  this.setState({token})
}

doLogout=()=>{
  localStorage.setItem("token",'')
  this.setToken('')
}

  render() {
    return (
      <div>
        <NavBar token={this.state.token}/>

        <Switch>
          <ProtectedRoute token={this.state.token} exact path = "/" render={()=><Home/>}/>
          <ProtectedRoute token={this.state.token} exact path = "/page2"  render={()=><Page2 user={this.state.user} test={this.state.test} setUser={this.setUser}/>}/>
          <ProtectedRoute token={this.state.token} exact path = "/page3" render={()=><Page3 user={this.state.user}/>}/>
          <ProtectedRoute token={this.state.token} exact path = "/example" render={()=><Example/>}/>
          <ProtectedRoute token={this.state.token} exact path = "/logout" render={()=><Logout doLogout={this.doLogout}/>}/>

          <Route exact path = "/login" render={()=><Login setToken={this.setToken}/>}/>
        </Switch>

      </div>
    )
  }
}
