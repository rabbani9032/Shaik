import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

class UserDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      userDetails: [],
      sampleDta :[],
    }
  }
  componentDidMount(){
    if(this.props.location.data){
      this.setState({ userDetails: this.props.location.data.usersData });
    } else {
      window.location.href = window.location.origin;
    }
  }
  
  render(){    
    return (
      <div> 
        <h2>User Details</h2> 
        <p>First Name : {this.state.userDetails.first_name || " "}</p>
        <p>Last Name : {this.state.userDetails.last_name || " "}</p>
        <p>Email : {this.state.userDetails.email || " "}</p>
        <h4><Link to="/"> Back to Users</Link></h4>
        <div>
          <Switch>
          <Route path="/"  />
          </Switch>
        </div>
      </div>
    );

  }
}

export default UserDetails;