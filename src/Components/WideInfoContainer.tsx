import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import * as Icon from 'react-bootstrap-icons';


interface propsTypes {
    darkmodeOn?: boolean,

}


const WideInfoContainer = (props: propsTypes) => {
    const styles = makeStyles({
        container: {
            width: '100%',
            minHeight: '200px',
            backgroundColor: '#FFBF86',
            borderRadius: '25px',
            padding: '20px'
        },
        categoryStyle: {
            padding: "10px",
            borderRadius:'20px',
            backgroundColor:'#C2F784'
        }
    })
    const classes = styles()

    return (
        <div className={classes.container}>
            <Grid container direction={'row'} justifyContent={'space-between'}>
                <Grid item>
                    <h4>Item Name</h4>
                </Grid>
                <Grid item>
                    <h5 className={classes.categoryStyle}>Lab Materials</h5>
                </Grid>

            </Grid>
            <hr style={{marginTop:'0px', marginBottom:'0px'}}></hr>
            <Container style={{marginTop:'10px'}}>
                <Typography variant={'h6'}> <Icon.PinMap></Icon.PinMap> Location: Stirling 504</Typography>
                <Typography variant={'h6'}> <Icon.InfoCircle></Icon.InfoCircle> Serial Number: 123456 </Typography>
            </Container>
        </div>
    )
}

export default WideInfoContainer;