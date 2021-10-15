
import React from 'react';
import Navbar from './components/layout/Navbar'
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Alert from './components/Alert';
import User from './components/layout/User';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GithubState from './components/context/github/githubState';
import AlertState from './components/context/alert/alertState';
import NotFound from './components/pages/NotFound';
const App = () => {



  return (<GithubState>
    <AlertState>
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar title="Github Finder" icon="fab fa-github" />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>

            </div>


          </header>
        </div>
      </Router>
    </AlertState>
  </GithubState>
  );
}



export default App;
