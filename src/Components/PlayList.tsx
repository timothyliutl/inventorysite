import { List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

interface propsTypes {
    darkmodeOn: boolean,
    playlistlinks: Array<{ //format expected for playlist input
        url: string,
        name: string,
        time: string
    }>,
}

const PlayList = (props: propsTypes) => {

    const styles = makeStyles({
        fontDarkMode: {
            color: "#04d9ff"
        }
    })

    const classes = styles();

    return (
        <div style={{ maxHeight: '500px' }}>
            <Typography className={props.darkmodeOn ? classes.fontDarkMode : ''} style={{ padding: '20px', paddingBottom: '0px' }} variant={'h4'}>Up Next</Typography>
            <hr className={props.darkmodeOn ? classes.fontDarkMode : ''} style={{ margin: '0px', marginTop: '5px' }}></hr>
            <List>
                <ListItem button>
                    <ListItemText className={props.darkmodeOn ? classes.fontDarkMode : ''} primary={'Sample Entry'} secondary={
                        <React.Fragment>
                            <p className={props.darkmodeOn ? classes.fontDarkMode : ''} style={{ margin: '0' }}>
                                Uploaded 4/20 - 4:30
                            </p>

                        </React.Fragment>
                    }></ListItemText>
                </ListItem>
                {
                    //code to implement arrya of javascript objects into the UI
                    props.playlistlinks.map((video) => (
                        <ListItem button>
                            <ListItemText className={props.darkmodeOn ? classes.fontDarkMode : ''} primary={video.name} secondary={
                                <React.Fragment>
                                    <p className={props.darkmodeOn ? classes.fontDarkMode : ''} style={{ margin: '0' }}>
                                        Uploaded 4/20 - {video.time}
                                    </p>
                                </React.Fragment>
                            }></ListItemText>
                        </ListItem>
                    ))

                }

            </List>
        </div>
    )
}

export default PlayList;