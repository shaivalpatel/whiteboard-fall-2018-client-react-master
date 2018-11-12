import React, {Component} from 'react'


const CourseEditorNavbar = ({courses,addCourse,deleteCourse,title}) =>
    <div>
        <div className="navbar navbar-light bg-dark">
            <div  className="col-sm-1">
                <a href="/Home/course-manager.template.client.html">
                    <i className="fa fa-times"></i>
                </a>
            </div>
            <div>
                <h2 className="text-primary">Course Editor:
                    {title}</h2>
            </div>
            <div>
                <button className="btn bg-dark text-white">Build</button>
            </div>
            <div>
                <button className="btn bg-dark text-white">Pages</button>
            </div>
            <div>
                <button className="btn bg-dark text-white">Themes</button>
            </div>
            <div>
                <button className="btn bg-dark text-white">Store</button>
            </div>
            <div>
                <button className="btn bg-dark text-white">Apps</button>
            </div>
            <div>
                <button className="btn bg-dark text-white">Settings</button>
            </div>
            <div>
                <a href="#">
                    <i className="fa fa-plus">
                    </i>
                </a>
            </div>
        </div>
    </div>
export default CourseEditorNavbar