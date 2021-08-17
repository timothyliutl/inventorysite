import { Card, makeStyles } from '@material-ui/core';
import React from 'react';
//file to render component used to select video playlists

interface propTypes{
    darkmodeOn: boolean,
    playlistInfo:{
        name: string,
        description?: string,
        imageURL?: string,
        id:string
    }

}

const PlayListTile = (props:propTypes) =>{

    const styles = makeStyles({
        
    })
    const classes = styles();

    return(
        <div>
            <Card>
                
            </Card>
        </div>
    )
}
export default PlayListTile;