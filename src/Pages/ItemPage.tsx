import { Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import FilesContainer from '../Components/FilesContainer';
import ImageDisplay from '../Components/ImageDisplay';
import InfoContainer from '../Components/InfoContainer';
import WideInfoContainer from '../Components/WideInfoContainer';
import FilesList from '../Components/FilesList';
import MobileItemPage from './MobileItemPage';


interface propTypes{
    darkmodeOn: boolean
}
const ItemPage = (props: propTypes) => {

    const [isMobile, setIsMobile] = useState(false); //hook to see if window is mobile or not
    //detect mobile at 575px

    const updateWindowSize = () => {
        //updates hook based on window size
        if (window.innerWidth <= 775) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', updateWindowSize) //calls function each time window is resized
    })

    
    const sampleFileNames = ['file1', 'file2', 'file3'];

    if(isMobile){
        return(
            <MobileItemPage darkmodeOn={props.darkmodeOn}></MobileItemPage>
        )
    }else{

    
    return (
        <div>
            <Container style={{ marginTop: '40px' }}>
                <Grid container direction={'row'} spacing={5} justifyContent={'center'}>
                    <Grid item xs={4}>
                        <InfoContainer darkmodeOn={props.darkmodeOn} title={"Images"}>
                            <div>
                                <ImageDisplay darkmodeOn={props.darkmodeOn}></ImageDisplay>
                            </div>
                        </InfoContainer>
                    </Grid>
                    <Grid item direction={'column'} xs={8}>
                        <Grid item xs={12}>
                            <WideInfoContainer darkmodeOn={props.darkmodeOn}></WideInfoContainer>
                        </Grid>
                        <Grid item container style={{marginTop:'30px'}} direction={'row'} spacing={4}>
                            <Grid item xs={6}>
                                <FilesContainer title={"Files"}>
                                    <div>
                                        <FilesList fileList={sampleFileNames}></FilesList>
                                    </div>
                                </FilesContainer>
                            </Grid>
                            <Grid item xs={6}>
                                <FilesContainer title={'Description'}>
                                    <p>Sample Description Here</p>
                                </FilesContainer>
                            </Grid>
                            
                        </Grid>
                    </Grid>

                </Grid>

            </Container>
        </div>
    )
    }
}

export default ItemPage;