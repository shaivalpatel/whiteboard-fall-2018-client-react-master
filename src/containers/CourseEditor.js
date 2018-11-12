import React, {Component} from 'react'
import ModuleList from "../components/ModuleList";
import {Route} from 'react-router-dom'
import LessonTabs from "../components/LessonTabs";
import CourseEditorNavbar from "../components/CourseEditorNavbar";
import TopicTabs from "../components/TopicTabs"

import WidgetList from "../components/WidgetList"

import widgetReducer from "../reducers/WidgetReducer"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import WidgetListContainer from '../containers/WidgetListContainer'
import CourseServiceSingleton from '../services/CourseServiceSingleton'
const store = createStore(widgetReducer)

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {courseId: '',moduleId:'',selectedModule: {}};
        this.selectCourse = this.selectCourse.bind(this);
    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
    }

    selectCourse(courseId) {
        console.log(courseId)
        this.setState({courseId: courseId});


    }
    selectModule = module => {
        this.setState({
            selectedModule: module,

        })
    }




    componentWillReceiveProps(newProps){
        this.selectCourse(newProps.courseId);

    }

render(){

        return(
            <div>
                <CourseEditorNavbar title ={this.props.match.params.title}/>

                <div className="row">
                    <div className="col-4">
                        <ModuleList selectModule={this.selectModule}
                                    selectedModule={this.state.selectedModule}
                                    courseId={this.state.courseId}/>
                    </div>

                </div>
                <div className="col-8">


                </div>


        </div>


    )
}

}

/*

        const courseId = this.props.match.params.courseId;
        const course = this.props.courses.find(
            course => course.id === courseId);



        if(course.modules.length!=0 ) {
            const selectedModule = course.modules[0];
            const selectedLesson = selectedModule.lessons[0];
            const selectedTopic = selectedLesson.topics[0];



        this.state = {
            newLesson:[
                {
                title:'New Lesson',
                topics:[]}
            ],
            preview:false,
            newTopic:'New Topic',
            topics:selectedLesson.topics,
            lessons:selectedModule.lessons,
            course: course,
            selectedModule: selectedModule,
            selectedLesson: selectedLesson,
            selectedTopic:selectedTopic,
            courseId: courseId
        }}

    else{
            const selectedModule = [];
            const selectedLesson =[];
            const selectedTopic=[];

            this.state = {
                course: course}

        }

    }

    findAllCourses() {
        var courses = CourseServiceSingleton.findAllCourses()

        var self = this

        courses.map(course => {
            if (course.id === self.state.courseId) {
                this.setState({
                    modules: course.modules,
                    lessons: course.modules.lessons
                })
            }
        })
    }

    getLessonName= (lesson) => {
        var newLessonName = prompt("Enter new lesson name", lesson.title);
        if ( newLessonName != null){
            lesson.title =  newLessonName ;
        }
        else{
            alert("Lesson name cannot be empty")
        }
        this.setState({
            courses: CourseServiceSingleton.findAllCourses()
        })
    }

    getTopicName= (topic) => {
        var newTopicName = prompt("Enter new topic name", topic.title);
        if ( newTopicName != null){
            topic.title =  newTopicName ;
        }
        else{
            alert("Topic name cannot be empty")
        }
        this.setState({
            courses: CourseServiceSingleton.findAllCourses()
        })
    }


    selectLesson = lesson =>
        this.setState({
            selectedLesson: lesson,
            selectedTopic: lesson.topics[0]
        })

    selectTopic = topic =>
        this.setState({
            selectedTopic: topic
        })


    selectModule = module => {
        this.setState({
            selectedModule: module,
            selectedLesson: module.lessons[0]
        })
    }
    deleteTopic = topic => {

        CourseServiceSingleton.findAllCourses();
        CourseServiceSingleton.deleteTopic(topic)
        this.setState({
            courses: CourseServiceSingleton.findAllCourses()
        })
        this.findAllCourses()
    }

    deleteLesson = lesson => {

        CourseServiceSingleton.findAllCourses();
        CourseServiceSingleton.deleteLesson(lesson)
        this.setState({
            courses:CourseServiceSingleton.findAllCourses()
        })
        this.findAllCourses()
    }
    topicChanged = (event) => {
        this.setState({
            newTopic: event.target.value,




        })
    }
    lessonChanged = (event) => {
        if(event.target.value.length>0){
        this.setState({
            newLesson:
                {
                    title:event.target.value,
                topics:[]
                }





        })}
        else{
            this.setState({
                newLesson:
                    {
                        title:'New Lesson',
                        topics:[]
                    }





            })
        }
    }
    addNewLesson = () => {
        let lessons = this.state.lessons;


        lessons.push( this.state.newLesson
        );
        this.setState({
            lessons:lessons
        });

    }

    addNewTopic = () => {
        let topics = this.state.topics;
        topics.push( {title: this.state.newTopic}
        );
        this.setState({
           topics:topics
        });

    }

    render() {
        return(
            <div>
                <CourseEditorNavbar title={this.state.course.title}/>

                <div className="row">
                    <div className="col-4">
                        <ModuleList
                            selectModule={this.selectModule}
                            selectedModule={this.state.selectedModule}
                            deleteModule={this.props.deleteModule}
                            modules={this.state.course.modules}
                        courseId = {this.state.course.id}/>
                    </div>
                    <div className="col-8">
                        <LessonTabs
                            lessonChanged={this.lessonChanged}
                            addNewLesson={this.addNewLesson}
                            selectLesson={this.selectLesson}
                            selectedLesson={this.state.selectedLesson}
                            lessons={this.state.selectedModule.lessons}
                            getLessonName={this.getLessonName}
                        deleteLesson={this.deleteLesson}/>
                        <TopicTabs
                            topicChanged={this.topicChanged}
                            addNewTopic={this.addNewTopic}
                            selectTopic={this.selectTopic}
                            selectedTopic={this.state.selectedTopic}
                            topics={this.state.selectedLesson.topics}
                            getTopicName={this.getTopicName}
                        deleteTopic={this.deleteTopic}/>
                        <br/>

                        <Provider store={store}>
                            <WidgetListContainer
                                preview={this.state.preview}
                                topic={this.state.selectedTopic}
                                widgetsInit={this.state.selectedTopic.widgets}/>
                        </Provider>
                    </div>
                </div>
            </div>
        )
    }
}
*/
