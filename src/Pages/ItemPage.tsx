import React from 'react';
import { Container } from 'react-bootstrap';
import ImageDisplay from '../Components/ImageDisplay';
import InfoContainer from '../Components/InfoContainer';

const ItemPage = (props:any) =>{
return(
<div>
    <Container>
        <h3>Hello World</h3>
        <InfoContainer darkmodeOn={props.darkmodeOn} title={"Item Image"}>
            <div>
                <ImageDisplay darkmodeOn={props.darkmodeOn}></ImageDisplay>
            </div>
        </InfoContainer>
    </Container>
</div>
)
}

export default ItemPage;