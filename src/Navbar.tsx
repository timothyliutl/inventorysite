import React from 'react';
import { useState } from 'react';
import { Nav, Navbar, Container, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';


//TODO: make this nav bar responsive and add a dropdown 

const SiteNavbar = (props: any) => {


    return (
        <div>
            <Navbar bg={props.darkmodeOn ? 'dark' : 'primary'} expand="sm" variant={props.darkmodeOn ? 'dark' : 'light'}>
                <Container>
                    
                    <Navbar.Brand className={'ms-auto d-none d-sm-block'}>
                    
                        Inventory
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse>
                        <Nav >
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>Tutorials</Nav.Link>
                            <Nav.Link>FAQ</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav style={{width: "100px"}}>
                        
                        <Button style={{marginRight:"15px"}} onClick={props.darkmode} variant={props.darkmodeOn ? 'dark' : 'primary'}>
                            {props.darkmodeOn ? <Icon.MoonStars></Icon.MoonStars> : <Icon.Sun></Icon.Sun>}
                        </Button>


                        <Button variant={'outline-info'}>Login</Button>

                    </Nav>
                    
                </Container>
                
            </Navbar>
            
        </div>
    )


}
export default SiteNavbar;