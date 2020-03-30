import React, { Component } from 'react';
import {
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import UsersDetails from './UsersDetails';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: []
    }
  }
  componentDidMount() {
    fetch(`https://reqres.in/api/users?per_page=12`)
      .then(result => result.json())
      .then(result => {
        this.setState({ Users: result.data });
      })
  }
  render() {
    if (this.state.Users.length !== 0) {
      let UsersInfo = this.state.Users.map((usersData) => {
        return (
          <tr key={usersData.id}>
            <td><Link to={{ pathname: "/usersDetails", data: { usersData } }}>{usersData.first_name + ' ' + usersData.last_name || " "}</Link></td>
            <td><Link to={{ pathname: "/usersDetails", data: { usersData } }}><img src={usersData.avatar} alt="User-Image" /></Link></td>
          </tr>
        );
      })
      return (
        <div>
          <h2>Users</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {UsersInfo}
            </tbody>
          </table>
          <div>
            <Switch>
              <Route path="/usersDetails" component={UsersDetails} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Users</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
              </tr>
            </thead>
          </table>
        </div>
      );
    }
  }

}



export default Home;