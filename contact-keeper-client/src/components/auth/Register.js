import React, { useState } from 'react';

const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
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
                Account <span className='text-primary'>Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' value={user.name} name='name' required onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' value={user.email} name='email' required onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' value={user.password} name='password' required onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password2'>Confirm Password</label>
                    <input type='password' value={user.password2} name='password2' required onChange={onChange} />
                </div>

                <button type='submit' className='btn btn-block btn-primary'>Register</button>
            </form>

        </div>
    );
}

export default Register;
