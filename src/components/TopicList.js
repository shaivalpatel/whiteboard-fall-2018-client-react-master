import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import widgetReducer from '../reducers/widgetReducer'
import WidgetListContainer from "../containers/WidgetListContainer"

const store = createStore(widgetReducer)

export default class TopicList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: [],
      selectedTopic: {}
    }
  }
  componentDidUpdate(prevProps) {
    if(prevProps.lessonId !== this.props.lessonId) {
      let url = "http://localhost:8080/api/user/"
      url += this.props.userId
      url += "/course/"
      url += this.props.courseId
      url += "/module/"
      url += this.props.moduleId
      url += "/lesson/"
      url += this.props.lessonId
      url += "/topic"
      fetch(url)
        .then(response => response.json())
        .then(topics => this.setState({
          topics: topics
        }))
    }
  }
  selectTopic = topic =>
    this.setState({
      selectedTopic: topic
    })
  render() {
    return(
      <div>
        <h2>Topics</h2>
        <ul>
          {
            this.state.topics.map((topic, idx) =>
              <li onClick={() => this.selectTopic(topic)}
                key={idx}>
                {topic.title} {topic.id}
              </li>
            )
          }
        </ul>
        {
          this.state.selectedTopic.id &&
            <Provider store={store}>
            <WidgetListContainer
              userId={this.props.userId}
              courseId={this.props.courseId}
              moduleId={this.props.moduleId}
              lessonId={this.props.lessonId}
              topicId={this.state.selectedTopic.id}/>
            </Provider>
        }
      </div>
    )
  }
}