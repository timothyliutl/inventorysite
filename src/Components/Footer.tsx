import { Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import * as Icon from 'react-bootstrap-icons';

const Footer = (props: any) => {
    //TODO: implement dark mode 
    return (
        <div style={{ marginTop: '50px', paddingBottom: "50px"}}>
            <hr style={{marginBottom:'50px', width: '80%', marginRight:'auto', marginLeft:'auto'}}></hr>
            <Container>
                <Grid container direction={'row'}>
                    <Grid container direction={'column'}>
                        <Typography variant={'subtitle1'}>
                            {String.fromCharCode(60,47,62)+" with "} <Icon.Heart></Icon.Heart>  {" at Queen's University"}
                        </Typography>
                    </Grid>
                    <Grid container direction={'column'}></Grid>
                    <Grid container direction={'column'}></Grid>
                </Grid>
            </Container>

        </div>
    )

}

export default Footer;