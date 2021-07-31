import React from 'react';
import { useState } from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';




const SiteNavbar = (props:any) => {


    return (
        <div>
            <Navbar bg={props.darkmodeOn?'dark':'primary'} expand="lg">
                <Container>
                    <Navbar.Brand>
                        Inventory
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Tutorials</Nav.Link>
                        <Nav.Link>FAQ</Nav.Link>
                        <Button onClick={props.darkmode}>
                            {props.darkmodeOn?<Icon.MoonStars></Icon.MoonStars>:<Icon.Sun></Icon.Sun>}
                        </Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )


}
export default SiteNavbar;