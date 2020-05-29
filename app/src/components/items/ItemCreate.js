import React from 'react';
import { useForm } from 'react-hook-form';
import { createItem } from '../../actions';
import { connect } from 'react-redux';

const ItemCreate = props => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        props.createItem(data);
    }

    return (
        <div>
            <h2>Create an Item</h2>
            <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
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
        </div>
    );
}

export default connect(null, { createItem })(ItemCreate);