import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Container } from 'react-bootstrap';
import ImageDisplay from '../Components/ImageDisplay';
import InfoContainer from '../Components/InfoContainer';
import WideInfoContainer from '../Components/WideInfoContainer';

const ItemPage = (props: any) => {
    return (
        <div>
            <Container style={{ marginTop: '40px' }}>
                <Grid container direction={'row'} spacing={5} justifyContent={'center'}>
                    <Grid item>
                        <InfoContainer darkmodeOn={props.darkmodeOn} title={"Images"}>
                            <div>
                                <ImageDisplay darkmodeOn={props.darkmodeOn}></ImageDisplay>
                            </div>
                        </InfoContainer>
                    </Grid>
                    <Grid item direction={'column'}>
                        <WideInfoContainer darkmodeOn={props.darkmodeOn}></WideInfoContainer>
                    </Grid>

                </Grid>

            </Container>
        </div>
    )
}

export default ItemPage;