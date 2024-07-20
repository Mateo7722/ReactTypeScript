import {v4 as uuidv4} from 'uuid'
import { Item, ItemForm } from "../types"


export type ListActions = 
    {type: 'add-item', payload: {item: ItemForm}} |
    {type: 'get-item-by-id', payload: {id: Item['id']}} |
    {type: 'edit-item', payload: {item: Item}} |
    {type: 'delete-item', payload: {id: Item['id']}}



export type ListState = {
    list:Item[],
    activeItem: Item['id']
}

const getLocalStorage = () => {
    const list = localStorage.getItem('list')
    return list ? JSON.parse(list) : []
}

export const initialState : ListState = {
    list: getLocalStorage(),
    activeItem: ''
}

const createItem = (item: ItemForm): Item => {
    return {...item, id: uuidv4()}
}

export const listReducer = (
    state: ListState = initialState,
    action: ListActions
) => {

    if(action.type === 'add-item'){
        const newItem = createItem(action.payload.item)
        const newList = [...state.list, newItem]

        return {...state, list: newList}
    }

    if(action.type === 'get-item-by-id'){
        return {
            ...state,
            activeItem: action.payload.id
        }
    }

    if(action.type === 'edit-item'){

        const newItem = action.payload.item

        return{
            ...state,
            list: state.list.map(item => item.id === newItem.id ? newItem : item),
            activeItem: ''
        }
    }

    if(action.type === 'delete-item'){
        return{
            ...state,
            list: state.list.filter(item => item.id !== action.payload.id)
        }
    }

    return state;
}

