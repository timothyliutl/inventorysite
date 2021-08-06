import { Button, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import "../Styles/searchStyles.css"

const CardComponent = (props: any) => {

    const [isCardFlipped, flipCard] = useState(false)

    const styles = makeStyles({
        whiteShadow:{
            "&:hover":{
                boxShadow: "0px 0px 10px 2px white !important"
            }
        }
    })
    const classes = styles();

    const toggleFlip = () => {
        flipCard(!isCardFlipped)
    }
    return (
        <div className="flip-card">
            <div className={`card-inner ${isCardFlipped ? "flip-transform" : ""}`}>
                <div className="card-back">
                    <div className={`option-box ${props.darkmodeOn? classes.whiteShadow:""}`}>
                        <div className="container">
                            <Typography variant={'h4'} style={{ marginTop: '20px' }}>{props.title}</Typography>
                            <p>{props.description}</p>
                            <Button onClick={toggleFlip} variant={'contained'} color={'primary'} style={{ position: 'relative', bottom: '-30px' }}>Return</Button>
                        </div>
                    </div>
                </div>
                <div className="card-front">
                    <div className={`option-box ${props.darkmodeOn? classes.whiteShadow:""}`}>
                        <a style={{ textDecoration: 'none', color: 'black' }}>
                            <div className="option-box-image" style={{ backgroundImage: `url(${props.imageurl ? props.imageurl : "https://asianmedicstore.com/wp-content/uploads/2019/06/support-manual.gif"})` }}>
                                <Typography style={{ position: 'relative', top: "20px" }} variant={'h4'}>{props.title}</Typography>
                                <Button onClick={toggleFlip} variant={'contained'} color={'primary'} style={{ position: 'relative', bottom: '-90px' }}>More Info</Button>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CardComponent;