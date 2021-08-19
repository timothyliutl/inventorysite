import { Card, Container, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Redirect } from 'react-router';
import PlayList from './PlayList';

interface propTypes {
    darkmodeOn: boolean,
    playlistID: string
}
//data for each video; playlist is just an array of videotypes
interface videoTypes {
    name: string,
    url: string,
    time: string,
    id: string,
    description: string,
    playlist?: string, //to be displayed on the video, not the id 
    tags?: Array<string>
}
//data expected from post request
interface postDataType {
    [id: string]: Array<videoTypes>
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

    const tutorial2: Array<videoTypes> = [{
        name: "Setting up the Red Pitaya for quantum conductance",
        url: "https://www.youtube.com/watch?v=iNNQ9wcnUTA",
        time: "1:43",
        id: "Electronics1",
        playlist: 'Electronics',
        description: ""
    },
    {
        name: "Response Time Introduction",
        url: 'https://www.youtube.com/watch?v=kPeenFBDXSQ',
        time: '3:36',
        id: "Eletronics2",
        playlist: "Electronics",
        description: ""
    },
    {
        name: 'Red pitaya introduction',
        url: 'https://www.youtube.com/watch?v=LbVJD9Rn5Qc',
        time: '3:21',
        id: 'Electronics3',
        playlist: 'Electronics',
        description: ''
    },
    {
        name: 'light sensors',
        url: 'https://www.youtube.com/watch?v=pdrDteW7qow',
        time: '1:31',
        id: 'Electronics4',
        playlist: 'Electronics',
        description: ''
    },
    {
        name: 'LED',
        url: 'https://www.youtube.com/watch?v=bNoCnjQMULE',
        time: '1:53',
        id: 'Electronics6',
        playlist: 'Electronics',
        description: ''
    },
    {
        name: 'Arduino',
        url: 'https://www.youtube.com/watch?v=MUkqLgF7sVY',
        time: '4:08',
        id: 'Electronics7',
        playlist: 'Electronics',
        description: ''
    }
    ]
    const tutorial3: Array<videoTypes> = [{
        name: 'Chuck Runout',
        url: 'https://www.youtube.com/watch?v=o8N3dxXe8Qw',
        time: '1:00',
        id: 'Machine1',
        playlist: 'Machine Shop',
        description: ''
    }, {
        name: 'Changing the Chuck',
        url: 'https://www.youtube.com/watch?v=Hm6oCqxSa5E',
        time: '2:03',
        id: 'Machine2',
        playlist: 'Machine Shop',
        description: ''
    }]

    const samplePOSTReqData: postDataType = {
        sample: sampleplaylist,
        id1: tutorial1,
        id2: tutorial2,
        id3: tutorial3
    }
    //function to check if url parameter is valid
    const checkIfExists = (id: string) => {
        if (samplePOSTReqData[id] == undefined) {
            return 'sample'
        } else {
            return id;
        }
    }


    const [currentVideo, setCurrentVideo] = useState(samplePOSTReqData[checkIfExists(props.playlistID)][0] as videoTypes)
    const [currentPlaylist, setCurrentPlaylist] = useState(samplePOSTReqData[checkIfExists(props.playlistID)])


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
                <div className={classes.playlistContainer} style={props.darkmodeOn ? { backgroundColor: '#52057B' } : { backgroundColor: '#5bc0de' }}>
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
                        <PlayList onClick={changeVideo} darkmodeOn={props.darkmodeOn} playlistlinks={currentPlaylist} selected={currentVideo.id}></PlayList>
                    </Card>
                </Grid>

            </Grid>
        </div>
    )
}

export default VideoPlayer;