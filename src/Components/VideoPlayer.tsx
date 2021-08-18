import { Card, Container, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import PlayList from './PlayList';

interface propTypes {
    darkmodeOn: boolean
}
interface videoTypes {
    name: string,
    url: string,
    time: string,
    id: string,
    description: string,
    playlist?: string,
    tags?: Array<string>
}

const VideoPlayer = (props: propTypes) => {

    const sampleplaylist = [{
        name: "wardell",
        url: 'https://www.youtube.com/watch?v=Fcif1yxWHAM',
        time: '4:20',
        id: 'video1',
        description: 'The art of whiffing',
        playlist: 'yeet',
        tags: ['valorant', 'whiff', 'TSM']
    },
    {
        name: "u got baited",
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        time: '6:09',
        id: 'video2',
        description: 'lol'
    }, {
        name: "keyboard asmr",
        url: 'https://www.youtube.com/watch?v=o5Ra1ddZSXk',
        time: 'sjdhfksadhf',
        id: 'video3',
        description: 'clickity clack'
    }]

    const tutorial1: Array<videoTypes> = [{
        name: 'Types of Tubing',
        url: 'https://www.youtube.com/watch?v=uiT2lQqNqL8',
        time: '2:49', id: "Tubing1", playlist: 'Tubing Connections', description: ''
    }, {
        name: "Tube Connections",
        url: 'https://www.youtube.com/watch?v=hATLe5RnAQM',
        time: '6:19',
        id: 'Tubing2',
        playlist: 'Tubing Connections', description: ''
    }, {
        name: 'checking for leaks',
        url: 'https://www.youtube.com/watch?v=uEj021js0aM',
        time: '1:52',
        id: 'Tubing3',
        playlist: 'Tubing Connections', description: ''
    }
    ]

    const [currentVideo, setCurrentVideo] = useState(tutorial1[0] as videoTypes)


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
        },
        playlistContainer: {
            paddingTop: '5px',
            borderRadius: '15px',
            paddingBottom: '5px',
            paddingRight: '10px',
            paddingLeft: '10px'
        }
    })
    const classes = styles();

    const changeVideo = (newVideo: videoTypes) => {

        setCurrentVideo(newVideo);
    }

    const playlistLabel = () => {
        if (currentVideo.playlist) {
            return (<Grid item style={{ marginRight: '30px' }}>
                <div className={classes.playlistContainer} style={{ backgroundColor: '#5bc0de' }}>
                    <span className={props.darkmodeOn ? classes.fontDarkMode : ''}>{currentVideo.playlist}</span>
                </div>
            </Grid>)
        }
    }

    return (
        <div style={{ width: "95%", marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }}>

            <Grid container direction={'row'} justifyContent={'center'} spacing={0}>
                <Grid item xs={9} justifyContent={'center'} direction={'row'}>
                    <Grid item>
                        <div>
                            <Grid container direction={'column'}>
                                <Grid item>
                                    <ReactPlayer controls width={'100%'} height={'500px'} style={{ marginLeft: 'auto', marginRight: 'auto', padding: "20px" }} url={currentVideo.url}></ReactPlayer>
                                </Grid>

                                <Grid item style={{ paddingLeft: '30px', paddingRight: '30px' }}>
                                    <Card className={`${props.darkmodeOn ? classes.cardDarkMode : classes.cardLightMode}`} style={{ width: '100%', height: '200px', padding: '20px' }} elevation={3}>
                                        <Grid style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }} item container justifyContent={'space-between'} direction={'row'}>
                                            <Grid item>
                                                <h3 className={props.darkmodeOn ? classes.fontDarkMode : ''}>{currentVideo.name}</h3>
                                            </Grid>
                                            {playlistLabel()}
                                        </Grid>
                                        <hr className={props.darkmodeOn ? classes.fontDarkMode : ''} style={{ marginTop: '0px' }}></hr>
                                        <Container>
                                            <p className={props.darkmodeOn ? classes.fontDarkMode : ''}>{currentVideo.description}</p>
                                            <br></br>
                                            <Grid direction={'row'} container spacing={2}>
                                                {currentVideo.tags?.map((tag) => (
                                                    <Grid className={props.darkmodeOn ? classes.fontDarkMode : ''} item>
                                                        <span>#{tag}</span>
                                                    </Grid>
                                                ))}</Grid>

                                        </Container>
                                    </Card>
                                </Grid>


                            </Grid>

                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={6} lg={3} style={{ paddingTop: '20px' }}>
                    <Card className={`${classes.playlistStyle} ${props.darkmodeOn ? classes.cardDarkMode : classes.cardLightMode}`} elevation={4}>
                        <PlayList onClick={changeVideo} darkmodeOn={props.darkmodeOn} playlistlinks={tutorial1}></PlayList>
                    </Card>
                </Grid>

            </Grid>
        </div>
    )
}

export default VideoPlayer;