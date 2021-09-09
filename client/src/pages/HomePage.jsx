import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Introduction from '../components/Introduction';
import Program from '../components/Program';
import AboutUs from '../components/AboutUs';
import VideoFromLessons from '../components/VideoFromLessons';
import Contacts from '../components/Contacts';
import ImageWrapper from '../components/ImageWrapper';

const useStyles = makeStyles(() => ({
  root: {
      '& header.MuiAppBar-root': {
        width: '100%',
        jystifyContent: 'center'
      },
      '& header.MuiAppBar-positionFixed': {
        right: 'auto',
      },
      '& header.MuiPaper-elevation4': {
        boxShadow: 'unset'
      }
  },
  introBack: {
    padding: '2% 10% 0 10%',
    background: '#20262E',
    opacity: 0.85,
  },
  intro: {
    marginBottom: '2%',
  },
  content: {
    margin: '0 10%',
  },
  componentsBackground: {
    background: '#1C2128',
    marginTop: '20px'
  }
}));

const imgItems = [{url: "fromLesson1.jpg"}, {url: "fromLesson2.jpg"}]

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.content}>
      <Introduction className={classes.intro}/>
        <AboutUs className={classes.componentsBackground}/>
        <Program className={classes.componentsBackground}/>
        <ImageWrapper className={classes.componentsBackground} imgItems={imgItems}/>
        {/* <VideoFromLessons className={classes.componentsBackground}/> */}
      </div>
      <Contacts />
    </div>
  );
}
<div></div>

export default App;