import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import * as Icon from 'react-bootstrap-icons';


interface propsTypes{
    darkmodeOn?: boolean,
    fileList: Array<string>
}
const FilesList = (props:propsTypes) =>{
    const styles = makeStyles({})

    const classes = styles();

    return(
        <div style={{maxHeight:'300px', width:'100%', marginTop:'10px'}}>
            <Grid container direction={'row'} spacing={3} justifyContent={'center'}>
                {props.fileList.map((file)=>(

                        <Grid item>
                            <div style={{textAlign:'center'}}>
                                <img style={{height: '50px'}} src={'https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg'}></img>
                                <p>{file}</p>
                            </div>
                        </Grid>

                ))}
            </Grid>
        </div>
    )
}
export default FilesList;