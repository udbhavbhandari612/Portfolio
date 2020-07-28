import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className='body'>
            <div className="mainbox">
                <div className="err">4</div>
                <i className="far fa-question-circle fa-spin"></i>
                <div className="err2">4</div>
                <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go
                &nbsp;
                <Link  className="btn btn-success" to='/'>Home</Link>
                &nbsp;
                    and try from there.</p></div>
            </div>
        </div>
    )
}
