import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Redirect } from 'react-router';
import LoginScreen from '../pages/auth/LoginScreen';
import RegisterScreen from '../pages/auth/RegisterScreen';
import HomeScreen from '../pages/HomeScreen';

export const IGRouter = () => {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/register" component={RegisterScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/" component={HomeScreen} />

            <Redirect to="/login" component={HomeScreen} />
          </Switch>
        </div>
      </Router>
    );
};