import { Card, Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import ReactPlayer from 'react-player';
import PlayList from './PlayList';

interface propTypes {
    darkmodeOn: boolean
}

const VideoPlayer = (props: propTypes) => {

    const sampleplaylist = [{
        name: "Sample Video 1",
        url: 'skdfdf',
        time: '4:20'
    },
    {
        name: "Sample Video 2",
        url: 'skdfdf',
        time: '6:09'
    },{
        name: "Sample Video 3",
        url: 'skdfdf',
        time: 'sjdhfksadhf'
    }]

    const styles = makeStyles({
        videoPlayerContainer: {
            backgroundColor: "#787A91",
            width: "80%",
            minHeight: '400px',
            borderRadius: '30px',
            marginTop: '20px',

        },
        video: {
            width: "100%",
            minHeight: '500px',
            borderRadius: '30px',
            backgroundColor: "#787A91",
            height: '100%',
            textAlign: 'center'
        },
        playlistStyle: {
            outlineColor: '#EEEEEE',
            borderRadius: '30px',
            height: "100%"
        },
        outline: {
            padding: '10px',
            backgroundColor: 'orange'
        },
        cardDarkMode: {
            backgroundColor: '#141E61',
            transition: 'background-color 0.5s ease'
        },
        fontDarkMode: {
            color: "#04d9ff"
        },
        cardLightMode: {
            transition: 'background-color 0.5s ease'
        }
    })
    const classes = styles();

    return (
        <div style={{ width: "95%", marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }}>

            <Grid container direction={'row'} justifyContent={'center'} spacing={0}>
                <Grid item xs={9} justifyContent={'center'} direction={'row'}>
                    <Grid item>
                        <div>
                            <Grid container direction={'column'}>
                                <Grid item>
                                    <ReactPlayer controls width={'100%'} height={'500px'} style={{ marginLeft: 'auto', marginRight: 'auto', padding: "20px" }} url={'https://www.youtube.com/watch?v=Fcif1yxWHAM'}></ReactPlayer>
                                </Grid>

                                <Grid item style={{ paddingLeft: '30px', paddingRight: '30px' }}>
                                    <Card className={`${props.darkmodeOn ? classes.cardDarkMode : classes.cardLightMode}`} style={{ width: '100%', height: '200px', padding: '20px' }} elevation={3}>
                                        <Grid style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }} item container justifyContent={'space-between'} direction={'row'}>
                                            <Grid item>
                                                <h3 className={props.darkmodeOn ? classes.fontDarkMode : ''}>Video Title</h3>
                                            </Grid>
                                            <Grid item>
                                                <h6 className={props.darkmodeOn ? classes.fontDarkMode : ''}>Video Playlist</h6>
                                            </Grid>
                                        </Grid>
                                        <hr className={props.darkmodeOn ? classes.fontDarkMode : ''} style={{ marginTop: '0px' }}></hr>
                                        <Container>
                                            <p className={props.darkmodeOn ? classes.fontDarkMode : ''}>Video Description</p>
                                            <br></br>
                                            <p className={props.darkmodeOn ? classes.fontDarkMode : ''}>Video Tags</p>
                                        </Container>
                                    </Card>
                                </Grid>


                            </Grid>

                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={3} style={{ paddingTop: '20px' }}>
                    <Card className={`${classes.playlistStyle} ${props.darkmodeOn ? classes.cardDarkMode : classes.cardLightMode}`} elevation={4}>
                        <PlayList darkmodeOn={props.darkmodeOn} playlistlinks={sampleplaylist}></PlayList>
                    </Card>

                </Grid>

            </Grid>
        </div>
    )
}

export default VideoPlayer;