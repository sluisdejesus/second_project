import React from 'react'

import classes from './BackgroundVideo.module.css'

const BackgroundVideo = () => {
    const videoSource = "./images/Background.mp4"
    return (
        <div className= {classes.Container}>
            <video autoPlay="autoplay" loop ="loop" muted className={classes.Video}>
                <source src={videoSource} type="video/mp4"/>

            </video>
            <div className ={classes.Content}>
                <div className={classes.SubContent}>
                    <h1>Fuck This</h1>
                </div>
            </div>

        </div>
    )
}

export default BackgroundVideo