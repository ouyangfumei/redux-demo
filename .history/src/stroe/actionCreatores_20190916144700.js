import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './stroe/actionTypes';
// input 框change事件
export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value:value
});