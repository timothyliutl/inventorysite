import { Grid } from '@material-ui/core';
import React from 'react';
import CardComponent from '../Components/CardComponent';

const CategorySearch = (props: any) => {
    return (
        <div>
            <Grid spacing={3} container justifyContent={'center'}>
                <Grid item>
                    <CardComponent title={'Tutorials'} description={'Various Tutorial Videos'} imageurl={'https://avatars.githubusercontent.com/u/1965106?s=200&v=4'}></CardComponent>
                </Grid>
                <Grid item>
                    <CardComponent title={'Tutorials'} description={'Various Tutorial Videos'} imageurl={'https://avatars.githubusercontent.com/u/1965106?s=200&v=4'}></CardComponent>
                </Grid>
            </Grid>

        </div>
    )
}
export default CategorySearch;