import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
//file to render component used to select video playlists
//TODO: implement darkmode colors 
interface propTypes {
    darkmodeOn: boolean,
    playlistInfo: {
        name: string,
        description?: string,
        imageURL?: string,
        id: string,
        tags?: Array<string>
    }

}

const PlayListTile = (props: propTypes) => {

    const styles = makeStyles({
        cardStyles: {
            width: '350px',
            transition: 'all 1s'
        },
        tagStyles: {
            padding: '5px',
            borderRadius: '15px',
            backgroundColor: 'aqua',
            transition: 'all 1s'
        },
        cardDarkmode: {
            backgroundColor: '#141E61'
        },
        textDarkMode: {
            color: "#04d9ff"
        }
    })
    const classes = styles();

    return (
        <div>
            <Card variant={'outlined'} className={classes.cardStyles + ` ${props.darkmodeOn ? classes.cardDarkmode : ""}`}>
                <CardActionArea>
                    <CardMedia height={175} title={'sample title'} component={'img'} image={(props.playlistInfo.imageURL || 'https://www.ncsbn.org/images/Banner_NCLEX-Tutorial.jpg')}></CardMedia>
                    <CardContent>
                        <Typography className={props.darkmodeOn ? classes.textDarkMode : ''} variant={'h5'}>{props.playlistInfo.name}</Typography>
                        <Typography className={props.darkmodeOn ? classes.textDarkMode : ''} variant={'body2'} style={{ marginTop: '10px' }}>{props.playlistInfo.description}</Typography>

                        <Grid style={{ marginTop: '15px' }} container direction={'row'}>
                            {//or statement because playlist could be undefined
                                (props.playlistInfo.tags || []).map((tag) => (
                                        <Grid item>
                                            <div>
                                                <Typography style={props.darkmodeOn ? { backgroundColor: '#787A91' } : {}} className={classes.tagStyles + ` ${props.darkmodeOn ? classes.textDarkMode : ''}`} variant={'subtitle2'}>{tag}</Typography>
                                            </div>
                                        </Grid>
                                ))}

                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}
export default PlayListTile;