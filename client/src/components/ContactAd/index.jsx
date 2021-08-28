import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ColorButton from '../ColorButton';
import useCopyToClipboard from '../../utils/useCopyToClipboard'
import { number } from '../../utils/constants'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#1b2957',
        padding: '20px 0'
    },
    header: {
        fontSize: '20px',
        color: 'white'
    },
    title: {
        fontSize: '17px',
        marginTop: '5px',
        marginBottom : '25px',
        color: 'white'
    },
    button: {
        background: '#FF7618'
    }
}));

const ContactAd = () => {
    const classes = useStyles()
    const [handleCopy] = useCopyToClipboard();

    return <div className={classes.root}>
        <Typography className={classes.header}>Хочешь научиться водить?</Typography>
        <Typography className={classes.title}>Кликай по номеру и звони Виталию</Typography>
        <ColorButton text={number} onClick={() => handleCopy(number)} style={classes.button}/>
    </div>
}

export default ContactAd