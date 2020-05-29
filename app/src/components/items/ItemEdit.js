import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { editItem, fetchItem } from '../../actions';
import { connect } from 'react-redux';


const ItemEdit = props => {

    const { register, handleSubmit, errors } = useForm({
        defaultValues: {
            name: props.item.name,
            description: props.item.description
        }
    });

    useEffect(() => {
        props.fetchItem(props.match.params.id);
    }, [])

    const onSubmit = data => {
        props.editItem(props.match.params.id, data);
    }

    return (
        <div>
            <h2>Edit an Item</h2>
            <form class='ui form' onSubmit={handleSubmit(onSubmit)}>
                <label>Item Name</label>
                <input
                    name='name'
                    type='text'
                    placeholder='Name'
                    ref={register({ required: true })}
                />
                {errors.name && <p>Must enter an item name</p>}
                <label>Item Description</label>
                <input
                    name='description'
                    type='text'
                    placeholder='Description'
                    ref={register({ required: true })}
                />
                {errors.description && <p>Must enter an item description</p>}
                <button className="ui button primary">Submit</button>
            </form>
            {!props.item ? <div>Loading...</div> : ''}
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        item: state.items[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { editItem, fetchItem })(ItemEdit);