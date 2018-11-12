import React, {Component} from 'react'
import CourseServiceSingleton from "../services/CourseServiceSingleton";
import TopicTab from "./TopicTab";

export default class Topictabsnew extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTopic:
                {
                    title: '',

                }
            ,
            modules: this.props.modules,
            topics:this.props.topics


        }
    }

    formChanged = (event) => {
        this.setState({
            newTopic:
                {
                    title: event.target.value,

                }


        })
    }
    findAllCourses() {
        var courses = CourseServiceSingleton.findAllCourses()

        var self = this

        courses.map(course => {
            if(course.id === self.state.courseId){
                this.setState({
                    modules : course.modules,
                    topics:course.modules.topics,
                    lessons: course.modules.lessons
                })
            }
        })


    }

    addNewTopic = () => {
        let topics = this.state.topics;
        topics.push(this.state.newTopic
        );
        this.setState({
            topics:topics
        });
        this.findAllCourses()

    }

    deleteModule= module =>{

        CourseServiceSingleton.findAllCourses()
        CourseServiceSingleton.deleteModule(module)
        this.setState({
            courses: CourseServiceSingleton.findAllCourses()
        })
        this.findAllCourses()
    }
    getModuleName= (module) => {
        var newModuleName = prompt("Enter new module name", module.title);
        if ( newModuleName != null){
            module.title =  newModuleName ;
        }
        else{
            alert("Module name cannot be empty")
        }
        this.setState({
            courses: CourseServiceSingleton.findAllCourses()
        })
    }

    render(){
        return(
        <ul className="nav nav-tabs">

            {
                this.props.topics.map((topic, index) =>
                    <TopicTab
                        selected={this.props.selectedTopic === topic}
                        selectTopic={this.props.selectTopic}
                        topic={topic}
                        key={index}
                        deleteTopic={this.deleteTopic}
                        getTopicName={this.getTopicName}/>
                )
            }
            <li>
                <input onChange={this.formChanged} className="form-control"/>
                <button onClick={this.addNewModule} className="btn btn-primary">Add</button>
            </li>
        </ul>
        )
    }


}