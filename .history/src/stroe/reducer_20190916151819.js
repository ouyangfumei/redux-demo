
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes';

const defaultState = {
    inputValue : '',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时噢'
    ]
};  //默认数据
export default (state = defaultState,action)=>{   //就是一个方法函数
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state)); //  state值只能传递，不能使用 深拷贝
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        newState.inputValue = '';
        return newState;
    }
    return state;
}
