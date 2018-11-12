import React, {Component} from 'react'


export default class Profile extends Component {
    constructor(props) {
        super(props)

    }





    render() {
        return (

            <div class="container-fluid">
                <h1>Sign Up</h1>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label" for="username">
                        Username
                    </label>
                    <div class="col-sm-10">
                        <input type="text"
                               id="username"
                               class="form-control"
                               placeholder="Meera"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2  col-form-label" for="password">
                        Password
                    </label>
                    <div class="col-sm-10">
                        <input type="password"
                               id="password"
                               class="form-control wbdv-password-fld"

                               placeholder="1jd9je2028j!@@dasc"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2  col-form-label" for="verify-password">
                        Verify Password
                    </label>
                    <div class="col-sm-10">
                        <input type="password"
                               id="verify-password"
                               class="form-control wbdv-password-fld"

                               placeholder="1jd9je2028j!@@dasc"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-10">
                        <a href="../Profile/profile.template.client.html">
                            <button class="btn btn-primary btn-block">
                                Sign Up
                            </button>
                        </a>

                        <div class="row">
                            <div class="col-6">
                                <a href="../Login/login.template.client.html">Log In</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 text-danger">
                                <a href="../index.html">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}
