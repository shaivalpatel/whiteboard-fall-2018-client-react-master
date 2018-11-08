import React, {Component} from 'react'
import ModuleList from "./ModuleList";

export default class CourseList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: [],
      selectedCourse: {}
    }
  }
  componentDidMount() {
    fetch("http://localhost:8080/api/user/"+this.props.userId+"/course")
      .then(response=> response.json())
      .then(courses => this.setState({
        courses: courses
      }))
  }
  componentDidUpdate(prevProps) {
    if(prevProps.userId != this.props.userId) {
      fetch("http://localhost:8080/api/user/"+this.props.userId+"/course")
        .then(response=> response.json())
        .then(courses => this.setState({
          courses: courses
        }))
    }
  }
  selectCourse = course =>
    this.setState({
      selectedCourse: course
    })
  render() {
    return(
      <div>
        <h2>Course List</h2>
        <ul>
          {
            this.state.courses.map((course, idx) =>
              <li onClick={() => this.selectCourse(course)}
                  key={idx}>
                {course.title} {course.id}
              </li>
            )
          }
        </ul>
        <ModuleList userId={this.props.userId} courseId={this.state.selectedCourse.id}/>
      </div>
    )
  }
}