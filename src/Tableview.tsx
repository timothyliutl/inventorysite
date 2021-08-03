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
                        <TableRow>
                            {tableNames.map((table) => (
                                <TableCell style={{ fontWeight: 'bold', backgroundColor: "rgba(0,0,0,0)"}} align={'center'} className={props.darkmodeOn ? classes.darkModeText : classes.lightModeText}>{table}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {tableEntries.map((table)=>(
                        <TableRow>
                            <TableCell align={'center'} className={props.darkmodeOn ? classes.darkModeText : classes.lightModeText}>{table.name}</TableCell>
                            <TableCell align={'center'} className={props.darkmodeOn ? classes.darkModeText : classes.lightModeText}>{table.description}</TableCell>
                            <TableCell align={'center'} className={props.darkmodeOn ? classes.darkModeText : classes.lightModeText}>{table.location}</TableCell>
                            <TableCell align={'center'}><img style={{maxHeight:"50px"}} src={table.image}></img></TableCell>
                            
                        </TableRow>
                    ))}



                    </TableBody>
                </Table>
            </Container>

        </div>
    )
}

export default Tableview;