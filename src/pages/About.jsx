import React from 'react'
import '../style/about-us.css'
const About = () => {
    return (
        <>
            <div className="main">
                <div className="container about-us">
                    <h1 className='heading about-h'>About Us</h1>
                    <br />
                    <div className='body-txt'>
                        A personal project Website : Based On real time APP - Movies DB
                        <br />
                        developed by : Harsh khanagwal
                        <br />
                    </div>
                    <div className='body-txt-2'>
                    <b className='subhead-b'>Technologies used </b>
                    <ul>
                        <li>React JS</li>
                        <li>HTML / CSS</li>
                        <li>API - movie DB</li>
                        <li>React Router</li>
                    </ul>
                    </div >
                     
                </div>
            </div>

        </>
    )
}

export default About