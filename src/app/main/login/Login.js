import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from 'app/auth/store/actions';

import './login.scss';

export class Login extends Component {

    state = {
        canSubmit: false,
        fields: {},
        fieldErrors: {}
    };

    disableButton = () => {
        this.setState({ canSubmit: false });
    };

    enableButton = () => {
        this.setState({ canSubmit: true });
    };

    onSubmit = (model) => {
        this.props.submitLogin(model.apiKey);
    };

    onSubmit = (e) => {
        e.preventDefault();
        const formData = this.state.fields
        const fieldErrors = this.validate(formData);
    
        this.setState({
          fieldErrors
        });
    
        if (Object.keys(fieldErrors).length) return;
    
        const apiKey = this.state.fields.apiKey;
        this.props.submitLogin(apiKey);
        this.setState({
          fields: {},
          fieldErrors: {},
        })
    
    }

    onInputChange = (e) => {
        const fields = this.state.fields;
        const newFields = {};
        newFields[e.target.name] = e.target.value;
        this.setState({
          fields: {...fields, ...newFields}
        });
      }
    
    validate = (formData) => {   
        const errors = {};
        if (!formData.apiKey || formData.apiKey === '' || formData.apiKey === null) {
            errors.apiKey = 'Please enter your username.';
        }
        return errors;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.login.error) {
            const fieldErrors = {
                apiKey: this.props.login.error.message
            };
            this.setState({
                fieldErrors
            });

            this.props.login.error = null;
            this.disableButton();
        }

        return null;
    }

    render() {
        const { fieldErrors, canSubmit } = this.state
        return (
            <div className="login">
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div className="card login-card">
                        <div className="card-header">Login</div>
                        <div className="card-block">
                            <input
                                type="text"
                                placeholder="Enter your username..."
                                value={this.state.fields.apiKey || ''}
                                name="apiKey"
                                onChange={(e) => this.onInputChange(e)}
                                />
                            <p className="error">
                                {fieldErrors.apiKey}
                            </p>
                        </div>
                        <div className="card-footer">
                            <button
                                type="submit"
                                aria-label="LOG IN"
                                disabled={canSubmit}
                            >
                                Login
                    </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        submitLogin: authActions.submitLogin
    }, dispatch);
}

const mapStateToProps = ({ auth }) => {
    return {
        login: auth.login
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
