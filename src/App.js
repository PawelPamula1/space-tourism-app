import { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route } from 'react-router';
import Home from './pages/Home/Home';
import Destination from './pages/Destination/Destination';
import Crew from './pages/Crew/Crew';
import Technology from './pages/Technology/Technology';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/destination" exact component={Destination} />
        <Route path="/crew" exact component={Crew} />
        <Route path="/technology" exact component={Technology} />
      </Switch>
    </Fragment>
  );
}

export default App;
