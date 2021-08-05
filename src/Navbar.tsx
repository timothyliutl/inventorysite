import React from 'react';
import { useState } from 'react';
import { Nav, Navbar, Container, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import { makeStyles } from '@material-ui/core';


//TODO: make this nav bar responsive and add a dropdown 

const SiteNavbar = (props: any) => {
    const styles = makeStyles({
        lightModeText: {
            color: "black",
            transition: "background-color 1s",
        },
        darkModeText: {
            color: "#04d9ff",

            transition: "background-color 1s",
        },
        inputDarkMode: {
            color: "#04d9ff",
        },
        darkBackground: {
            backgroundColor: "black",
            "&:focus": {
                backgroundColor: "black",
                color: "white",
                transition: "background-color 1s",
            },
            color: "white",
            transition: "background-color 1s",
        },


    })
    const classes = styles();

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
                            {props.darkmodeOn ? <Icon.MoonStars style={{color:"#04d9ff"}}></Icon.MoonStars> : <Icon.Sun></Icon.Sun>}
                        </Button>
                        <Button variant={props.darkmodeOn?'outline-info':'primary'}>Login</Button>

                    </Nav>
                    
                </Container>
                
            </Navbar>
            
        </div>
    )


}
export default SiteNavbar;