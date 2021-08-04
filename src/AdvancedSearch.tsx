import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Row, Col } from 'react-bootstrap';

const AdvancedSearch = (props: any) => {
    const categories = [{
        name: "Testing Equipment",
        subcategories: ["Computers", "Voltmeters", "Batteries"]
    }]
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
        }


    })
    const classes = styles();

    return (
        <div style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>
            <Typography variant={'h5'} className={props.darkmodeOn ? classes.inputDarkMode : ""}>
                Filters
            </Typography>
            <hr style={props.darkmodeOn ? { color: "white" } : {}}></hr>
            <Row>
                {/*Column corresponds to category checkboxes for advanced search*/}
                <Col>
                    <u className={props.darkmodeOn ? classes.inputDarkMode : ""}>
                        <h5 className={props.darkmodeOn ? classes.inputDarkMode : ""}>Category</h5>
                    </u>
                    {categories.map((category) => (

                        <div>
                            <Typography className={props.darkmodeOn ? classes.inputDarkMode : ""}>{category.name}</Typography>
                            {category.subcategories.map((subcat) => {
                                <h6>{subcat}</h6>
                            })}
                        </div>

                    )
                    )}


                </Col>
                <Col>
                    <u className={props.darkmodeOn ? classes.inputDarkMode : ""}>
                        <h5 className={props.darkmodeOn ? classes.inputDarkMode : ""}>Date Added</h5>
                    </u>
                </Col>
                <Col>
                    <u className={props.darkmodeOn ? classes.inputDarkMode : ""}>
                        <h5 className={props.darkmodeOn ? classes.inputDarkMode : ""}>Location</h5>
                    </u>
                </Col>
            </Row>

        </div>
        )
}
export default AdvancedSearch;