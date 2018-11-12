import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            user:[],
            logged:false
        }

    }


usernameChange= e =>{
        return this.setState({
        username:e.target.value,

    })
};

    passwordChange= e =>{
        return this.setState({
            password:e.target.value,

        })
    };

    formsubmit = e =>{
        fetch('http://localhost:8080/api/login',
            {
                credentials:'include',
                method:'POST',
                body: JSON.stringify({
                    "username":this.state.username,
                    "password":this.state.password
                }),
                headers:{
                    'Content-type':'application/json'
                }

            }).then(response=>response.json()).then(()=>{
                this.setState({
                    logged:true
               });
        });
    };

render()
{

    if(this.state.logged===true){
        return <Redirect to ={
           '/course/table'}/>

        }

    return(
        <div>
        <div className="container-fluid">
            <h1>Sign In</h1>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="username">
                    Username
                </label>
                <div className="col-sm-10">
                    <input type="text"
                           id="username"
                           className="form-control"
                           placeholder="MPatel"
                           onChange={this.usernameChange}
                    value={this.state.username}/>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-control col-form-label" htmlFor="password">
                    Password
                </label>
                <div className="col-sm-10">
                    <input type="password"
                           id="password"
                           className="form-control"
                           placeholder="1jd9je2028j!@@dasc"
                           onChange={this.passwordChange}
                           value={this.state.password}/>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">

                        <button onClick={this.formsubmit} className="btn btn-primary btn-block">
                            Sign in
                        </button>


                    <div className="row">
                        <div className="col-4">
                            <a href="/forget-password/forget-password.template.client.html">Forgot Password?</a>
                        </div>
                        <div className="col-4">
                            <a className="text-danger" >Cancel</a>
                        </div>

                        <div className="col-4">
                            <div className="float-right">

                                <a href="../Register/register.template.client.html" className="float-right">Sign up</a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
}



