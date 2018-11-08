import React, {Component} from 'react'
import CourseList from "./CourseList";

export default class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      selectedUser: {}
    }
  }
  selectUser = user =>
    this.setState({
      selectedUser: user
    })
  componentDidMount() {
    fetch("http://localhost:8080/api/user")
      .then(response => response.json())
      .then(users => this.setState({
        users: users
      }))
  }
  render() {
    return(
      <div>
        <h2>Users</h2>
        <ul>
          {
            this.state.users.map((user, idx) =>
              <li onClick={() => this.selectUser(user)} key={idx}>
                {user.username} {user.id}
              </li>
            )
          }
        </ul>
        {this.state.selectedUser.id && <CourseList userId={this.state.selectedUser ? this.state.selectedUser.id : -1}/>}
      </div>
    )
  }
}