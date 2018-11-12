import React from 'react'
import TopicTab from "./TopicTab";
import TopicService from "../services/TopicService"
import LessonService from "../services/LessonService";
import ModuleService from "../services/ModuleService";
import {createStore} from "redux";
import widgetReducer from "../reducers/WidgetReducer";
import WidgetListContainer from '../containers/WidgetListContainer'
import { Provider } from 'react-redux'
const store = createStore(widgetReducer)


export default class TopicList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topics: [],
            selectedTopic : {}
        }
    }
    setTopics=(topics)=> {
        this.setState({topics : topics})
    }
    setCourseId=(courseId) =>{
        this.setState({courseId : courseId});
    }
    findAllTopicsForLesson=(courseId,moduleId,lessonId)=> {
        TopicService
            .findAllTopics(courseId,moduleId,lessonId)
            .then((topics) => {this.setTopics(topics)});
    }
    setLessonId=(lessonId)=> {
        this.setState({lessonId : lessonId});
    }
    setModuleId=(moduleId)=> {
        this.setState({moduleId : moduleId});
    }
    componentDidMount=() =>{
        this.setModuleId(this.props.moduleId);
        this.setCourseId(this.props.courseId);
        this.setLessonId(this.props.lessonId);
        this.findAllTopicsForLesson(this.props.courseId,this.props.moduleId,this.props.lessonId)
    }
    componentWillReceiveProps=(Props)=>{
        this.setModuleId(Props.moduleId);
        this.setCourseId(Props.courseId);
        this.setLessonId(Props.lessonId);
        console.log(Props.lessonId)
        this.findAllTopicsForLesson(Props.courseId,Props.moduleId,Props.lessonId)
    }
    getTopicName= (topicId,topic) => {
        var newTopicName = prompt("Enter new topic name", topic.title);
        if ( newTopicName != null){
            topic.title =  newTopicName ;
            TopicService.updateTopic(this.state.courseId,this.state.moduleId,this.props.lessonId,topicId,topic).then(() => {
                this.findAllTopicsForLesson(this.state.courseId,this.state.moduleId,this.props.lessonId);
            });
        }
        else{
            alert("Module name cannot be empty")
        }

    }

    addNewTopic = () => {
        console.log(this.props.lessonId)
        TopicService.createTopic(this.state.courseId,this.state.moduleId,this.props.lessonId,this.state.newTopic).then(() => {
            this.findAllTopicsForLesson(this.props.courseId,this.props.moduleId,this.props.lessonId);
        });

    }
    topicChanged = (event) => {
        this.setState({
            newTopic:
                {
                    title:event.target.value,
                    widgets:[]
                }




        })
    }
    deleteTopic = (topicId) => {
        console.log(this.props.lessonId)
        if(this.props.courseId>0 && this.props.moduleId>0){
            TopicService
                .deleteTopic(this.props.courseId,this.props.moduleId,this.props.lessonId,topicId)
                .then((topics) => {this.setTopics(topics)});
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
                <ul className="nav nav-tabs ">
                    {
                        this.state.topics.map((topic, idx) =>

                                <TopicTab
                                    courseId={this.props.courseId}
                                    moduleId={this.props.moduleId}
                                    lessonId={this.props.lessonId}
                                    selected={this.state.selectedTopic === topic}
                                    selectTopic={this.selectTopic}
                                    topic={topic}
                                    key={idx}
                                    topicChanged={this.topicChanged}
                                    addNewTopic={this.addNewTopic}
                                    deleteTopic={this.deleteTopic}
                                    getTopicName={this.getTopicName}/>


                        )
                    }
                </ul>
                <input onChange={this.topicChanged} className="form-control"/>
                <button onClick={this.addNewTopic} className="btn btn-primary form-inline">Add</button>
                {
                    this.state.selectedTopic.id
                &&
                <Provider store={store}>
                    <WidgetListContainer
                        userId={this.props.userId}
                        courseId={this.props.courseId}
                        moduleId={this.props.moduleId}
                        lessonId={this.props.lessonId}
                        topicId={this.state.selectedTopic.id}
                        widgetsInit={this.state.selectedTopic.id.widgets}/>
                </Provider>
                }
            </div>
        )
    }
}

/*
const TopicTabs = ({topics, selectTopic, selectedTopic,deleteTopic,getTopicName ,topicChanged,addNewTopic}) =>
    <ul className="nav nav-tabs ">

        {
            topics.map((topic, index) =>
                <TopicTab
                    selected={selectedTopic === topic}
                    selectTopic={selectTopic}
                    topic={topic}
                    key={index}
                    topicChanged={this.topicChanged}
                    addNewTopic={this.addNewTopic}
                    deleteTopic={deleteTopic}
                getTopicName={getTopicName}/>
            )
        }
        <li>
            <input onChange={topicChanged} className="form-control"/>
            <button onClick={addNewTopic} className="btn btn-primary form-inline">Add</button>
        </li>
    </ul>

export default TopicTabs*/
