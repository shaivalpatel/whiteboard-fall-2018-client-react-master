import React from 'react'
//import CourseRow from "../components/CourseRow";
import CourseAdd from "../components/CourseAdd";
import TableNavBar from "../components/TableNavBar"
import CourseServiceSingleton from '../services/CourseServiceSingleton'


import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseRow from "../components/CourseRow";

class CourseTable extends React.Component{
    constructor(props){
        super(props);
        //this.courseService = new CourseServiceSingleton();
        this.state={
           courses:[],
            userId:'',
            courseId:''

        }

    }
    componentDidMount(){

        return fetch('http://localhost:8080/api/profile',{
            credentials:'include'
        }).then(response=>response.json()).then(user=>{
            this.setState({

                userId:user.id,
                user:user,
                courses:user.courses
            });

            console.log(this.state.courses)
            console.log(this.state.user)
        })
    }

    findAllCourses = () => {

        CourseServiceSingleton.findAllCourses(this.state.userId).then(courses=>this.setState({courses:courses}))

    }

    deleteCourse = (courseId,id) =>{
        console.log(this.state.userId)
        CourseServiceSingleton.deleteCourse(courseId,id).then(()=>this.findAllCourses())


    }

    createCourse =(title)=>{
        CourseServiceSingleton.createCourse(title,this.state.userId).then(()=>this.findAllCourses())
    }

    render(){
        return(
            <div>
                <TableNavBar
                   createCourse={this.createCourse} />
                <table className="table">
                    <thead>
                    <tr>
                        <th>
                            Title
                        </th>
                        <th>
                            <div className="dropdown">
                                <button className="btn btn-sm btn-primary bg-primary text-dark dropdown-toggle" type="button" data-toggle="dropdown"><b>Owned-by</b><span className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Me</a>
                                    </li>
                                </ul>
                            </div>
                        </th>
                        <th>
                            Last modified by me
                        </th>


                        <th>
                            <Link to="/course/grid">
                                <i className="fa fa-th-large"></i>
                            </Link>

                        </th>
                        <th>
                            <i className="fa fa-sort-alpha-asc"></i>

                        </th>

                    </tr>



                    </thead>
                    <tbody>
                    {

                        this.state.courses.map((course, index) =>
                            (<CourseRow
                               course={course}
                               id={this.state.userId}
                            deleteCourse={this.deleteCourse}/>)
                        )
                    }
                    </tbody>
                </table>
            </div>


        )
    }
}
  {/*  <div>
        <TableNavBar
        addCourse ={addCourse}/>

        <table className="table">
            <thead>
            <tr>
                <th>
                    Title
                </th>
            <th>
                <div className="dropdown">
                <button className="btn btn-sm btn-primary bg-primary text-dark dropdown-toggle" type="button" data-toggle="dropdown"><b>Owned-by</b><span className="caret"></span></button>
                <ul className="dropdown-menu">
                    <li><a href="#">Me</a>
                    </li>
                </ul>
                </div>
            </th>
                <th>
                    Last modified by me
                </th>


                <th>
                    <Link to="/course/grid">
                        <i className="fa fa-th-large"></i>
                    </Link>

                </th>
                <th>
                    <i className="fa fa-sort-alpha-asc"></i>

                </th>

            </tr>



            </thead>
            <tbody>
            {
                courses.map((course, index) =>
                    (<CourseRow
                        deleteCourse={deleteCourse}
                        deleteModule ={deleteModule}
                        findAllCourses={ findAllCourses}
                        key={index}
                        course={course}
                        editCourse/>)
                )
            }
            </tbody>
        </table>
    </div>*/}

export default CourseTable