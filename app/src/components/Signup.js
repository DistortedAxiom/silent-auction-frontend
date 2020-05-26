import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';

export default function Register() {

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div>
            <h1>Welcome to Silent Auction</h1>
            <h2>Register with us!</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Username</h3>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            ref={register}
                        />
                    <h3>E-mail</h3>
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            ref={register}
                        />
                    <h3>Password</h3>
                        <input
                            type="text"
                            placeholder="Password"
                            name="password"
                            ref={register}
                        />
                    <div>
                    <button>Register</button>
                    </div>
                </form>
            </div>
            <div>
                <h3>Already have an account?</h3>
                <Link to="/">
                <button>Login</button>
                </Link>
            </div>
        </div>
    )

}