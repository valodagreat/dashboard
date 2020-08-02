import React, { Component } from 'react'
import './Navigation.css'
import {FaEnvelope, FaBars} from 'react-icons/fa'

class Navigation extends Component {
    render() {
        return (
            <div className='navs'>
                <nav className="mb-1 navbar navbar-expand-lg navbar-dark  lighten-1">
                <a className="navbar-brand" href="#."><img src="https://res.cloudinary.com/valodagreat/image/upload/v1596150337/mqqfqpqgos8zbi53urx5_v0toea_2_skjdsf.jpg"
                    className="" alt="avatar" height="80" width="180"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
                    aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><FaBars color='#bdbdbd' size='40' /></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
                    <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        <a className="nav-link linkcolor p-3" href="#.">Calendar
                        <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link linkcolor p-3" href="#.">Statistic</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link linkcolor p-3" href="#.">Employee</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link linkcolor p-3" href="#.">Client</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link linkcolor p-3" href="#.">Equipment</a>
                    </li>
                    </ul>
                    <ul className="navbar-nav ml-auto nav-flex-icons">
                    <li className="nav-item">
                    <a className="nav-link waves-effect waves-light" href='#.'>
                    <FaEnvelope color='#bdbdbd'/>
                    </a>
                </li>
                    <li className="nav-item avatar">
                        <a className="nav-link p-0" href="#.">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" className="rounded-circle z-depth-0"
                            alt="avatar" height="35"/>
                        </a>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}

export default Navigation
