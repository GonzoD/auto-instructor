import React from 'react';
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
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

const handleClick = (event) => {
  const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const MainAppBar = (props) => {
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
      <ScrollTop {...props}>
        <Fab className={`${classes.fab} ${isTabletOrMobile && classes.fabMobile}`} color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon className={`${classes.icon} ${isTabletOrMobile && classes.iconMobie}`}/>
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

export default MainAppBar