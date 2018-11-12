import React from 'react'
import CourseTable from "../containers/CourseTable";
import CourseAdd from "./CourseAdd";

const TableNavBar = ({ createCourse}) =>

    <div>
        <div className="navbar navbar-dark bg-dark">

            <div className="col-sm-1">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="col-sm-2 col-form-label">
                <h5 className="text-primary text-white d-none d-md-block">Course Manager</h5>
            </div>
            <div className="col-sm-7">
                <CourseAdd createCourse={createCourse}/>
            </div>

        </div>
    </div>


export default TableNavBar