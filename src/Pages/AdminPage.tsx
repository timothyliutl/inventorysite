import { Container, Grid, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

interface propTypes {
    darkmodeOn: boolean
}
const AdminPage = (props: propTypes) => {

    const styles = makeStyles({
        input: {
            width: '80%',
            maxWidth:'300px'
        }
    });
    const classes = styles();

    const [playlistName, setPlaylistName] = useState("");
    const [playlistDescription, setPlaylistDescription] = useState("");
    const [playlistURL, setPlaylistURL] = useState("")

    const onSubmitPlaylist = () =>{
        console.log(playlistName)
        console.log(playlistDescription)
        console.log(playlistURL)

        fetch("http://uglabs.phy.queensu.ca:81/videoDB.php", {
            method: 'POST',
            body: JSON.stringify({type: 'playlist', playlistname: playlistName, playlistdescription: playlistDescription, imageurl: playlistURL})
        }).then((response)=>{
            console.log(response)
        })
    }

    return (
        <div style={{ marginTop: '30px', textAlign:'center'}}>
            <Container>
                <Typography variant={'h4'}>Create New Playlist</Typography>
                <form autoComplete={'off'}>
                    <input hidden id={'type'} value={'playlist'}></input>
                    <Grid container direction={'column'} spacing={1}>
                        <Grid item>
                            <TextField onChange={(e)=>{setPlaylistName((e.target.value))}} className={classes.input} label={'Playlist name'} id={'playlistname'}></TextField>
                        </Grid>
                        <Grid item>
                            <TextField onChange={(e)=>{setPlaylistDescription((e.target.value))}} className={classes.input} label={'Playlist Description'} id={'playlistdescription'}></TextField>
                        </Grid>
                        <Grid item>
                            <TextField onChange={(e)=>{setPlaylistURL((e.target.value))}} className={classes.input} label={'Image URL'} id={'imageurl'}></TextField>
                        </Grid>
                    </Grid>
                    <br></br>
                    <Button onClick={onSubmitPlaylist}>Submit</Button>
                </form>
                <br></br>
                <br></br>
                <Typography variant={'h4'}>Add Video to Playlist</Typography>
                <form>
                    <input hidden id={'type'} value={'video'}></input>
                    <Grid container direction={'column'} spacing={1}>
                        <Grid item>
                            <TextField className={classes.input} label={'Video Name'} id={'videoname'}></TextField>
                        </Grid>
                        <Grid item>
                            <TextField className={classes.input} label={'Video URL'} id={'videourl'}></TextField>
                        </Grid>
                        <Grid item>
                            <TextField className={classes.input} label={'Video Description'} id={'videodescription'}></TextField>
                        </Grid>
                        <Grid item>
                            <Select className={classes.input} id={'playlist'} label={'Playlist Name'} value={''}>
                                <MenuItem disabled>Select Playlist Name</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div>
    )

}

export default AdminPage;