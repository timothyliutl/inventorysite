import { makeStyles, Typography } from '@material-ui/core';
import React, { ReactChild, ReactChildren } from 'react';
import Container from 'react-bootstrap/esm/Container';

//interface used to tell typescript what we are expecting for the props
interface input{
    darkmodeOn:boolean,
    title: string,
    children: ReactChild | ReactChildren
}
const InfoContainer = (props: input) => {

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
        },
        infoContainerDarkStyle:{
            backgroundColor:"#04d9ff"
        }
    })
    //function for conditional rendering
    const titleComponent = (title:string) => {
        if (title) {
            return (
                <div>
                    <Typography variant={'h3'}>{props.title}</Typography>
                    <hr></hr>
                </div>

            )
        }
    }
    //might be best to use materialui grids in order to make the site more responsive to window size
    const classes = styles();

    return (
        <div className={classes.infoContainerStyle} style={{ maxWidth: "400px", minHeight: "300px", marginLeft:'auto', marginRight:'auto' }}>
            {/* replace this with props value */}
            <Container>
                {titleComponent(props.title)}
                {props.children}
            </Container>
        </div>
    )
}
export default InfoContainer;