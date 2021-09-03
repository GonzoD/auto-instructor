import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import ColorButton from '../ColorButton';
import useCopyToClipboard from '../../utils/useCopyToClipboard'
import { number } from '../../utils/constants'
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3% 0',
        background: '#010A42',
        color: 'white',
        marginTop: '12px'
    },
    header: {
        marginBottom: '5%',
        fontSize: '35px',
        fontWeight: 'bold'   
    },
    headerMobile: {
        fontSize: '25px'
    },
    contacts: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
    },
    contactsMobile: {
       flexDirection: 'column', 
    },
    contactBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        background: '#30D171',
        fontWeight: 'bold'
    },
    buttonBigScreen:{fontSize: '20px', height: '50px',},
    buttonMobile:{fontSize: '10px', height: '20px',
    display: 'flex'},
    mailButton: {
        color: '#30D171',
        textTransform: 'none',
        fontWeight: 'bold'
    },
    mailButtonBigScreen:{fontSize: '20px', height: '50px',},
    mailButtonMobile:{fontSize: '12px', height: '20px',},
    textBigScreen:{fontSize: '20px', fontWeight: 700},
    textMobile:{fontSize: '13px', fontWeight: 700},
}));

const Contacts = () => {
    const classes = useStyles()
    const [handleCopy] = useCopyToClipboard();
    const mail = 'vitaliy.auto.instructor@gmail.com'
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return <div id='contacts' className={classes.root}>
        <Typography className={`${classes.header} ${isTabletOrMobile && classes.headerMobile}`}>Контакты автоинструктора</Typography>
        <div className={`${classes.contacts} ${isTabletOrMobile && classes.contactsMobile}`}>
        <div className={classes.contactBox}>
            <Typography className={`${isTabletOrMobile ? classes.textMobile : classes.textBigScreen}`}>Мой номер</Typography>
            <ColorButton text={number} style={`${classes.button} ${isTabletOrMobile ? classes.buttonMobile : classes.buttonBigScreen}`} onClick={() => handleCopy(number)}/>
        </div>
        <div className={classes.contactBox}>
            <Typography className={`${isTabletOrMobile ? classes.textMobile : classes.textBigScreen}`}>Моя почта</Typography>
            <Button className={`${classes.mailButton} ${isTabletOrMobile ? classes.mailButtonMobile : classes.mailButtonBigScreen}`} onClick={() => handleCopy(mail)}>{mail}</Button>
        </div>
        </div>
    </div>
}

export default Contacts