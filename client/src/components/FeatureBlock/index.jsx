import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        minWidth: '100px',
        marginLeft: '15px',
    },
    text: {
        marginLeft: '7px',
    },
    header: {
        color: 'white'
    },
    headerBigScreen:{fontSize: '18px'},
    headerMobile:{fontSize:'9px'},
    info: {
        fontSize: '14px',
        color: '#30D171',
        fontWeight: 600,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
    },
    infoBigScreen:{fontSize: '15px'},
    infoMobile:{fontSize:'8px'},
}));


const feature = {
    pro: {
    icon: (isTabletOrMobile) => (<HowToRegIcon fontSize={`${isTabletOrMobile ?'medium':'large'}`}/>),
    header: 'Проффесионализм',
    info: 'Подготовка к сложным дорожным ситуациям: выбежал ребенок, упало дерево, резкий маневр'},
    car: {
    icon: (isTabletOrMobile) => (<DriveEtaIcon fontSize={`${isTabletOrMobile ?'medium':'large'}`}/>),
    header: 'Большой опыт обучения',
    info: 'Обучением будущих водителей более 10 лет'},
    mood: {
    icon: (isTabletOrMobile) => (<SentimentSatisfiedAltIcon fontSize={`${isTabletOrMobile ?'medium':'large'}`}/>),
    header: 'Приятная атмосфера',
    info: 'Обучение происходит в спокойной атмосфере, без стресса и страха для ученика'}
}

const FeatureBlock = (props) => {
    const classes = useStyles()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return <div className={classes.root}>
        <div>{feature[props.icon].icon(isTabletOrMobile)}</div>
        <div className={classes.text}>
        <Typography className={`${classes.header} ${isTabletOrMobile?classes.headerMobile:classes.headerBigScreen}`}>{feature[props.icon].header}</Typography>
        <Typography className={`${classes.info} ${isTabletOrMobile?classes.infoMobile:classes.infoBigScreen}`}>{feature[props.icon].info}</Typography>
        </div> 
    </div>
}

export default FeatureBlock