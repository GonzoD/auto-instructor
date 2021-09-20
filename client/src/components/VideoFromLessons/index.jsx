import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'
import VideoCard from '../VideoCard';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20px',
    },
    header: {
        fontSize: '40px',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    headerMobile: {
        fontSize: '30px',
    },
    cardRow: {
        display: 'flex',
        justifyContent: 'center'
    },
    cardColumn: {
        flexDirection: 'column'
    },
    box: {
        margin: '15px 80px'
    },
}));

const CardRow = [{youtubeURL: 'https://www.youtube.com/embed/QtzIXrrHgLU'}, {youtubeURL: 'https://www.youtube.com/embed/FezJM9xinPA'}]

const VideoFromLessons = (props) => {
    const classes = useStyles()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return <div id='advantages' className={`${classes.root} ${props.className} ${isTabletOrMobile && classes.rootMobile}`}>
        <Typography className={`${classes.header} ${isTabletOrMobile && classes.headerMobile}`}>Видео с уроков</Typography>
        <div className={`${classes.cardRow} ${isTabletOrMobile && classes.cardColumn}`}>{CardRow.map((item, index) => (<VideoCard key={index} className={classes.box} youtubeURL={item.youtubeURL}/>))}</div>   
    </div>
}

export default VideoFromLessons