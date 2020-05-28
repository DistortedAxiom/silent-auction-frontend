import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    height: 250px;
    background-color: #768FE0;
    border-radius: 4px;
    padding: 1rem;
    margin: 1rem;
    margin-top: 3rem;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    flex: 0 0 25%;

    &:hover {
    opacity: 0.8;
    cursor: pointer;
    }
`;

const Title = styled.h3`
    font-size: 2rem;
    font-weight: 300;
    margin: 1rem;
    color: white;
`;

const Description = styled.p`
    color: white;
    font-size: 1.1rem;
`;

const ItemPost = props => {

    return (
        <Wrapper>
            <Title>{props.data.name}</Title>
            <Description>{props.data.description}</Description>
        </Wrapper>
    )
}

export default ItemPost
