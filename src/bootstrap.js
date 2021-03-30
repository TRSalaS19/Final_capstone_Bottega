import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(compose((window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)(createStore)));

import "./style/main.scss";

import history from './history';

import Layout from './components/layout';
import SignIn from './auth/signIn';
import SignUp from './auth/signUp';
import Account from './components/account';
import Services from './components/services';
import ContactMe from './components/contactMe';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
            <Switch>
              <Route path='/' exact component={SignIn} />
              <Route path='/signin' exact component={SignIn} />
              <Route path='/signup' exact component={SignUp} />
              <Route path='/account' exact component={Account} />
              <Route path='/contact-me' exact component={ContactMe} />
              <Route path='/services' exact component={Services} />
            </Switch>

        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
