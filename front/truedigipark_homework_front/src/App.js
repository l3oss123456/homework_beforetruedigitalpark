import React, {Component} from 'react';
// import Routes from '../route/routes';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login';
import register from './pages/register';
import index from './pages/index';

class App extends Component{
  render () {
    return (
      <div>
         <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={register} />
        <Route exact path="/index" component={index} />
        </Router>
      </div>
    );
  }
}

export default App;
