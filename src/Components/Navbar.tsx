import React, { useEffect } from 'react';
import { useState } from 'react';
import { Nav, Navbar, Container, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import { Hidden, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Navbarsm from './Navbarsm';

interface propTypes{
    darkmodeOn: boolean, //tells component if darkmode is on
    darkmode: any //function to toggle darkmode on and off
}
const SiteNavbar = (props: propTypes) => {
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

    const [isMobile, setIsMobile] = useState(false); //hook to see if window is mobile or not
    //detect mobile at 575px

    const updateWindowSize = () => {
        //updates hook based on window size
        if (window.innerWidth <= 575) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', updateWindowSize) //calls function each time window is resized
    })
    if (isMobile) {
        return (
            <div>
                <Navbarsm darkmode={props.darkmode} darkmodeOn={props.darkmodeOn}></Navbarsm>
            </div>
        )
    } else {
        return (
            <div>
                {/*Idea is that we are using one navbar component to be show on mobile and another to be shown on larger screens */}
                {/*To be used on larger screens */}

                <Navbar bg={props.darkmodeOn ? 'dark' : 'primary'} expand="sm" variant={props.darkmodeOn ? 'dark' : 'light'}>
                    <Container>

                        <Navbar.Brand className={'ms-auto d-none d-sm-block'}>
                            <Link to={'/categorysearch'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                Inventory
                            </Link>
                            
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                        <Navbar.Collapse>
                            <Nav >
                                <Nav.Link>
                                    <Link to={'/categorysearch'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        Categories
                                    </Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to={'/videoselection'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        Tutorials
                                    </Link>

                                </Nav.Link>
                                <Nav.Link>FAQ</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav style={{ width: "100px" }}>

                            <Button style={{ marginRight: "15px" }} onClick={props.darkmode} variant={props.darkmodeOn ? 'dark' : 'primary'}>
                                {props.darkmodeOn ? <Icon.MoonStars style={{ color: "#04d9ff" }}></Icon.MoonStars> : <Icon.Sun></Icon.Sun>}
                            </Button>
                            <Button variant={props.darkmodeOn ? 'outline-info' : 'primary'}>Login</Button>

                        </Nav>

                    </Container>

                </Navbar>
            </div>
        )
    }


}
export default SiteNavbar;