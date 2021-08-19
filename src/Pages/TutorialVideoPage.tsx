import React from 'react';
import VideoPlayer from '../Components/VideoPlayer';
import {useLocation} from 'react-router-dom';

interface propsTypes{
    darkmodeOn: boolean,
}

const TutorialVideoPage = (props:propsTypes) =>{

    const search = useLocation().search;
    const playlistID = new URLSearchParams(search).get('playlistid')

    return(
        <div>
            <VideoPlayer playlistID={playlistID?playlistID:"sample"} darkmodeOn={props.darkmodeOn}></VideoPlayer>
        </div>
    )
}

export default TutorialVideoPage;