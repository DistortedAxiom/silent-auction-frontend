import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItem, deleteItem } from '../../actions';

const ItemDelete = props => {

    useEffect(() => {
        props.fetchItem(props.match.params.id);
    }, [])

    return (
        <div>
        <h3>Are you sure?</h3>
            <button onClick={() => props.deleteItem(props.match.params.id)} className="ui button primary">Yes</button>
            <Link to="/items/list" className="ui button negative">No</Link>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        item: state.items[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchItem, deleteItem })(ItemDelete);