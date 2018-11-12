import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const TopicTab = ({courseId,moduleId,lessonId,topic, selectTopic, selected,deleteTopic,getTopicName,}) =>
    <li className="nav-item " >
        <a onClick={() => selectTopic(topic)}
           className={selected ? "nav-link active":"nav-link"}>
            {topic.title}
            <a onClick= {()=> getTopicName(topic.id,topic)}>
                <i className="fa fa-pencil"></i></a>
            <a onClick= {()=>deleteTopic(topic.id)}>
            <i className="fa fa-times"></i></a>
        </a>
    </li>

export default TopicTab