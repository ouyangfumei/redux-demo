import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './stroe/actionTypes';

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value:e.target.value
});