import React, { useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import jwt_decode from 'jwt-decode';
import Loader from '../layouts/Loader';
import setJwtToken from '../../utils/setJwtToken';
import PropTypes from "prop-types";
import { login } from '../../actions/userAction';
import { connect } from 'react-redux';

const Login = ({ history, login, setUser }) => {
    const [loginUser, setLoginUser] = useState({
        email: 'toan@gmail.com',
        password: '123456'
    });
    const [isLoginSuccess, setIsLoginSuccess] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const res = await axios.post('/api/auth', loginUser, config);
            setIsLoading(false);
            const { token } = res.data;
            localStorage.setItem("token", token);
            setJwtToken(token);
            const decodedToken = jwt_decode(token);
            setUser(decodedToken.user.id);

            history.push('/');
        } catch (error) {
            console.log(error);
            setIsLoginSuccess(false);
            setIsLoading(false);
        }
    }

    const onChange = (e) => {
        setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
        setIsLoginSuccess(true);
    }

    const { email, password } = loginUser;

    return (
        <div>
            {isLoading ? <Loader /> :
                <div className='form-container'>
                    <h1>
                        Account <span className='text-primary'>Login</span>
                    </h1>
                    <form onSubmit={onSubmit}>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' value={email} name='email' required onChange={onChange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' value={password} name='password' minLength={6} required onChange={onChange} />
                        </div>
                        {isLoginSuccess ? '' :
                            <Alert variant='danger'>
                                Wrong credentials
                        </Alert>
                        }

                        <button type='submit' className='btn btn-block btn-primary'>Login</button>
                    </form>
                </div>
            }
        </div>
    );
}

Login.propTypes = {
    login: PropTypes.func.isRequired
};

export default connect(null, { login })(Login);