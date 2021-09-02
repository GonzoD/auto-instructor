import React from 'react';
import {NavLink} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, Typography } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  icon: {backgroundColor: '#30D171'},
  iconMobie: {height: '20px', width: '20px'},
  fab: {
    background: '#30D171',
    '&:hover': {
      backgroundColor: '#30D171'
    }
},
  fabMobile: {width: '33px', height: '31px'},
  appBar: {
    color: 'black',
    backgroundColor: '#1C2128',
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    '&.MuiToolbar-regular': {
      minHeight: '35px'
    }
  },
  menu: {
    color: 'white',
    fontWeight: 600,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textDecoration: 'none',
    margin: '0 2%'
  },
  menuBigScreen: {fontSize: '17px'},
  menuMobile: {fontSize: '8px'},
  navigation: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '600px',
  },
  textPRO: {
    color: 'white',
    textShadow: '1px 1px 1px #919191, 1px 2px 1px #919191',
  },
  textPROBigScreen: {    
    fontWeight: 900,
    fontSize: '22px',},
  textPROMobile: {
    fontWeight: 700,
    fontSize: '12px',
  },
  spanPRO: {
    color: '#30D171',
    textShadow: '1px 1px 1px #216E40, 1px 2px 1px #216E40, 1px 3px 1px #216E40',
  },
  textInstructor: {
    color: 'white',
    fontWeight: 600,
    fontSize: '18px',
    textAlign: 'center',
    textShadow: '1px 1px 1px #919191, 1px 2px 1px #919191',
  },
  textInstructorBigScreen: {    
    fontWeight: 600,
    fontSize: '18px',},
    textInstructorMobile: {
    fontWeight: 400,
    fontSize: '9px',
  },
}));

const PagesLinks = [{link:"/", pageName:"Главная", key:"0"}, {link:"comments", pageName:"Комментарии", key:"1"}]

const MainAppBar = () => {
  const classes = useStyles()
  const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'})
  return (
<React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div>
          <Typography className={`${classes.textPRO} ${isTabletOrMobile ? classes.textPROMobile : classes.textPROBigScreen}`}><span className={classes.spanPRO}>ПРО</span>фессиональный</Typography>
          <Typography className={`${classes.textInstructor} ${isTabletOrMobile ? classes.textInstructorMobile : classes.textInstructorBigScreen}`}>автоинструктор</Typography>
          </div>
          <div className={classes.navigation}>
          {PagesLinks.map((link)=>{
            return <Button key={link.key} className={`${classes.menu} ${isTabletOrMobile?classes.menuMobile:classes.menuBigScreen}`}><NavLink className={`${classes.menu} ${isTabletOrMobile?classes.menuMobile:classes.menuBigScreen}`} to={link.link}>{link.pageName}</NavLink></Button>
          })}
          </div>
        </Toolbar>
      </AppBar>    
    </React.Fragment>
  );
}

export default MainAppBar