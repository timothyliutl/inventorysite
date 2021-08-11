import { makeStyles } from '@material-ui/core';
import React, { ReactChild } from 'react'

interface propsTypes {
    darkmodeOn?: boolean,
    fileLocations?: Array<String>,
    title?: string,
    children?: React.ReactElement
}

const FilesContainer = (props: propsTypes) => {

    const styles = makeStyles({
        container: {
            width: '100%',
            minHeight: '200px',
            backgroundColor: '#FFBF86',
            borderRadius: '25px',
            padding: '20px'
        },
        categoryStyle: {
            padding: "10px",
            borderRadius: '20px',
            backgroundColor: '#C2F784'
        }
    })
    const classes = styles()

    return (
        <div className={classes.container}>
            <h4>{props.title}</h4>
            <hr></hr>
            {props.children}
        </div>
    )
}

export default FilesContainer;