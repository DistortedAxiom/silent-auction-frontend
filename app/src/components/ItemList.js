import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";

import ItemPost from './ItemPost';

const PostContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 2rem;
`;

export default function ItemList() {

    const [ItemList, setItemList] = useState([]);

    useEffect(() => {
        axios.get('https://demo5031288.mockable.io/api/item')
        .then(res => {
            setItemList(res.data.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <PostContainer>
            {ItemList.map((el, i) => (
                <ItemPost data={el} key={i}/>
            ))}
        </PostContainer>
    )

}
