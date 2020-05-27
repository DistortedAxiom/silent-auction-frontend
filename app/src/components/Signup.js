import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import styled, {css} from 'styled-components';
import axios from 'axios';
import '../App.css'

export default function SignUp() {

    const inputStyle = css`
    background-color: #eee;
    height: 1rem;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 1.3rem;
    box-sizing: border-box;
    `;

    const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4vh;
    `;

    const StyledForm = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    `;

    const StyledInput = styled.input`
    display: block;
    width: 100%;
    ${inputStyle}
    `;

    const StyledButton = styled.button`
        display: block;
        text-align: center;
        background-color: #09BD92;
        color: white;
        font-size: 1rem;
        border: 0;
        border-radius: 5px;
        height: 40px;
        padding: 0 20px;
        cursor: pointer;
        box-sizing: border-box;
    `;

    const formValue = { username: '', email: '', password: '' }

    const {register, handleSubmit, errors} = useForm();
    const [user, setUser] = useState(formValue);

    const registerUser = (newUser) => {
        axios.post('https://reqres.in/api/register', newUser)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const onSubmit = (event) => {

        const newUser = {
            username: event.username,
            password: event.password
        }

        registerUser(newUser)
    }

    return (
        <div>
            <h1>Welcome to Auctionable</h1>
            <h2>Register with us!</h2>
            <div>
                <StyledFormWrapper>
                <StyledForm onSubmit={handleSubmit(onSubmit)}>
                    <h3>Username</h3>
                        <StyledInput
                            type="text"
                            placeholder="Username"
                            name="username"
                            ref={register({ required: true })}
                        />
                            {errors.username && <p>Username is required</p>}
                    <h3>Password</h3>
                        <StyledInput
                            type="password"
                            placeholder="Password"
                            name="password"
                            ref={register({ required: true })}
                        />
                            {errors.password && <p>Password is required</p>}
                    <div className="button-container">
                        <StyledButton type="submit">Register</StyledButton>
                    </div>
                </StyledForm>
                </StyledFormWrapper>
            </div>
            <div>
                <h3>Already have an account?</h3>
                <div className="button-container">
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <StyledButton type="submit">Login</StyledButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}
