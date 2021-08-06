import { Button, Typography } from '@material-ui/core';
import React from 'react';
import "../Styles/searchStyles.css"

const CardComponent = (props: any) => {


    return (
        <div className="flip-card">
            <div className="card-inner">

                <div className="card-back">
                    <div className="option-box">
                        <div className="container">
                            <Typography style={{marginTop: '20px'}}>Tutorials</Typography>
                            <p>Tutorial Videos for Various Labs</p>
                            <button className="btn return-btn">Go Back</button>
                        </div>
                    </div>
                </div>
                <div className="card-front">
                    <div className="option-box">
                        <a style={{textDecoration: 'none', color: 'black'}}>
                            <div className="option-box-image" style={{backgroundImage: 'url(https://asianmedicstore.com/wp-content/uploads/2019/06/support-manual.gif)'}}>
                                <Typography style={{position:'relative', top:"20px"}} variant={'h4'}>Tutorials</Typography>
                                <Button variant={'contained'} color={'primary'} style={{position:'relative', bottom:'-90px'}}>More Info</Button>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CardComponent;