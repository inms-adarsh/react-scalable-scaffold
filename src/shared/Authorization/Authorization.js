import React, {Component} from 'react';
import {matchRoutes} from 'react-router-config';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import AppContext from '../../app/AppContext';

class Authorization extends Component {

    constructor(props, context)
    {
        super(props);
        const {routes} = context;
        this.state = {
            accessGranted: true,
            routes
        };
    }

    componentDidMount()
    {
        if ( !this.state.accessGranted )
        {
            this.redirectRoute(this.props);
        }
    }

    componentDidUpdate()
    {
        if ( !this.state.accessGranted )
        {
            this.redirectRoute(this.props);
        }
    }

    static getDerivedStateFromProps(props, state)
    {
        const {location} = props;
        const {pathname} = location;

        const matched = matchRoutes(state.routes, pathname)[0];

        const accessGranted = (matched && matched.route.auth) ? matched.route.auth : true;

        return {
            accessGranted
        };
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        return nextState.accessGranted !== this.state.accessGranted;
    }

    redirectRoute(props)
    {
        const {history} = props;
        /*
        User is guest
        Redirect to Login Page
        */
       
        history.push({
            pathname: '/login'
        });
       
    }

    render()
    {
        const {children} = this.props;
        const {accessGranted} = this.state;
        return accessGranted ? <React.Fragment>{children}</React.Fragment> : null;
    }
}

function mapStateToProps({auth})
{
    return {
        user: auth.user
    }
}

Authorization.contextType = AppContext;

export default withRouter(connect(mapStateToProps)(Authorization));
