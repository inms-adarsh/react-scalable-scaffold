
import React from 'react';
import Authorization from '../shared/Authorization/Authorization';
import Layout from './layout/Layout'
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from '../history';
import Auth from './auth/Auth';
import store from './store';
import AppContext from './AppContext';
import routes from './config/routesConfig';


const App = () => {
  return (
    <AppContext.Provider
      value={{
        routes
      }}
    >
      <Provider store={store}>
        <Auth>
          <Router history={history}>
            <Authorization>
              <Layout />
            </Authorization>
          </Router>
        </Auth>
      </Provider>
    </AppContext.Provider>
  );
};

export default App;
