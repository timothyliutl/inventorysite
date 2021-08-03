import React from 'react';
import { useState } from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';




const SiteNavbar = (props: any) => {


    return (
        <div>
            <Navbar bg={props.darkmodeOn ? 'dark' : 'primary'} expand="lg" variant={props.darkmodeOn ? 'dark' : 'light'}>
                <Container><Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Brand>
                        Inventory
                    </Navbar.Brand>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={'me-auto'}>
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>Tutorials</Nav.Link>
                            <Nav.Link>FAQ</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Item style={{marginRight: "15px"}}>
                                <Button onClick={props.darkmode} variant={props.darkmodeOn ? 'dark' : 'primary'}>
                                    {props.darkmodeOn ? <Icon.MoonStars></Icon.MoonStars> : <Icon.Sun></Icon.Sun>}
                                </Button>
                            </Nav.Item>
                            <Nav.Item>
                                <Button variant={'outline-info'}>Login</Button>
                            </Nav.Item>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )


}
export default SiteNavbar;