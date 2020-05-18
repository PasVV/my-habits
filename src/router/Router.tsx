import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import RegistrationPage from '../pages/registration';

// @ts-ignore
const Router = ({ navbar: NavBar }) => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/registration">
        <RegistrationPage />
      </Route>
      <Route path="/logout">
        <div>LogOut</div>
      </Route>
      <Route path="/tasks">
        <div>Tasks</div>
      </Route>
      <Route path="/goals/add">
        <div>Add goals</div>
      </Route>
      <Route path="/goals">
        <div>Goals</div>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
