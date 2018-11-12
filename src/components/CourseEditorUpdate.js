import React, {Component} from 'react'
import ModuleList from "./ModuleList";
import {Route} from 'react-router-dom'
import LessonTabs from "./LessonTabs";
import CourseEditorNavbar from "./CourseEditorNavbar";

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);

        // retrieve courseId from the URL path parameter 'courseId'
        // the props.match.params is part of the Route library which
        // parses the URL path and names the parameters and creates
        // the params map
        const courseId = this.props.match.params.courseId;

        // use courseId to find the course object from the
        // courses array passed in as a property
        const course = this.props.courses.find(
            course => course.id === courseId);



        if(course.modules.length!=0 ) {
            const selectedModule = course.modules[0];
            const selectedLesson = selectedModule.lessons[0];



            this.state = {
                course: course,
                selectedModule: selectedModule,
                selectedLesson: selectedLesson
            }}

        else{
            const selectedModule = [];
            const selectedLesson =[]

            this.state = {
                course: course}

        }

    }



    selectLesson = lesson =>
        this.setState({
            selectedLesson: lesson
        })


    selectModule = module => {
        console.log(module.lessons[0])
        this.setState({
            selectedModule: module,
            selectedLesson: module.lessons[0]
        })
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
                            modules={this.state.course.modules}/>
                    </div>
                    <div className="col-8">
                        <LessonTabs
                            selectLesson={this.selectLesson}
                            selectedLesson={this.state.selectedLesson}
                            lessons={this.state.selectedModule.lessons}/>
                    </div>
                </div>
            </div>
        )
    }
}
