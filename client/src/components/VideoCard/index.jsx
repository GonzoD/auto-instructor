import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '300px',
    },
}));

const VideoCard = (props) => {
    const classes = useStyles()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return <div className={`${classes.root} ${props.className}`}>
        <iframe title='youtube' width={`${isTabletOrMobile ? 270 : 350}`} height={`${isTabletOrMobile ? 250 : 300}`} src={props.youtubeURL}></iframe>
    </div>
}

export default VideoCard