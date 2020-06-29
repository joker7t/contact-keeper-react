import React, { useState } from 'react';
import axios from 'axios';
import setJwtToken from '../../utils/setJwtToken';
import jwt_decode from 'jwt-decode';
import Loader from '../layouts/Loader';
import { Alert } from 'react-bootstrap';

const Register = ({ setUser }) => {
    const [registerUser, setRegisterUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();

        const { password, password2 } = registerUser;

        if (password !== password2) {
            setErrorMessage('Confirm password does not match');
        } else {
            setIsLoading(true);
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                const res = await axios.post('/api/users', registerUser, config);
                setIsLoading(false);
                const { token } = res.data;
                localStorage.setItem("token", token);
                setJwtToken(token);
                const decodedToken = jwt_decode(token);
                setUser(decodedToken.user.id);
            } catch (error) {
                console.log(error);
                setErrorMessage('Register failed');
            }
        }
    }

    const onChange = (e) => {
        setRegisterUser({ ...registerUser, [e.target.name]: e.target.value });
        setErrorMessage(null);
    }

    return (
        <div>
            {isLoading ? <Loader /> :
                <div className='form-container'>
                    <h1>
                        Account <span className='text-primary'>Register</span>
                    </h1>
                    <form onSubmit={onSubmit}>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' value={registerUser.name} name='name' required onChange={onChange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' value={registerUser.email} name='email' required onChange={onChange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' value={registerUser.password} name='password' minLength={6} required onChange={onChange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password2'>Confirm Password</label>
                            <input type='password' value={registerUser.password2} name='password2' minLength={6} required onChange={onChange} />
                        </div>
                        {!errorMessage ? '' :
                            <Alert variant='danger'>
                                {errorMessage}
                            </Alert>
                        }

                        <button type='submit' className='btn btn-block btn-primary'>Register</button>
                    </form>

                </div>
            }
        </div>
    );
}

export default Register;
