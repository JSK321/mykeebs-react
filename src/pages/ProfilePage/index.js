// React
import React from 'react'
// Components
import ProfileCard from '../../components/ProfileCard'
import ViewKeebList from '../../components/ViewKeebList'
// Material-UI Components
import { Grid, Grow } from '@material-ui/core'

export default function ProfilePage() {

    return (
        <div className="content">
            <Grow
                in={true}
                timeout={1000}
            >
                <Grid container spacing={2}>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <ProfileCard />
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <ViewKeebList />
                    </Grid>
                </Grid>
            </Grow >
        </div >
    )
}