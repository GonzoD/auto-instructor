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
        justifyContent: 'space-between',
        padding: '3% 5%',
        position: 'relative',
    },
    rootBigScreen: {
        height: '910px',
    },
    rootMobile: {
        height: '395px',
    },
    "@keyframes moveCamry": {
        "100%": {
            transform: 'translateY(1%) scale(8)',
        }
    },
    "@keyframes appearHead": {
        '0%': {
            opacity: 0,
        },
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
           webkitClipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 5%)',
           clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 5%)',
    },
},
    camry: {
        background: 'url(camry.png)',
        position: 'absolute',
        animation: '$moveCamry 2s linear',
        animationFillMode: 'forwards'
    },
    camryBigScreen: {
        width: '70px',
        height: '50px',
        bottom: '120px',
        right: '48%',
        backgroundSize: 'contain',
    },
    camryMobile: {
        width: '50px',
        height: '35px',
        bottom: '100px',
        right: '44%',
        backgroundSize: 'contain',
    },
    introText: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '10%',
        width: '80%'
    },
    greeting: {
        animation: '$appearHead 2s linear',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 800,
        textShadow: '1px -1px 0 #767676, -1px 2px 1px #737272, -2px 4px 1px #767474, -3px 6px 1px #787777, -4px 8px 1px #7b7a7a, -5px 10px 1px #7f7d7d, -6px 12px 1px #828181, -7px 14px 1px #868585, -8px 16px 1px #8b8a89, -9px 18px 1px #8f8e8d, -10px 20px 1px #949392, -11px 22px 1px #999897',
        color: 'white'
    },
    greetingBigScreen:{fontSize: '60px',},
    greetingMobile:{
        fontSize: '19px',
        textShadow: '1px -1px 0 #767676, -1px 2px 1px #737272, -2px 4px 1px #767474, -3px 6px 1px #787777, -4px 8px 1px #7b7a7a',
    },
    intro: {
        color: 'white',
        marginTop: '5px',
        fontSize: '20px',
        backgroundColor: '#3d4961',
    },
    introBigScreen:{fontSize: '20px',},
    introMobile:{fontSize: '11px'},
    button: {
        marginTop: '15%',
        color: 'white',
        background: '#1C2128',
        animation: '$appearHead 2s linear',
        fontWeight: 'bold'
    },
    buttonBigScreen:{fontSize: '20px', height: '50px',},
    buttonMobile:{fontSize: '10px', height: '20px',},
}));

const Introduction = (props) => {
    const classes = useStyles()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [handleCopy] = useCopyToClipboard();

    return <div id='intro' className={`${classes.root} ${props.className} ${isTabletOrMobile ? classes.rootMobile : classes.rootBigScreen}`}>
        <div className={`${classes.camry} ${isTabletOrMobile ? classes.camryMobile : classes.camryBigScreen}`}>
        </div>
        <div className={classes.introText}>
            <Typography className={`${classes.greeting} ${isTabletOrMobile? classes.greetingMobile: classes.greetingBigScreen}`}>Меня зовут Виталий</Typography>
            <Typography className={`${classes.greeting} ${isTabletOrMobile? classes.greetingMobile: classes.greetingBigScreen}`}>Я научу вас водить автомобиль</Typography>
        </div>
        <ColorButton text={number} style={`${classes.button} ${isTabletOrMobile? classes.buttonMobile: classes.buttonBigScreen}`} onClick={() => handleCopy(number)}/>
    </div>
}

export default Introduction