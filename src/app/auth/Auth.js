import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as userActions from './store/actions/user.actions';
import { bindActionCreators } from 'redux';
import * as Actions from 'app/store/actions';
import authService from 'app/services';

class Auth extends Component {
    /*eslint-disable-next-line no-useless-constructor*/
    constructor(props) {
        super(props);

        this.authCheck();

    }

    authCheck = () => {
        let token = authService.getAccessToken()

        if (token) {
            axios.defaults.params = {};
            axios.defaults.params['apiKey'] = token;
            this.props.showMessage({ message: 'Logging in with Api Key' });

            /**
             * Sign in and retrieve user data from Api
             */
            authService.signInWithToken()
                .then(user => {
                    this.props.setUserData(user);

                    this.props.showMessage({ message: 'Logged in with Api Key' });
                })
                .catch(error => {
                    this.props.showMessage({ message: error });
                })
        } else {
            this.props.logout();
        }

    };

    render() {
        const { children } = this.props;

        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logout: userActions.logoutUser,
        setUserData: userActions.setUserData,
        showMessage: Actions.showMessage,
        hideMessage: Actions.hideMessage
    },
        dispatch);
}

export default connect(null, mapDispatchToProps)(Auth);
