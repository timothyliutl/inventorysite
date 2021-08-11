import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import ReactPlayer from 'react-player';

interface propTypes {
    darkmodeOn: boolean
}

const VideoPlayer = (props: propTypes) => {

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
            height: '90%',
            textAlign: 'center'
        },
        playlistStyle: {
            outlineColor: '#EEEEEE',
            borderRadius: '30px',
            backgroundColor: 'blue',
            height: "300px"
        },
        outline: {
            padding: '10px',
            backgroundColor: 'orange'
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
                                    <ReactPlayer style={{ marginLeft: 'auto', marginRight: 'auto', padding: "20px" }} url={'https://www.youtube.com/watch?v=Fcif1yxWHAM'}></ReactPlayer>

                                </Grid>

                                <Grid style={{width:'70%', marginLeft:'auto', marginRight:'auto'}} item container justifyContent={'space-between'} direction={'row'}>
                                    <Grid item>
                                        <h3>Video Title</h3>
                                    </Grid>
                                    <Grid item>
                                        <h6>Video Category</h6>
                                    </Grid>
                                </Grid>


                            </Grid>

                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <div className={classes.playlistStyle}>
                        <Grid direction={'column'}>

                        </Grid>
                    </div>

                </Grid>

            </Grid>
        </div>
    )
}

export default VideoPlayer;