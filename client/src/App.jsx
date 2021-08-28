import UseRoutes from './UseRoutes';
import {BrowserRouter as Router} from 'react-router-dom'
import MainAppBar from './components/MainAppBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    overflowX: 'hidden'
  }
}))

function App() {
  const routes = UseRoutes()
  const classes = useStyles()
  return (
    <Router>
    <div className={classes.root}>
      <MainAppBar />
      {routes}
    </div>
    </Router>
  );
}

export default App;
