import React, {Component} from 'react'
import CourseCard from "../components/CourseCard";
import ModuleList from "../components/ModuleList";
import CourseGrid from "./CourseGrid";
import CourseTable from "./CourseTable";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Profile from "../components/Profile"
import CourseEditor from "./CourseEditor";
import Login from "../components/Login"
import CourseServiceSingleton from "../services/CourseServiceSingleton";
export default class WhiteBoard extends Component {

   /* constructor(props) {


        super(props);

        this.state = {
            courses: CourseServiceSingleton.findAllCourses()
        }
        console.log(this.courses)
    }*/


    /*addCourse = newCourse => {
        CourseServiceSingleton.createCourse(newCourse);

        this.setState({
            courses: CourseServiceSingleton.findAllCourses()
        })
    };

    findCourseById = (course) =>{
        console.log(CourseServiceSingleton.findCourseById(course.id))

    };



    deleteCourse = courseToDelete => {
        CourseServiceSingleton.findCourseById(courseToDelete);
        CourseServiceSingleton.deleteCourse(courseToDelete.id);
        this.findAllCourses();
            
        console.log(this.state.courses)
        this.setState({
            courses: CourseServiceSingleton.findAllCourses()
        });

    };

    findAllCourses()  {
        this.setState({
            courses: CourseServiceSingleton.findAllCourses()
        });
        this.state.courses

}

    deleteModule = module =>{
        CourseServiceSingleton.findAllCourses();
        CourseServiceSingleton.deleteModule(module);
        this.setState({
            courses: CourseServiceSingleton.findAllCourses()
        });
        this.findAllCourses()
    };

    deleteTopic = topic =>{
        CourseServiceSingleton.findAllCourses();
        CourseServiceSingleton.deleteTopic(topic);
        this.setState({
            courses: CourseServiceSingleton.findAllCourses()
        });
        this.findAllCourses()
    };

    deleteLesson = lesson =>{
        CourseServiceSingleton.findAllCourses();
        CourseServiceSingleton.deleteLesson(lesson);
        this.setState({
            courses: CourseServiceSingleton.findAllCourses()
        });
        this.findAllCourses()
    };


*/
    render() {
        return (
            <div>

                <Router>
                    <div>
                        <Link to="/course/table">Table</Link>
                        <Link to="/course/grid">Grid</Link>
                        <Route path="/profile"
                               render={(props) =>
                                   <Profile />}/>
                        <Route path="/login"
                               render={(props) =>
                                   <Login/>}/>
                        <Route path="/course/table"
                               render={(props) =>
                                   <CourseTable/>}/>
                       {/* <Route path="/course/grid"
                               render={(props)=>
                               <CourseGrid
                                   {...props}
                                   addCourse={this.addCourse}
                                   deleteCourse={this.deleteCourse}
                                   deleteModule={this.deleteModule}
                                   courses={this.state.courses}/>}/>*/}
                        <Route path="/course/:courseId/edit" component={CourseEditor}/>

                    </div>
                </Router>
            </div>
        );
    }
}