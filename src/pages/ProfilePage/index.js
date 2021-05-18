// React
import React, { useState, useEffect } from 'react'
// API
import API from '../../utils/API'
// Components
import ProfileCard from '../../components/ProfileCard'
import ViewKeebList from '../../components/ViewKeebList'
import ViewKeysets from '../../components/ViewKeysets'
// Material-UI Components
import { Grid, Card } from '@material-ui/core'
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    profilePage: {
        height: '98%',
        // width:'75%'
        display:"flex",
        justifyContent:"center",
        alignItems:'center'
    },
}))


export default function ProfilePage() {
    const classes = useStyles()

    return (
        <div className={classes.profilePage}>
            <Grid container spacing={2}>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <ProfileCard />
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <ViewKeebList />
                </Grid>
            </Grid>
        </div>
    )
}