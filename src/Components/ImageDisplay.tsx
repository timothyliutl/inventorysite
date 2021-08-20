import { Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';
import {Transition} from 'react-transition-group';

//TODO: find a grey color for the container in darkmode
interface propsType{
    darkmodeOn:boolean,
    imageURLs?: Array<String>
}

const ImageDisplay = (props:propsType) =>{
    const testURLs = [{
        url:"https://dioguwdgf472v.cloudfront.net/media/logos/equityinvest/Company/y4lxnqcngh5dvoaz06as_GD5UCO.png",
        id: "image1"
    }, {
        url:"https://dioguwdgf472v.cloudfront.net/media/logos/equityinvest/Company/wi1mlnkbn2jluko8pzkj-e6da1d10bc1f9093.png",
        id:"image2"
    }]


    const [image, setImage] = useState(testURLs[0].url);
    const [inProp, setInProp] = useState(false);
    const [glow, setGlow] = useState(testURLs[0].id)

    const updateImage = (e:React.MouseEvent<HTMLImageElement>) =>{
        const img = e.currentTarget as HTMLImageElement;
        setGlow(img.id)
        setImage(img.src)
    }

    
    const styles = makeStyles({
        ImageDisplay:{
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
        },
        darkmodeglow:{
            boxShadow: "0px 0px 10px 2px white !important"
        },
        glow:{
            boxShadow: "0px 0px 10px 2px black !important"
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
    //white looks better in both cases but I'll leave the function here in case we want to use it in the future
    const whichGlow = (input:boolean) => {
        if(input){
            return classes.darkmodeglow
        }else{
            return classes.glow;
        }
    }

    return(
        <div style={{}}>
            <div className={classes.ImageDisplay}>
                <img style={{borderRadius:'20px', marginLeft:'auto', marginRight:'auto', width: '100%', maxWidth:'250px', marginBottom:'20px'}} src={image}></img>
            </div>
            <div className={classes.bottomGrid}>
                <hr style={props.darkmodeOn?{marginTop:'30px', color:'white', height:'2px', marginBottom:'15px'}:{marginTop:'30px', height:'2px', marginBottom:'15px'}}></hr>
                <Grid container direction={'row'} justifyContent='center' spacing={3}>
                    {testURLs.map((img)=>(
                            <Grid item>
                                <img id={img.id} onClick={updateImage} className={`${classes.thumbnailStyle} ${img.id==glow?classes.darkmodeglow:""}`} src={img.url}></img>
                            </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}

export default ImageDisplay;
