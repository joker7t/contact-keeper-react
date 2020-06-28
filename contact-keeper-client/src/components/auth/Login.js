import React, { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState({
        email: 'toan@gmail.com',
        password: '123456'
    });

    const onSubmit = async (e) => {
        e.preventDefault();

    }

    const onChange = (e) => {
        setUser({ [e.target.name]: e.target.value });
    }

    return (
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
                    <input type='password' value={user.password} name='password' required onChange={onChange} />
                </div>

                <button type='submit' className='btn btn-block btn-primary'>Login</button>
            </form>

        </div>
    );
}

export default Login;
