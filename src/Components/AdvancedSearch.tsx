import { Checkbox, FormControl, FormControlLabel, FormGroup, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

interface propTypes{
    darkmodeOn: boolean
}

const AdvancedSearch = (props: any) => {

    
    const categories = [{
        name: "Testing Equipment",
        subcategories: ["USB Cables", "Voltmeters", "Batteries"]
    },
    {
        name: "Computers",
        subcategories: ["Raspberry Pi", "Arduino", "Laptops"]
    },]
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
            color: "#f14235",
        }


    })
    const classes = styles();

    return (
        <div style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>

            <Row>
                {/*Column corresponds to category checkboxes for advanced search*/}
                <Col>

                    <FormControl>

                        <h3 style={{ marginBottom: "20px" }} className={props.darkmodeOn ? classes.inputDarkMode : ""}>Category</h3>
                        <Container>
                            <Grid container direction={'row'} spacing={3} justifyContent={'space-between'}>
                            {categories.map((category) => (
                                <Grid item>
                                <div>
                                    <Typography variant={'h6'} className={props.darkmodeOn ? classes.secondaryDarkMode : ""}>{category.name}</Typography>
                                    <Container>
                                        <FormGroup>
                                            {category.subcategories.map((subcat) => (
                                                <div>
                                                    <FormControlLabel className={props.darkmodeOn ? classes.inputDarkMode : ""} control={<Checkbox style={{ color: "#04d9ff" }}></Checkbox>} label={subcat} />
                                                </div>
                                            ))}
                                        </FormGroup>
                                    </Container>
                                </div>
                                </Grid>
                            )
                            )}</Grid>
                            <Grid container justifyContent={'flex-end'}>
                                <Grid item>
                                    <Button variant={props.darkmodeOn?"outline-info":"primary"}>Apply Filters</Button>
                                </Grid>
                            </Grid>
                        </Container>

                    </FormControl>

                </Col>
            </Row>

        </div>
    )
}
export default AdvancedSearch;