import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './stroe/actionTypes';
// input 框change事件
export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value:value
});
// 添加
export const addItemAction = ()=>({
    type:ADD_ITEM
});
export const onDeletItemAction = (index)=>({
    type:
})