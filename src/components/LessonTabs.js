import React from 'react'
import TopicTabs from "./TopicTabs"
import LessonTab from "./LessonTab";
import LessonService from "../services/LessonService"
import ModuleListItem from "./ModuleListItem";
import ModuleService from "../services/ModuleService";


export default class LessonTabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lessons: [],
            selectedLesson: {},
            courseId: '',
            moduleId: ''
        }
    }
    componentDidMount=()=> {
        this.setModuleId(this.props.moduleId);
        this.setCourseId(this.props.courseId);
        this.setState({showTopic: false});
    }
    componentWillReceiveProps=(Props)=>{
        this.setModuleId(Props.moduleId);
        this.setCourseId(Props.courseId);
        this.findAllLessonsForModule(Props.courseId, Props.moduleId);
    }
    setModuleId=(moduleId)=> {
        this.setState({moduleId: moduleId});
    }
    findAllLessonsForModule=(courseId,moduleId) =>{
        if(courseId>0 && moduleId>0){
        LessonService
            .findAllLessons(courseId,moduleId)
            .then((lessons) => {this.setLessons(lessons)});
    }}
    setLessons=(lessons)=> {
        this.setState({lessons: lessons});
    }
    setCourseId=(courseId)=> {
        this.setState({courseId: courseId});
    }
    selectLesson = (lesson) =>{
        console.log(lesson)
        this.setState({
            selectedLesson: lesson
        })
        console.log(this.state.selectedLesson)
    }


    deleteLesson = (courseId,moduleId,lessonId) => {
        if(courseId>0 && moduleId>0){
            LessonService
                .deleteLesson(courseId,moduleId,lessonId)
                .then((lessons) => {this.setLessons(lessons)});
        }

    }
    lessonChanged = (event) => {
        if(event.target.value.length>0){
            this.setState({
                newLesson:
                    {
                        title:event.target.value,
                        topics:[]
                    }





            })}}

    getLessonName= (lessonId,lesson) => {
        var newLessonName = prompt("Enter new lesson name", lesson.title);
        if ( newLessonName != null){
            lesson.title =  newLessonName ;
            LessonService.updateLesson(this.state.courseId,this.state.moduleId,lessonId,lesson).then(() => {
                this.findAllModulesForCourse(this.props.courseId);
            });
        }
        else{
            alert("Module name cannot be empty")
        }
        this.setState({
            courses: ModuleService.findAllModules(this.props.courseId)
        })

    }
    addNewLesson = () => {
        LessonService.createLesson(this.state.courseId,this.state.moduleId,this.state.newLesson).then(() => {
            this.findAllLessonsForModule(this.props.courseId,this.props.moduleId);
        });

    }

    render() {
        return(
            <div>
                <h2>Lessons</h2>
                <ul className="nav nav-tabs">
                    {
                        this.state.lessons.map((lesson, idx) =>

                                <LessonTab
                                    courseId={this.state.courseId}
                                    moduleId={this.state.moduleId}

                                           selectLesson={this.selectLesson}
                                           selected={this.state.selectedLesson === lesson}
                                           deleteLesson={this.deleteLesson}
                                           title={lesson.title}
                                           key={idx}
                                           lesson={lesson}
                                    getLessonName={this.getLessonName}
                                />

                        )
                    }
                    <li>
                        <input onChange={this.lessonChanged} className="form-control"/>
                        <button onClick={this.addNewLesson} className="btn btn-primary">Add</button>
                    </li>
                </ul>
                {
                    this.state.selectedLesson.id &&
                    <TopicTabs

                        courseId={this.props.courseId}
                        moduleId={this.props.moduleId}
                        lessonId={this.state.selectedLesson.id}/>
                }


            </div>
        )
    }
}
/*
const LessonTabs = ({lessons, selectLesson, selectedLesson,deleteLesson,getLessonName,lessonChanged,addNewLesson}) =>
    <ul className="nav nav-tabs">
        {
            lessons.map((lesson, index) =>
                <LessonTab
                    selected={selectedLesson === lesson}
                    selectLesson={selectLesson}
                    lesson={lesson}
                    key={index}
                deleteLesson={deleteLesson}
            getLessonName={getLessonName}/>
            )
        }
        <li>
            <input onChange={lessonChanged} className="form-control"/>
            <button onClick={addNewLesson} className="btn btn-primary">Add</button>
        </li>
    </ul>
*/

