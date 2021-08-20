import { Grid } from '@material-ui/core';
import React from 'react';
import { Container } from 'react-bootstrap';
import FilesContainer from '../Components/FilesContainer';
import FilesList from '../Components/FilesList';
import ImageDisplay from '../Components/ImageDisplay';
import InfoContainer from '../Components/InfoContainer';
import WideInfoContainer from '../Components/WideInfoContainer';

interface propTypes {
    darkmodeOn: boolean
}

const MobileItemPage = (props: propTypes) => {
    const sampleFileNames = ['file1', 'file2', 'file3']
    return (
        <div>
            <Container style={{ marginTop: '40px' }}>

                <Grid container direction={'column'} spacing={5} justifyContent={'center'}>
                    <Grid item>

                            <InfoContainer darkmodeOn={props.darkmodeOn} title={"Images"}>
                                <ImageDisplay darkmodeOn={props.darkmodeOn}></ImageDisplay>
                        </InfoContainer>

                        
                    </Grid>
                    <Grid item>
                        <WideInfoContainer darkmodeOn={props.darkmodeOn}></WideInfoContainer>
                    </Grid>
                    <Grid item container style={{ marginTop: '30px' }} direction={'column'} spacing={4}>
                        <Grid item>
                            <FilesContainer title={"Files"}>
                                <div>
                                    <FilesList fileList={sampleFileNames}></FilesList>
                                </div>
                            </FilesContainer>
                        </Grid>
                        <Grid item>
                            <FilesContainer title={'Description'}>
                                <p>Sample Description Here</p>
                            </FilesContainer>
                        </Grid>


                    </Grid>

                </Grid>

            </Container>
        </div>
    )
}

export default MobileItemPage;