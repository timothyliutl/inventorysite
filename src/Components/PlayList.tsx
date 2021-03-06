import { List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

interface propsTypes {
    darkmodeOn: boolean,
    playlistlinks: Array<{ //format expected for playlist input
        url: string,
        name: string,
        time: string,
        id: string,
        description: string,
        playlist?: string,
        tags?: Array<string>
    }>,
    onClick?: any, //function to change videos
    selected: string //id of the selected listItem
}

const PlayList = (props: propsTypes) => {

    const styles = makeStyles({
        fontDarkMode: {
            color: "#04d9ff"
        }
    })

    const classes = styles();

    const isSelected = (id:string):boolean =>{
        if(id==props.selected){
            return true;
        }else{
            return false;
        }
    }

    return (
        <div style={{ maxHeight: '500px' }}>
            <Typography className={props.darkmodeOn ? classes.fontDarkMode : ''} style={{ padding: '20px', paddingBottom: '0px' }} variant={'h4'}>In Playlist</Typography>
            <hr className={props.darkmodeOn ? classes.fontDarkMode : ''} style={{ margin: '0px', marginTop: '5px' }}></hr>
            <List>
                
                {
                    //code to implement arrya of javascript objects into the UI
                    props.playlistlinks.map((video) => (
                        <ListItem selected={isSelected(video.id)} button onClick={()=>{props.onClick(video)}} style={isSelected(video.id)&&props.darkmodeOn?{backgroundColor:'#0F044C'}:{}}>
                            <ListItemText className={props.darkmodeOn ? classes.fontDarkMode : ''} primary={video.name} secondary={
                                <React.Fragment>
                                    <p className={props.darkmodeOn ? classes.fontDarkMode : ''} style={{ margin: '0' }}>
                                        Length - {video.time}
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