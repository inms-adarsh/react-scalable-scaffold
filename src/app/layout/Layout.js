import React from 'react';
import { renderRoutes } from 'react-router-config'
import AppContext from '../AppContext';

const Layout = ({ children }) => {

    return (
        <AppContext.Consumer>
            {({ routes }) => (
                <React.Fragment>
                    {renderRoutes(routes)}
                    {children}
                </React.Fragment>
            )}
        </AppContext.Consumer>
    );
};

export default Layout;