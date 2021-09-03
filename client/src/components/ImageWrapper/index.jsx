import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import SimpleImageSlider from "react-simple-image-slider"
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '15px'
    },
    header: {
        color: 'white',
        fontSize: '40px',
        fontWeight: 'bold'
    },
    headerMobile: {
        fontSize: '30px',
    },
}));

const ImageWrapper = (props) => {
    const classes = useStyles()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
    <div className={`${classes.root} ${props.className}`}>
        <Typography className={`${classes.header} ${isTabletOrMobile && classes.headerMobile}`}>Фото с уроков</Typography>
        <SimpleImageSlider  width={isTabletOrMobile ? 300 : 900} height={isTabletOrMobile ? 200 : 400} images={props.imgItems} showBullets={true} showNavs={true}/>
    </div>
  );
}

export default ImageWrapper