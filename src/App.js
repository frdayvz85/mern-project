import './App.css';
import useStyles from './styles'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';

function App() {
  const classes = useStyles()


  return (
    <Router>
      <div className={classes.app}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
