import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import PlayListTile from '../Components/PlayListTile'

interface propTypes {
    darkmodeOn: boolean,
}

interface playListType {
    name: string,
    description?: string,
    imageURL?: string,
    id: string, //has to match playlist id in js object in video plauer 
    tags?: Array<string>,
    //to be implemented once database is set up
    numVideos?: number
}

const VideoSelectionPage = (props: propTypes) => {

    const sampleData: Array<playListType> = [
        {
            name: 'Tubing Tutorials',
            description: "First Playlist Videos",
            id: 'id1',
            imageURL: 'http://uglabs.phy.queensu.ca:81/attachments/playlist3.png'
        },
        {
            name: 'Electronics Tutorials',
            description: 'Second Playlist Videos',
            id: 'id2',
            imageURL: 'http://uglabs.phy.queensu.ca:81/attachments/playlist2.png'
        },
        {
            name: 'Machine Shop Tutorials',
            description: 'Machine Shop Playlist', 
            id: 'id3',
            imageURL: 'http://uglabs.phy.queensu.ca:81/attachments/playlist1.png'
        }];


    return (
        <div style={{ marginTop: ' 30px' }}>
            <Container>
                <Typography style={props.darkmodeOn ? { color: "#04d9ff" } : {}} variant={'h4'}>Playlist Selection</Typography>
                <hr style={props.darkmodeOn ? { color: "#04d9ff" } : {}}></hr>
                <Container style={{ marginTop: '40px' }}>
                    <Grid container direction={'row'} justifyContent={"space-evenly"} spacing={3}>
                        {sampleData.map((playlist) => (
                            <Link to={`/video?playlistid=${playlist.id}`} style={{ textDecoration: 'none' }}>
                                <Grid item>
                                    <PlayListTile playlistInfo={playlist} darkmodeOn={props.darkmodeOn}></PlayListTile>
                                </Grid>
                            </Link>
                        ))}

                    </Grid>
                </Container>

            </Container>
        </div >
    )
}

export default VideoSelectionPage;