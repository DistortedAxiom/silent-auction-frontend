import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItems } from '../../actions'

const ItemList = props => {

    const editDelete = item => {
        return (
            <div className="right floated content">
                <Link to={`/items/edit/${item.id}`} className="ui button primary">
                    Edit
                </Link>
                <Link to={`/items/delete/${item.id}`} className="ui button negative">
                    Delete
                </Link>
            </div>
        )
    }

    const create = () => {
        return (
            <div style={{ textAlign: 'right' }}>
                <Link to="/items/new" className="ui button primary">
                    Create Item
                </Link>
            </div>
        )
    }

    useEffect(() => {
        props.fetchItems()
        console.log(fetchItems());
    }, [])

    return (
        <div>
            <h2>Items to Bid On</h2>
            <div className="ui celled list">
                {props.items.map(item => {
                    return (
                        <div className='item' key={item.id}>
                            {editDelete(item)}
                            <div className='content'>
                                <h2>{item.name}</h2>
                                <div className='description'><h4>{item.description}</h4></div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {create()}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        items: Object.values(state.items)
    }
}

export default connect(mapStateToProps, { fetchItems })(ItemList);