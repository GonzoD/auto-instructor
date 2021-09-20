import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from '../ImageCard';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '30px'
    },
    header: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        textAlign: 'center'
    },
    headerBigScreen: {
        fontSize: '40px',
    },
    headerMobile: {
        fontSize: '30px',
    },
    lineRow: {
        display: 'flex',
    },
    lineColumn: {
        flexDirection: 'column'
    },
    box: {
        margin: '20px 20px'
    },
}));

const TopLineRow = [{img: 'program1.jpg', text: 'Обучение с нуля'}, 
{img: 'program2.jpg', text: 'Все возможные виды парковки'}, 
{img: 'program6.jpg', text: 'Круговое движение'}]

const Program = (props) => {
    const classes = useStyles()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return <div id='program' className={`${classes.root} ${props.className}`}>
        <Typography className={`${classes.header} ${isTabletOrMobile ? classes.headerMobile : classes.headerBigScreen}`}>Программа обучения</Typography>
        <div className={`${classes.lineRow} ${isTabletOrMobile && classes.lineColumn}`}>{TopLineRow.map((item, index) => (<ImageCard key={`${index}T`} className={classes.box} img={item.img} textImg={item.text}/>))}</div>
    </div>
}

export default Program