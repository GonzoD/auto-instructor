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
        paddingTop: '20px'
    },
    header: {
        fontSize: '40px',
        fontWeight: 'bold',
        color: 'white'
    },
    cardRow: {
        display: 'flex',
        justifyContent: 'center'
    },
    cardColumn: {
        flexDirection: 'column'
    },
    box: {
        margin: '15px 15px'
    },
}));

const CardRow = [{youtubeURL: 'https://www.youtube.com/embed/GhCXAiNz9Jo'}, 
{youtubeURL: 'https://www.youtube.com/embed/Vil17UAogoU'}, 
{youtubeURL: 'https://www.youtube.com/embed/vc6vs-l5dkc'}]

const VideoFromLessons = (props) => {
    const classes = useStyles()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return <div id='advantages' className={`${classes.root} ${props.className}`}>
        <Typography className={classes.header}>Видео с уроков</Typography>
        <div className={`${classes.cardRow} ${isTabletOrMobile && classes.cardColumn}`}>{CardRow.map((item, index) => (<VideoCard key={index} className={classes.box} youtubeURL={item.youtubeURL}/>))}</div>   
    </div>
}

export default VideoFromLessons