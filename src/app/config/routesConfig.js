import React from 'react';
import {Redirect} from 'react-router-dom';
import Utils from '../../shared/utils';
import {appsConfigs} from 'app/main/apps/appsConfigs';
import {LoginConfig} from 'app/main/login/LoginConfig';

const routeConfigs = [
    ...appsConfigs,
    LoginConfig
];

const routes = [
    ...Utils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        exact    : true,
        component: () => <Redirect to="/apps/movies"/>
    },
    {
        component: () => <Redirect to="/pages/errors/error-404"/>
    }
];

export default routes;
