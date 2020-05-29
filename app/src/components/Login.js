import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';

const Login = props => {

    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        axiosWithAuth()
			.post('/api/login', data)
			.then(res => {
				localStorage.setItem('token', res.data.payload);
				history.push('/items/list');
			})
			.catch((error) => {
				console.log('Post error ', error);
      })
    }

    return (
        <div>
            <h1>Welcome to Silent Auction</h1>
            <h2>Login</h2>
            <div>
                <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
                    <h3>Email</h3>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        ref={register({ required: true })}
                    />
                    {errors.username && <p>Must enter an email</p>}
                    <h3>Password</h3>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        ref={register({ required: true })}
                    />
                    {errors.password && <p>Must enter a password</p>}
                        <button className="ui button primary" type="submit">Login</button>
                </form>
            </div>
            <div>
                <h3>Don't have an account?</h3>
                <div className="ui container">
                    <Link className="ui button primary" to="/register" style={{ textDecoration: 'none' }}>
                        Register
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default connect()(Login);