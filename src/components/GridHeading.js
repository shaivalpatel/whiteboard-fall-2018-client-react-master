import React from 'react'
import CourseCard from "./CourseCard";
import TableNavBar from "./TableNavBar";

import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseRow from "./CourseRow";

const GridHeading = ({courses,addCourse,deleteCourse}) =>
    <div className="container-fluid d-none d-md-block">
        <div className="row  bg-primary ">
            <div className="col-sm-2">
            </div>
            <div className="row col-sm-9">
                <div className="col-sm-4">
                    <h5>Title</h5>
                </div>
                <div className="col-sm-3">
                    <div className="dropdown">
                        <button className="btn btn-sm btn-primary bg-primary text-dark dropdown-toggle" type="button"
                                data-toggle="dropdown"><b>Owned-by</b><span className="caret"></span></button>
                        <ul className="dropdown-menu">
                            <li><a href="#">Me</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-3">
                    <b>Last modified by me</b>
                </div>
                <div className="col-sm-2">
                    <div>
                        <Link to="/course/table">
                            <i className="fa fa-list text-dark"></i>
                        </Link>

                        <i className="fa fa-sort-alpha-asc text-dark" ></i>
                    </div>
                </div>
            </div>

            <div className="col-sm-1">

            </div>

        </div>
    </div>

export default GridHeading