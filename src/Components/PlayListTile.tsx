import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
//file to render component used to select video playlists
//TODO: implement darkmode colors 
interface propTypes{
    darkmodeOn: boolean,
    playlistInfo?:{
        name: string,
        description?: string,
        imageURL?: string,
        id:string,
        tags: Array<string>
    }

}

const PlayListTile = (props:propTypes) =>{

    const styles = makeStyles({
        cardStyles: {
            width:'350px'
        },
        tagStyles:{
            padding:'5px',
            borderRadius: '15px',
            backgroundColor:'aqua'
        }
    })
    const classes = styles();

    return(
        <div>
            <Card variant={'outlined'} className={classes.cardStyles}>
                <CardActionArea>
                    <CardMedia title={'sample title'} component={'img'} image={'https://www.ncsbn.org/images/Banner_NCLEX-Tutorial.jpg'}></CardMedia>
                    <CardContent>
                        <Typography variant={'h5'}>Sample Title</Typography>
                        <Typography variant={'body2'} style={{marginTop:'10px'}}>Sample Description</Typography>
                        
                        <Grid style={{marginTop:'15px'}} container direction={'row'}>
                            <Grid item>
                                <div>
                                    <Typography className={classes.tagStyles} variant={'subtitle2'}>Sample Tag</Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}
export default PlayListTile;