import React from 'react';
import { Container, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';

const Tableview = (props: any) => {
    const styles = makeStyles({
        lightModeText: {
            color: "black",
            transition: "background-color 1s",
        },
        darkModeText: {
            color: "#04d9ff",
            backgroundColor:"#333333",
            transition: "background-color 1s",
        }
    })
    const classes = styles();
    const tableNames = ["Name", "Description", "Location", "Image"]; //array that code loops through to display table names
    const tableEntries = [{
        name: "spoon",
        description: "eating utensil",
        location: "cafeteria",
        image: "https://res-3.cloudinary.com/christofle/s--Rqc7_NRo--/c_limit,dpr_2.0,f_auto,h_500,q_auto,w_500/media/catalog/product/S/t/Standard_20table_20spoon_20Albi_20_20Sterling_20silver_01407022000101_F_2_1.png"
    }];
    return (
        <div>
            <Container>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow className={props.darkmodeOn ? classes.darkModeText : classes.lightModeText}>
                            {tableNames.map((table)=>(
                                <TableCell style={{fontWeight:'bold'}} align={'center'} className={props.darkmodeOn ? classes.darkModeText : classes.lightModeText}>{table}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            tableEntries.map((entry)=>{
                                <TableRow>
                                    <TableCell style={{fontWeight:'bold'}} align={'center'} className={props.darkmodeOn ? classes.darkModeText : classes.lightModeText}>{entry.name}</TableCell>
                                    <TableCell style={{fontWeight:'bold'}} align={'center'} className={props.darkmodeOn ? classes.darkModeText : classes.lightModeText}>{entry.description}</TableCell>
                                    <TableCell style={{fontWeight:'bold'}} align={'center'} className={props.darkmodeOn ? classes.darkModeText : classes.lightModeText}>{entry.location}</TableCell>
                                    <TableCell style={{fontWeight:'bold'}} align={'center'} className={props.darkmodeOn ? classes.darkModeText : classes.lightModeText}>{entry.image}</TableCell>
                                </TableRow>
                            })
                        }
                    </TableBody>
                </Table>
            </Container>

        </div>
    )
}

export default Tableview;