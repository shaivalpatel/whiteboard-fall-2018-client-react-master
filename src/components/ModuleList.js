import React, {Component} from  'react'
import LessonList from "./LessonList";

export default class ModuleList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modules: [],
      selectedModule: {}
    }
  }
  componentDidUpdate(prevPros) {
    if(prevPros.courseId != this.props.courseId) {
      fetch("http://localhost:8080/api/course/" + this.props.courseId + "/module")
        .then(response => response.json())
        .then(modules => this.setState({
          modules: modules
        }))
    }
  }
  selectModule = module =>
    this.setState({
      selectedModule: module
    })
  render() {
    return(
      <div>
        <h2>Modules</h2>
        <ul>
        {
          this.state.modules.map((module, idx) =>
            <li onClick={() => this.selectModule(module)} key={idx}>
              {module.title} {module.id}
            </li>
          )
        }
        </ul>
        <LessonList userId={this.props.userId} courseId={this.props.courseId} moduleId={this.state.selectedModule.id}/>
      </div>
    )
  }
}