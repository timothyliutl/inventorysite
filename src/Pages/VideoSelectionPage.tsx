import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import PlayListTile from '../Components/PlayListTile'

interface propTypes {
    darkmodeOn: boolean
}

const VideoSelectionPage = (props: propTypes) => {

    return (
        <div style={{ marginTop: ' 30px' }}>
            <Container>
                <Typography variant={'h4'}>Playlist Selection</Typography>
                <hr></hr>
                <Container>
                    <Grid container direction={'row'} justifyContent={"space-between"} spacing={3}>
                        <Grid item>
                            <PlayListTile darkmodeOn={props.darkmodeOn}></PlayListTile>
                        </Grid>
                        <Grid item>
                            <PlayListTile darkmodeOn={props.darkmodeOn}></PlayListTile>
                        </Grid>
                        <Grid item>
                            <PlayListTile darkmodeOn={props.darkmodeOn}></PlayListTile>
                        </Grid>
                    </Grid>
                </Container>

            </Container>
        </div>
    )
}

export default VideoSelectionPage;