import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import CardComponent from '../Components/CardComponent';

const CategorySearch = (props: any) => {

    const styles = makeStyles({
        lightModeText: {
            color: "black"
        },
        darkModeText: {
            color: "#04d9ff"
        },
        hrStyleDark:{
            color: "#04d9ff"
        }
    })
    const classes = styles();

    return (
        <div>
            <Container>
                <Container>
                    <Typography className={props.darkmodeOn?classes.darkModeText:classes.lightModeText} style={{marginTop: "30px"}} variant={'h3'}>Quick Links</Typography>
                </Container>
                <Grid spacing={7} container justifyContent={'center'}>
                    <Grid item>
                        <CardComponent title={'Tutorials'} description={'Various Tutorial Videos'} imageurl={'https://avatars.githubusercontent.com/u/1965106?s=200&v=4'}></CardComponent>
                    </Grid>
                    <Grid item>
                        <CardComponent title={'Tutorials'} description={'Various Tutorial Videos'} imageurl={'https://avatars.githubusercontent.com/u/1965106?s=200&v=4'}></CardComponent>
                    </Grid>
                </Grid>
                <hr className={props.darkmodeOn?classes.hrStyleDark:""} style={{marginTop:'70px', marginBottom:'70px'}}></hr>
                <Container>
                    <Typography className={props.darkmodeOn?classes.darkModeText:classes.lightModeText} variant={'h3'} style={{marginTop: "30px"}}>Popular Categories</Typography>
                </Container>
                <Grid spacing={7} container justifyContent={'center'}>
                    <Grid item>
                        <CardComponent title={'Tutorials'} description={'Various Tutorial Videos'} imageurl={'https://avatars.githubusercontent.com/u/1965106?s=200&v=4'}></CardComponent>
                    </Grid>
                    <Grid item>
                        <CardComponent title={'Tutorials'} description={'Various Tutorial Videos'} imageurl={'https://avatars.githubusercontent.com/u/1965106?s=200&v=4'}></CardComponent>
                    </Grid>
                    <Grid item>
                        <CardComponent title={'Tutorials'} description={'Various Tutorial Videos'} imageurl={'https://avatars.githubusercontent.com/u/1965106?s=200&v=4'}></CardComponent>
                    </Grid>
                    <Grid item>
                        <CardComponent title={'Tutorials'} description={'Various Tutorial Videos'} imageurl={'https://avatars.githubusercontent.com/u/1965106?s=200&v=4'}></CardComponent>
                    </Grid>
                    <Grid item>
                        <CardComponent title={'Tutorials'} description={'Various Tutorial Videos'} imageurl={'https://avatars.githubusercontent.com/u/1965106?s=200&v=4'}></CardComponent>
                    </Grid>
                    <Grid item>
                        <CardComponent title={'Tutorials'} description={'Various Tutorial Videos'} imageurl={'https://avatars.githubusercontent.com/u/1965106?s=200&v=4'}></CardComponent>
                    </Grid>
                    <Grid item>
                        <CardComponent title={'Tutorials'} description={'Various Tutorial Videos'} imageurl={'https://avatars.githubusercontent.com/u/1965106?s=200&v=4'}></CardComponent>
                    </Grid>
                    <Grid item>
                        <CardComponent title={'Tutorials'} description={'Various Tutorial Videos'} imageurl={'https://avatars.githubusercontent.com/u/1965106?s=200&v=4'}></CardComponent>
                    </Grid>
                    <Grid item>
                        <CardComponent title={'Tutorials'} description={'Various Tutorial Videos'} imageurl={'https://avatars.githubusercontent.com/u/1965106?s=200&v=4'}></CardComponent>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default CategorySearch;