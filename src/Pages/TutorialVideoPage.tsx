import React from 'react';
import VideoPlayer from '../Components/VideoPlayer';

interface propsTypes{
    darkmodeOn: boolean
}

const TutorialVideoPage = (props:propsTypes) =>{

    return(
        <div>
            <VideoPlayer darkmodeOn={props.darkmodeOn}></VideoPlayer>
        </div>
    )
}

export default TutorialVideoPage;