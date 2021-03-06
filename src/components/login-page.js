import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';
import './login-form.css';

export function LoginPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
            <h2 className="home-header">Log In</h2>
                <LoginForm />
                <div className="container">
                    <Link className="link" to="/register">Register</Link>
                </div>
        </div>
);
}

const mapStateToProps = state => ({
loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);