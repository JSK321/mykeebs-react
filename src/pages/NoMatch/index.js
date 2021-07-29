// React
import React from 'react'
// Material-UI Components
import { Card, CardContent, Button } from '@material-ui/core'
// Material-UI Icons
import HomeIcon from '@material-ui/icons/Home';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    noMatch:{
        width: '22rem',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: "#0B0B0D",
        color: "#747C8C",
        fontSize:'24px'
    }
}));

export default function NoMatch() {
    const classes = useStyles();

    return (
        <div className="content">
            <Card className={classes.noMatch}>
                <CardContent>
                    <p>The page you are searching does not exist.</p>
                    <Button
                        href="/"
                        size='large'
                        endIcon={<HomeIcon />}
                        style={{ textTransform: 'none', color: "#BFBFBF" }}
                    >
                        Return
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
