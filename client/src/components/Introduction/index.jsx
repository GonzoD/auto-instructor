import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ColorButton from '../ColorButton'
import useCopyToClipboard from '../../utils/useCopyToClipboard'
import { number } from '../../utils/constants'
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        background: 'url(road.jpg)',
        backgroundSize: '100%',
        justifyContent: 'center',
        padding: '3% 5%',
        position: 'relative',
    },
    bodyIntro: {
        display: 'flex',
        justifyContent: 'center'
    },
    rootBigScreen: {
        height: '910px',
    },
    rootMobile: {
        maxHeight: '310px',
        minHeight: '305px',
        width: '300px',
        backgroundRepeat: 'no-repeat'
    },
    "@keyframes moveCamryBigScreen": {
        "0%": {
            opacity: 1
        },
        "100%": {
            opacity: 1,
            transform: 'translateY(.5%) scale(8)',
        }
    },
    "@keyframes moveCamryMobile": {
        "0%": {
            transform: 'scale(.1)',
            opacity: 1
        },
        "100%": {
            opacity: 1,
            transform: 'translateY(30%) scale(1)',
        }
    },
    "@keyframes appearHead": {
        '50%': {
            transform: 'translateY(-50px)',
            opacity: 0,
            webkitClipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 80%)',
            clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 80%)',
        },
        '80%': {
            transform: 'translateY(0)',
            opacity: 1,
            webkitClipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 15%)',
            clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 15%)',
        },
        '90%': {
             transform: 'translateY(0)',
             opacity: 1,
            webkitClipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 10%)',
            clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 10%)',
        },
        '100%': {
            transform: 'translateY(0)',
            opacity: 1,
           webkitClipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 0%)',
           clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 0%)',
    },
},
    camry: {
        background: 'url(camry.png)',
        position: 'absolute',
    },
    camryBigScreen: {
        opacity: 0,
        width: '70px',
        height: '50px',
        bottom: '130px',
        right: '47.5%',
        backgroundSize: 'contain',
        animationDelay: '200ms',
        animation: '$moveCamryBigScreen 2s linear',
        animationFillMode: 'forwards',
    },
    camryMobile: {
        opacity: 0,
        imageRendering: 'high-quality',
        width: '220px',
        height: '150px',
        bottom: '60px',
        right: '17%',
        backgroundSize: 'contain',
        animationDelay: '200ms',
        animation: '$moveCamryMobile 2s linear',
        animationFillMode: 'forwards',
    },
    introText: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '2%',
        width: '80%'
    },
    greeting: {
        opacity: 0,
        animationDelay: '1.5s',
        animation: '$appearHead 1s linear',
        animationFillMode: 'forwards',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 800,
        color: 'white',
        margin: '2% 0'
    },
    greetingBigScreen:{fontSize: '55px',
    textShadow: '1px -1px 0 #767676, -1px 2px 1px #737272, -2px 4px 1px #767474, -3px 6px 1px #787777, -4px 8px 1px #7b7a7a, -5px 10px 1px #7f7d7d, -6px 12px 1px #828181, -7px 14px 1px #868585, -8px 16px 1px #8b8a89, -9px 18px 1px #8f8e8d, -10px 20px 1px #949392, -11px 22px 1px #999897',
    },
    greetingMobile:{
        fontSize: '15px',
        textShadow: '1px -1px 0 #767676, -1px 2px 1px #737272, -2px 4px 1px #767474, -3px 6px 1px #787777',
    },
    intro: {
        color: 'white',
        marginTop: '5px',
        fontSize: '20px',
        backgroundColor: '#3d4961',
    },
    photoBox: {
        paddingTop: '2%'
    },
    selfImg: {
        objectFit: 'cover',
        opacity: 0,
        animationDelay: '1.5s',
        animation: '$appearHead 1s linear',
        animationFillMode: 'forwards',
    },
    selfImgBigScreen: {
        width: '500px'
    },
    selfImgMobile: {
        width: '100px'
    },
    button: {
        color: 'black',
        background: '#30D171',
        opacity: 0,
        animationDelay: '1.5s',
        animation: '$appearHead 1s linear',
        animationFillMode: 'forwards',
        fontWeight: 'bold',
    },
    buttonBigScreen:{fontSize: '25px', height: '60px', width: '200px'},
    buttonMobile:{fontSize: '10px', height: '20px', width: '70px'},
}));

const Introduction = (props) => {
    const classes = useStyles()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [handleCopy] = useCopyToClipboard();

    return <div className={classes.bodyIntro}> 
    <div id='intro' className={`${classes.root} ${props.className} ${isTabletOrMobile ? classes.rootMobile : classes.rootBigScreen}`}>
        <div className={`${classes.camry} ${isTabletOrMobile ? classes.camryMobile : classes.camryBigScreen}`}></div>
        <div className={classes.introText}>
            <Typography className={`${classes.greeting} ${isTabletOrMobile? classes.greetingMobile: classes.greetingBigScreen}`}>Меня зовут Виталий</Typography>
            <Typography className={`${classes.greeting} ${isTabletOrMobile? classes.greetingMobile: classes.greetingBigScreen}`}>Я научу вас управлять авто на профессиональном уровне</Typography>
            <ColorButton text={number} style={`${classes.button} ${isTabletOrMobile? classes.buttonMobile: classes.buttonBigScreen}`} onClick={() => handleCopy(number)}/>
        </div>
        <div className={classes.photoBox}>
        <img src="selfPhotoPNG.png" className={`${classes.selfImg} ${isTabletOrMobile ? classes.selfImgMobile: classes.selfImgBigScreen}`}></img>
        </div>
    </div>
    </div>
}

export default Introduction