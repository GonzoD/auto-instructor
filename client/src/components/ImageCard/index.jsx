import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '300px'
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 600,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
    },
    imgMobile: {
        height: '250px',
    },
    imgBigScreen: {
        height: '300px',
        width: '300px'
    }
}));

const ImageCard = (props) => {
    const classes = useStyles()
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'})

    return <div className={`${classes.root} ${props.className}`}>
        <img className={`${isTabletOrMobile ? classes.imgMobile: classes.imgBigScreen}`} src={props.img} alt="imh"/>
        <Typography className={classes.text}>{props.textImg}</Typography>
    </div>
}

export default ImageCard