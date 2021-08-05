import React from 'react';
import { Container } from 'react-bootstrap';
import InfoContainer from '../Components/InfoContainer';

const ItemPage = (props:any) =>{
return(
<div>
    <Container>
        <h3>Hello World</h3>
        <InfoContainer darkmodeOn={props.darkmodeOn} title={"Item Image"}>
            <p>Sample image of the item</p>
            <img></img>
        </InfoContainer>
    </Container>
</div>
)
}

export default ItemPage;