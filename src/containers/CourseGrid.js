import React from 'react'
import CourseCard from "../components/CourseCard";
import TableNavBar from "../components/TableNavBar";
import GridHeading from "../components/GridHeading";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const CourseGrid = ({courses,addCourse,deleteCourse}) =>
    <div>
        <TableNavBar
            addCourse={addCourse} />
        <GridHeading/>
    <div className="row course-deck">
        {
            courses.map((course,index) =>
                ( <div className="col-lg-2 col-md-4 col-sm-12"><CourseCard title={course.title} deleteCourse={deleteCourse}course={course}/></div>

                ))
        }
    </div>
    </div>
export default CourseGrid