import {
    CREATE_ITEM,
    FETCH_ITEM,
    FETCH_ITEMS,
    EDIT_ITEM,
    DELETE_ITEM
} from './types';
import items from '../apis/items';
import history from '../utils/history';


export const createItem = data => async dispatch => {

    const response = await items.post('/items', data)

    dispatch({ type: CREATE_ITEM, payload: response.data })
    history.push('/items/list')
}

export const fetchItems = () => async dispatch => {

    const response = await items.get('/items');

    dispatch({ type: FETCH_ITEMS, payload: response.data })
}

export const fetchItem = id => async dispatch => {

    const response = await items.get(`/items/${id}`);

    dispatch({ type: FETCH_ITEM, payload: response.data })
}

export const editItem = (id, data) => async dispatch => {

    const response = items.put(`/items/${id}`, data);

    dispatch({ type: EDIT_ITEM, payload: response.data })
    history.push('/items/list')
}

export const deleteItem = id => async dispatch => {

    await items.delete(`/items/${id}`)

    dispatch({ type: DELETE_ITEM, payload: id })
    history.push('/items/list')
}