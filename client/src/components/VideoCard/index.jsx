import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '300px'
    },
    img: {
        height: '350px'
    }
}));

const VideoCard = (props) => {
    const classes = useStyles()

    return <div className={`${classes.root} ${props.className}`}>
        <iframe title='youtube' width='300' height='250' src={props.youtubeURL}></iframe>
    </div>
}

export default VideoCard