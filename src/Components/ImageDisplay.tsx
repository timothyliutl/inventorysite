import { Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react'


interface propsType{
    darkmodeOn:boolean,
    imageURLs?: Array<String>
}

const ImageDisplay = (props:propsType) =>{
    const testURLs = ['https://dioguwdgf472v.cloudfront.net/media/logos/equityinvest/Company/wi1mlnkbn2jluko8pzkj-e6da1d10bc1f9093.png', 'https://dioguwdgf472v.cloudfront.net/media/logos/equityinvest/Company/y4lxnqcngh5dvoaz06as_GD5UCO.png']


    const [image, setImage] = useState(testURLs[0]);

    const updateImage = (e:React.MouseEvent<HTMLImageElement>) =>{
        const img = e.currentTarget as HTMLImageElement;
        setImage(img.src)
    }

    
    const styles = makeStyles({
        ImageDisplay:{
            height:'300px',
            textAlign:'center'
            
        },
        bottomGrid:{
            height:'100px'
        },
        imageStyle:{
            maxHeight:'250px',
            maxWidth:'175px',
            
        },
        thumbnailStyle:{
            maxHeight:'50px',
            maxWidth:'50px',
            borderRadius:'10px'
        }
    })
    const classes = styles();

    const displayImage = () =>{
        if(!image){
            return testURLs[0];
        }else{
            return image;
        }
    }

    return(
        <div style={{height:'450px'}}>
            <div className={classes.ImageDisplay}>
                <img style={{borderRadius:'20px', marginLeft:'auto', marginRight:'auto'}} src={image}></img>
            </div>
            <div className={classes.bottomGrid}>
                <Grid container direction={'row'} justifyContent='center' spacing={3}>
                    {testURLs.map((url)=>(
                            <Grid item>
                                <img onClick={updateImage} className={classes.thumbnailStyle} src={url}></img>
                            </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}

export default ImageDisplay;
