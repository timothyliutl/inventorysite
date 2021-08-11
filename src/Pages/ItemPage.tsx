import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Container } from 'react-bootstrap';
import FilesContainer from '../Components/FilesContainer';
import ImageDisplay from '../Components/ImageDisplay';
import InfoContainer from '../Components/InfoContainer';
import WideInfoContainer from '../Components/WideInfoContainer';
import FilesList from '../Components/FilesList';

const ItemPage = (props: any) => {
    const sampleFileNames = ['file1', 'file2', 'file3']
    return (
        <div>
            <Container style={{ marginTop: '40px' }}>
                <Grid container direction={'row'} spacing={5} justifyContent={'center'}>
                    <Grid item xs={3}>
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

export default ItemPage;