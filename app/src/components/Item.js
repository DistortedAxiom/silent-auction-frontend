import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'

const Image = styled.img`
    height: 28rem;
    width: 28rem;
`

const Item = props => {

    var obj = {}

    const [Data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://demo5031288.mockable.io/api/item')
        .then(res => {
            setData(res.data.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    const ItemId = (props.match.params.itemID)

    const DisplayItem = Data.forEach((el) => {
        if(el.id == ItemId) {
            obj = el;
        }
    })

    console.log(obj);

    return (
        <div>
            <h2>{obj.name}</h2>
            <h4>{obj.description}</h4>
            <Image src={obj.img}></Image>
            <p>{obj.bids} Bids</p>
        </div>
    );
}

export default Item;
