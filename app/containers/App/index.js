/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import Headers from "components/Header";
import HomePage from "containers/HomePage";
import Footer from "components/Footer";
import SignInModal from "containers/SignInModal";



import GlobalStyle from '../../global-styles';

export default function App() {

  return (
    <>
      <Helmet
        titleTemplate="%s - Cinema"
        defaultTitle="Cinema"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Headers/>
      <SignInModal/>
      <Switch>
        <Route  to="/" exact component={HomePage} />
      </Switch>
      <GlobalStyle />
    </>
  );
}
