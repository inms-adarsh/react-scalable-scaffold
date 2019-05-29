import React from 'react';
import {Redirect} from 'react-router-dom';
import LoadableComponent from 'shared/Loadable/Loadable';

export const MoviesAppConfig = {
    settings: {
        layout: {}
    },
    auth: true,
    routes  : [
        {
            path     : '/apps/movies/list/:imdbID',
            component:  LoadableComponent({
                loader: () => import('./Movie/MovieDetails')
            })
        },
        {
            path     : '/apps/movies/list',
            component:  LoadableComponent({
                loader: () => import('./Movies/MoviesList')
            })
        },
        {
            path     : '/apps/movies',
            component: () => <Redirect to="/apps/movies/list"/>
        }
    ]
};
