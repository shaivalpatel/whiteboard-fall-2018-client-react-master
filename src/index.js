import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import WhiteBoard from './containers/WhiteBoard'





ReactDOM.render(
    <div className="container-fluid">
        <WhiteBoard/>

    </div>,
    document.getElementById("root")
)