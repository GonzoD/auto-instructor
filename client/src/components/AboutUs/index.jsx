import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(() => ({
    root: {
        padding: '3% 0',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
    },
    rootBigScreen: {
        paddingLeft: '35%',
    },
    rootMobile: {
        paddingLeft: '1%',
    },
    car: {
        overflow: 'hidden',
        width: '941px',
    },
    "@keyframes moveTrees": {
        "100%": {
            willChange: 'transform',
            transform: 'translateX(-15%)',
        }
    },
    "@keyframes moveWindow": {
        "0%": {
            transform: 'translateY(-3px)'
        },
        "20%": {
            transform: 'translateY(3px)'
        },
        "40%": {
            transform: 'translateY(-3px)'
        },
        "60%": {
            transform: 'translateY(3px)'
        },
        "80%": {
            transform: 'translateY(-3px)'
        },
        "100%": {
            transform: 'translateY(-3px)'
        }
    },
    background: {
        display: 'block',
        backgroundImage: 'url(trees.jpg)',
        willChange: 'transform',
        animation: '$moveTrees 5s linear infinite',
        backgroundRepeat: 'repeat-x',
        zIndex: 1,
    },
    backgroundBigScreen: {
        width: '2800%',
        backgroundSize: 'contain'
    },
    backgroundMobile: {
        width: '2000%',
        height: '343px',
        backgroundSize: 'contain'
    },
    blur: {
        backdropFilter: 'blur(3px)',
        width: '400%',
        height: '600px',
    },
    window: {
        position: 'absolute',
        background: 'url(window.png)',
        animation: '$moveWindow 3s linear infinite',
    },
    windowBigScreen: {
        top: '25px',
        width: '941px',
        height: '643px',
    },
    windowMobile: {
        top: '5px',
        width: '400px',
        height: '360px',
        backgroundSize: 'cover'
    },
    studying: {
        position: 'absolute',
        textShadow: '0 0 5px #30D171, 0 0 10px #30D171,0 0 20px #30D171,0 0 40px #0ff,0 0 80px #30D171,0 0 90px #0ff',
        fontFamily: 'system-ui',
    },
    studyingBigScreen: {
        fontSize: '43px',
        top: '25%',
        left: '7%',
        fontWeight: 900
    },
    studyingMobile: {
        fontSize: '29px',
        top: '65%',
        left: '7%',
        fontWeight: 900
    },
    driving: {
        position: 'absolute',
        textShadow: '0 0 5px #30D171, 0 0 10px #30D171,0 0 20px #30D171,0 0 40px #0ff,0 0 80px #30D171,0 0 90px #0ff',
        fontFamily: 'system-ui',
    },
    drivingBigScreen: {
        fontSize: '30px',
        top: '34%',
        left: '5%',
        fontWeight: 900
    },
    drivingMobile: {
        fontSize: '20px',
        top: '75%',
        left: '5%',
        fontWeight: 900
    },
    fromPro: {
        position: 'absolute',
        textShadow: '0 0 5px #30D171, 0 0 10px #30D171,0 0 20px #30D171,0 0 40px #0ff,0 0 80px #30D171,0 0 90px #0ff',
        fontFamily: 'system-ui',
    },
    fromProBigScreen: {
        fontSize: '45px',
        top: '40%',
        left: '3%',
        fontWeight: 900
    },
    fromProMobile: {
        fontSize: '30px',
        top: '80%',
        left: '3%',
        fontWeight: 900
    },
}));

const AboutUs = (props) => {
    const classes = useStyles()
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'})

    return <div id='about' className={`${classes.root} ${props.className} ${isTabletOrMobile ? classes.rootMobile : classes.rootBigScreen}`}>
        <div className={`${classes.car}`}>
        <div className={`${classes.background} ${isTabletOrMobile ? classes.backgroundMobile : classes.backgroundBigScreen}`}>
            <div className={classes.blur}></div>
        </div>
        <div className={`${classes.window} ${isTabletOrMobile ? classes.windowMobile : classes.windowBigScreen}`}></div>
        </div>
        <Typography className={`${classes.studying} ${isTabletOrMobile ? classes.studyingMobile : classes.studyingBigScreen}`}>Обучение</Typography>
        <Typography className={`${classes.driving} ${isTabletOrMobile ? classes.drivingMobile : classes.drivingBigScreen}`}>Вождению</Typography>
        <Typography className={`${classes.fromPro} ${isTabletOrMobile ? classes.fromProMobile : classes.fromProBigScreen}`}>от ПРОфессионала</Typography>
    </div>
}

export default AboutUs