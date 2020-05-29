import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Item = props => {

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

    var obj = {}

    const ItemId = (props.match.params.itemID)

    const DisplayItem = Data.forEach((el) => {
        if(el.id == ItemId) {
            obj = el;
        }
    })

    console.log(obj);

    return (
        <div>
            <h1>{obj.name}</h1>
            <p>{obj.description}</p>
        </div>
    );
}

export default Item;
