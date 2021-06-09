// React
import React from 'react'
// Material-UI Components
import { Paper } from '@material-ui/core';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    aboutPage: {
        width: '80%',
        height: '80vh',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
}));

export default function AboutPage() {
    const classes = useStyles()

    return (
        <div className="content">
            <Paper className={classes.aboutPage}>
                <h1 style={{ textAlign: "center", textDecoration:'underline' }}>Hello!</h1>
                <p>
                    Keebs is a term used to describe keyboards. 
                    This is a personal website to showcase my collection of custom mechanical keyboards. 
                    Collecting keebs is similar to collecting shoes, I try to use a different keebs throughtout the day/week.
                    What I enjoy the most about custom mechanical keyboards is the unique sound and the typing sensation from using custom parts.
                    My personal collection is showcased on the main page, each one has all the details about the keeb along with photos and a sound test.
                    Others are welcomed to register and showcase their own if they'd like. 
                </p>
            </Paper>
        </div>
    )
}
