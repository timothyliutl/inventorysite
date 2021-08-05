import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Container from 'react-bootstrap/esm/Container';

const InfoContainer = (props: any) => {

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
        infoContainerStyle: {
            borderRadius: "20px",
            padding: "10px",
            
            backgroundColor: "#0275d8"
        }
    })
    const titleComponent = (title:string) => {
        if (title) {
            return (
                <div>
                    <Typography variant={'h4'}>{props.title}</Typography>
                    <hr></hr>
                </div>

            )
        }
    }
    //might be best to use materialui grids in order to make the site more responsive to window size
    const classes = styles();

    return (
        <div className={classes.infoContainerStyle} style={{ maxWidth: "400px", minHeight: "300px" }}>
            {/* replace this with props value */}
            <Container>
                {titleComponent(props.title)}
                {props.children}
            </Container>
        </div>
    )
}
export default InfoContainer;