// React
import React from 'react'
// Material-UI Components
import { GridList, GridListTile, GridListTileBar, ListSubheader, IconButton, Button, Tooltip } from '@material-ui/core'
// Material-UI Icons
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles'
// CSS
import './styles.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    content: {
        flex: '1 0 auto',
        minHeight: '100vh',
    },
    gridList: {
        width: 600,
        height: 450,
        '@media(max-width: 400px)' : {
            width: '350px',
        },
        // border: '1px solid salmon'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    photoTitle: {
        fontWeight: 'bold',
        fontSize: '24px',
        color: 'black',
        textAlign: 'center'

    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

export default function KeebPhotoGallery(props) {
    const classes = useStyles()


    return (
        <div className={classes.content}>
            <div className={classes.root}>
                <GridList 
                // cellHeight={200} 
                className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        {props.keeb !== null ?
                            <ListSubheader component="div" className={classes.photoTitle}>
                                {props.keeb.maker} {props.keeb.name} Photo Album
                            </ListSubheader>
                            :
                            null
                        }
                    </GridListTile>
                    {props.photos !== null ?
                        props.photos.map((tile) => (
                            <GridListTile key={tile.img}>
                                <img src={tile.keebImage} alt={props.keeb.name} />
                                <GridListTileBar
                                    titlePosition="top"
                                    actionIcon={
                                        <Tooltip title="Delete photo">
                                            <IconButton
                                                aria-label={`Remove ${props.keeb.name} photo`}
                                                className={classes.icon}
                                                id={tile.id}
                                                onClick={props.handleRemoveBtn}
                                            >
                                                <RemoveCircleIcon />
                                            </IconButton>
                                        </Tooltip>
                                    }
                                    actionPosition="right"
                                    className={classes.titleBar}
                                />
                            </GridListTile>
                        ))
                        :
                        null
                    }
                </GridList>
            </div>
            <div className='uploadBtn'>
                <Button
                    onClick={props.showWidget}
                    endIcon={<PhotoLibraryIcon />}
                    variant="contained"
                    style={{ backgroundColor: "#212026", color: "#747C8C", marginTop: '1rem' }}
                >
                    Upload Photos
                </Button>
            </div>
        </div>
    )
}
