import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/utility/Navbar';
import Homepage from './components/Homepage';
import ListsIndex from './components/lists/ListsIndex';
import ListsNew from './components/lists/ListsNew';
import ListsShow from './components/lists/ListsShow';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <header>
            <Navbar />
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/lists/new" component={ListsNew} />
              {/* <Route path="/my-first-list" component={} /> */}
              <Route path="/lists/:id" component={ListsShow} />
              <Route path="/lists" component={ListsIndex} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
