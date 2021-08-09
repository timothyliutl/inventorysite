import { Typography } from '@material-ui/core';
import React from 'react';
import { Container } from 'react-bootstrap';
import ImageDisplay from '../Components/ImageDisplay';
import InfoContainer from '../Components/InfoContainer';

const ItemPage = (props:any) =>{
return(
<div>
    <Container>
        <InfoContainer darkmodeOn={props.darkmodeOn} title={"Images"}>
            <div>
                <ImageDisplay darkmodeOn={props.darkmodeOn}></ImageDisplay>
            </div>
        </InfoContainer>
    </Container>
</div>
)
}

export default ItemPage;