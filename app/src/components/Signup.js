import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function Register() {

    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        axiosWithAuth()
            .post('/api/register', data)
            .then(res => {
                console.log(res)
                history.push('/')
            })
            .catch((error) => {
                console.log('Post error ', error);
            })
    }

    return (
        <div>
            <h1>Welcome to Silent Auction</h1>
            <h2>Register with us!</h2>
            <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
                <h3>Email</h3>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
                />
                {errors.email && <p>Email must have at least 6 characters</p>}
                <h3>Password</h3>
                <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    ref={register({ required: true, minLength: 6 })}
                />
                {errors.username && <p>Username must have at least 6 characters</p>}
                <div>
                    <button className="ui button primary">Register</button>
                </div>
            </form>
            <div>
                <h3>Already have an account?</h3>
                <Link to="/">
                    <button className="ui button primary">Login</button>
                </Link>
            </div>
        </div>
    )
}