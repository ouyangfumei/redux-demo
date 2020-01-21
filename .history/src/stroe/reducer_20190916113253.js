const defaultState = {
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时噢'
    ]
};  //默认数据
export default (state = defaultState,action)=>{   //就是一个方法函数
    if(action.type === 'inputValue'){
        let newState = JSON.parse(JSON.stringify(state)); //深拷贝
        newState.inputValue = action.value;
        console.log(newState)
        return newState;
    }
    if(action.type === 'addItem'){
        let newState = JSON.parse(JSON.stringify(state));
        console.log(newState.inputValue)
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        console.log(newState);
        return newState;
    }
    return state;
}
