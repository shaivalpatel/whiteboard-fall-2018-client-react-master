import React, {Component} from 'react'


export default class Profile extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return(
            <div>
            <div className="container-fluid">
            <h1>Profile</h1>

            <div className="alert alert-success " role="alert">
                Profile Updated!
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="username">
                    Username
                </label>
                <div className="col-sm-10">
                    <input type="text"
                           id="username"
                           className="form-control"
                           placeholder="Meera" readOnly/>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-control col-form-label" htmlFor="phone">
                    Phone
                </label>
                <div className="col-sm-10">
                    <input type="number"
                           id="phone"
                           className="form-control"
                           placeholder="9925016725"/>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-control col-form-label" htmlFor="email">
                    Email
                </label>
                <div className="col-sm-10">
                    <input type="email"
                           id="email"
                           className="form-control"
                           placeholder="alice@wonderland.com"/>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-control col-form-label">
                    Role
                </label>
                <div className="col-sm-10">
                    <select className="form-control">
                        <option value="ADMIN">
                            Administrtor
                        </option>
                        <option value="FACULTY">
                            Faculty
                        </option>
                        <option value="STUDENT">
                            Student
                        </option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-control col-form-label" htmlFor="DOB">
                    Email
                </label>
                <div className="col-sm-10">
                    <input type="date"
                           id="DOB"
                           className="form-control"
                           placeholder="mm/dd/yyyy"/>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                    <button className="btn btn-success btn-block">
                        Update
                    </button>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                    <a href="../index.html">
                        <button className="btn btn-danger btn-block">
                            Logout
                        </button>
                    </a>
                </div>
            </div>
            </div></div>)}
}