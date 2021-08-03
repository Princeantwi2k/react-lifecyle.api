import React, { Component } from "react";
import "./User.css";
class UsersClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        this.setState({
          users: users,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>My users</h1>
        {this.state.users.map((user, idx) => (
          <div key={idx} className="card">
            <h5>Name: {user.name}</h5>
            <p>UserName: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default UsersClass;
