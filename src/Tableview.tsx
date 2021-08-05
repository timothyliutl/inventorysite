import React, { useState } from 'react';
import { Container, makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import { Button, Col, FloatingLabel, Form, Row, Modal } from 'react-bootstrap';
import AdvancedSearch from './AdvancedSearch';
//styles for light and darkmode states
const Tableview = (props: any) => {
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
        secondaryDarkMode: {
            color: "#8ffcff",
        },
        modalStyleing:{
            width: "90vw"
        },
        modalDarkMode:{
            color:"#8ffcff",
        },
        modalBodyDark:{
            backgroundColor:"#212529"
        }


    })
    const classes = styles();
    //sample data for table entries
    const tableNames = ["Name", "Description", "Location", "Image"]; //array that code loops through to display table names
    const tableEntries = [{
        name: "spoon",
        description: "eating utensil",
        location: "cafeteria",
        image: "https://res-3.cloudinary.com/christofle/s--Rqc7_NRo--/c_limit,dpr_2.0,f_auto,h_500,q_auto,w_500/media/catalog/product/S/t/Standard_20table_20spoon_20Albi_20_20Sterling_20silver_01407022000101_F_2_1.png"
    }, {
        name: "online school",
        description: "cursed",
        location: "hopefully not in 2021",
        image: "https://m.economictimes.com/thumb/msid-75599193,width-1200,height-900,resizemode-4,imgsize-66789/the-option-to-disable-pmis-can-be-locked-at-the-account-or-group-level-.jpg"
    }
    ];
        const [show, setShow] = useState(false);
        const handleClose = () =>{
            setShow(false);
        }
        const handleShow = () =>{
            setShow(true);
        }

    return (
        <div>
            <div style={{ width: "60%", marginLeft: "auto", marginRight: "auto", marginTop: "20px", marginBottom: "20px" }}>
                <Row>
                    <Col xs={1}><Icon.Search className={props.darkmodeOn ? classes.inputDarkMode : ""} size={35} style={{ marginTop: "10px" }}></Icon.Search></Col>
                    <Col xs={11}><FloatingLabel className={props.darkmodeOn ? classes.inputDarkMode : ""} label={<div>Search Here</div>} controlId={'floatingInput'}>
                        <Form.Control id={'floatingInput'} className={props.darkmodeOn ? classes.darkBackground : ""} placeholder={'sample placeholder'}>

                        </Form.Control>
                    </FloatingLabel></Col>
                </Row>
                <Row>
                    <div style={{display:"flex", justifyContent:"flex-end"}}>
                        <Button style={{marginTop:"20px"}} variant={props.darkmodeOn?"outline-info":"primary"} onClick={handleShow}>
                            <Typography variant={'subtitle1'}>Advanced Search</Typography>
                        </Button>
                    </div>
                </Row>
            </div>
            <Modal className={props.darkmodeOn?classes.modalDarkMode:""} size="lg" show={show} onHide={handleClose}>
                <Modal.Header className={props.darkmodeOn?classes.modalBodyDark:""}>
                    <Modal.Title>Search Filters</Modal.Title>
                    <Button variant={props.darkmodeOn?"outline-info":"primary"} onClick={handleClose}>
                        <Icon.X size={'30'}></Icon.X>
                    </Button>
                </Modal.Header>
                <Modal.Body className={props.darkmodeOn?classes.modalBodyDark:""}>
                    <AdvancedSearch darkmodeOn={props.darkmodeOn}></AdvancedSearch>
                </Modal.Body>
            </Modal>

            <Container>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {tableNames.map((table) => (
                                <TableCell style={{ fontWeight: 'bold', backgroundColor: "rgba(0,0,0,0)" }} align={'center'} className={props.darkmodeOn ? classes.darkModeText : classes.lightModeText}>{table}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableEntries.map((table) => (
                            <TableRow>
                                <TableCell align={'center'} className={props.darkmodeOn ? classes.darkModeText : classes.lightModeText}>{table.name}</TableCell>
                                <TableCell align={'center'} className={props.darkmodeOn ? classes.darkModeText : classes.lightModeText}>{table.description}</TableCell>
                                <TableCell align={'center'} className={props.darkmodeOn ? classes.darkModeText : classes.lightModeText}>{table.location}</TableCell>
                                <TableCell align={'center'}><img style={{ maxHeight: "50px" }} src={table.image}></img></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>
            
        </div>
    )
}

export default Tableview;