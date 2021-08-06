import React from 'react';
import { Nav, Navbar, Container, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';




const HomePageContent = (props: any) => {
    const styles = makeStyles({
        lightModeText: {
            color: "black"
        },
        darkModeText: {
            color: "#04d9ff"
        }
    })
    const classes = styles();
    const container = {
        minHeight: "30vh",
        width: "70vh",
        borderRadius: "5vh",
        backgroundColor: "grey",
        textAlign: 'center' as 'center',
        marginTop: "50px",
        marginLeft: 'auto',
        marginRight: 'auto'
    }
    const center = {
        marginLeft: 'auto',
        marginRight: 'auto'
    }

    return (
        <div style={{height: '100vh'}}>
            <Container>
                <Row className={'align-items-center'}>
                    <Col>
                        <Typography className={props.darkmodeOn ? classes.darkModeText : classes.lightModeText} variant={'h1'} style={{ textAlign: 'center', marginTop: "50px" }}>Physics Inventory</Typography>
                        <Typography className={props.darkmodeOn ? classes.darkModeText : classes.lightModeText} variant={'h6'} style={{ textAlign: 'center', marginTop: "10px" }}>
                            All 5th floor Lab Equipment Made Simple
                        </Typography>
                    </Col>
                </Row>
                <Row>
                    <Button style={{ width: "200px", marginLeft: 'auto', marginRight: 'auto', marginTop: '40px' }}>Get Started</Button>
                </Row>
            </Container>

        </div>
    )
}

export default HomePageContent;