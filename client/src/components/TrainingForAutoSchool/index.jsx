import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(() => ({
    root: {
        textAlign: 'center'
    },
    training: {
        fontWeight: 'bold',
        lineHeight: 1,
        position: 'relative',
        display: 'inline-block',
        textAlign: 'center',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent', 
    '&::before': {
        position: 'absolute',
        content: '""',
        zIndex: '-2',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundImage: 'inherit',
        backgroundSize: 'cover',
    },
    '&::after': {
        position: 'absolute',
        content: '""',
        zIndex: '-1',
        opacity: '0.7',
        backgroundColor: '#000',
    },
    background: 'url(training2.jpg)',
    backgroundSize: 'cover',
    },
    trainingBigScreen: {
        height: '700px',
        fontSize: '90px',
        padding: '3% 15% 0 15%',
        '&::after': {
            position: 'absolute',
            content: '""',
            zIndex: '-1',
            top: '5%',
            right: '200px',
            left: '200px',
            bottom: '50%',
        },
    },
    trainingMobile: {
        height: '350px',
        width: '300px',
        fontSize: '35px',
        padding: '5% 15% 5% 15%',
        '&::after': {
            position: 'absolute',
            content: '""',
            zIndex: '-1',
            top: '5%',
            right: '20px',
            left: '20px',
            bottom: '25%',
        },
    },
}));


const TrainingForAutoSchool = (props) => {
    const classes = useStyles()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return <div className={classes.root}>
        <div className={`${classes.training} ${isTabletOrMobile ? classes.trainingMobile : classes.trainingBigScreen}`}>Подготовка к экзаменам в сервисном центре</div>
    </div>
}

export default TrainingForAutoSchool