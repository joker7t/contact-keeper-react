import React, { useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import jwt_decode from 'jwt-decode';
import Loader from '../layouts/Loader';

const Login = ({ history }) => {
    const [user, setUser] = useState({
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

            const res = await axios.post('/api/auth', user, config);
            const { token } = res.data;
            // localStorage.setItem("token", token);
            // setJwtToken(token);
            const decodedToken = jwt_decode(token);
            console.log(decodedToken);

            history.push('/');
        } catch (error) {
            console.log(error);
            setIsLoginSuccess(false);
        }
        setIsLoading(false);
    }

    const onChange = (e) => {
        setUser({ [e.target.name]: e.target.value });
        setIsLoginSuccess(true);
    }

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
                            <input type='email' value={user.email} name='email' required onChange={onChange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' value={user.password} name='password' minLength={6} required onChange={onChange} />
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

export default Login;
