import React from 'react';
import { useState } from 'react';
import { Nav, Navbar, Container, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

//component for navbar when the window is small, or on mobile

interface propTypes{
    darkmodeOn: boolean,
    darkmode: any
}
const Navbarsm = (props: propTypes) => {



    return (
        <div>
            <Navbar bg={props.darkmodeOn ? 'dark' : 'primary'} expand="sm" variant={props.darkmodeOn ? 'dark' : 'light'}>
                <Container>

                    <Navbar.Brand className={'ms-auto d-none d-sm-block'}>

                        Inventory
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />



                    <div>
                        <Button onClick={props.darkmode} variant={props.darkmodeOn ? 'dark' : 'primary'}>
                            {props.darkmodeOn ? <Icon.MoonStars></Icon.MoonStars> : <Icon.Sun></Icon.Sun>}
                        </Button>


                        <Button variant={'outline-info'}>Login</Button>
                    </div>

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


                </Container>

            </Navbar>

        </div>
    )
}

export default Navbarsm;