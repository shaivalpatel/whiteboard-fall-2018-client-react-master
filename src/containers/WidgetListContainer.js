import React from 'react'
import {connect} from 'react-redux'
import WidgetList from "../components/WidgetList";

const stateToProperties = state =>({
  widgets: state.widgets
})

const dispathToProperties = dispatch => ({
  loadWidgets: (userId, courseId, moduleId, lessonId, topicId) => {
    let url = "http://localhost:8080/api/user/"
    url += userId
    url += "/course/"
    url += courseId
    url += "/module/"
    url += moduleId
    url += "/lesson/"
    url += lessonId
    url += "/topic/"
    url += topicId
    url += "/widget"
    fetch(url)
      .then(response => response.json())
      .then(widgets => dispatch({
          type: 'LOAD_WIDGETS',
          widgets: widgets
        })
      )
  }
})

const WidgetListContainer = connect
(stateToProperties, dispathToProperties)(WidgetList)

export default WidgetListContainer