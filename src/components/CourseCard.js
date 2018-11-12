import React from 'react'
import {Link} from "react-router-dom";

export default class CourseCard extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <Link to={`/course/${this.props.course.id}/edit`}>
                        <h5 className="card-title">{this.props.title}</h5></Link>
                    <p className="card-text">Card text.</p>
                    <a href="#" className="btn btn-primary">More...</a>
                </div>
                <Link
                    className="btn btn-primary" to={`/course/${this.props.course.id}/edit`}>Edit</Link>
                <button onClick={() => this.props.deleteCourse(this.props.course)} className="btn btn-danger">Delete</button>

            </div>
        )
    }
}
