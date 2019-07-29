import React from 'react';
import {Redirect} from 'react-router-dom';
import LoadableComponent from 'shared/Loadable/Loadable';

export const DashBoardAppConfig = {
    settings: {
        layout: {}
    },
    auth: true,
    routes  : [
        {
            path     : '/apps/dashboard',
            component:  LoadableComponent({
                loader: () => import('./DashBoard/DashBoardContainer')
            })
        },
       
        {
            path     : '/apps/movies',
            component: () => <Redirect to="/apps/movies/list"/>
        }
    ]
};
