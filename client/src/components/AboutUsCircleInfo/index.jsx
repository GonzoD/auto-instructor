import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    circle: {    
        display: 'flex',
        alignItems: 'center',  
        border: '2px solid white',
        borderRadius: '30px',
        color: '#30D171',
        fontWeight: 600,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
    },
    circleBigScreen: {
        width: '50px',
        height: '50px',},
    circleMobile: {
        width: '35px',
        height: '35px',},
    amount: {
        textAlign: 'center'
    },
    amountBigScreen: {fontSize: '15px',},
    amountMobile: {fontSize: '10px'},
    info: {
        textAlign: 'center',
        width: '130px',
        color: 'white'
    },
    infoBigScreen: {fontSize: '15px'},
    infoMobile: {
        fontSize: '10px',
        width: '80%'},
}));

const AboutUsCircleInfo = (props) => {
    const classes = useStyles()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return <div className={classes.root}>
        <div className={`${classes.circle} ${isTabletOrMobile ? classes.circleMobile : classes.circleBigScreen}`}>
            <Typography className={`${classes.amount} ${isTabletOrMobile?classes.amountMobile:classes.amountBigScreen}`}>{props.amount}</Typography></div>
        <Typography className={`${classes.info} ${isTabletOrMobile ? classes.infoMobile : classes.infoBigScreen}`}>{props.info}</Typography>
    </div>
}

export default AboutUsCircleInfo