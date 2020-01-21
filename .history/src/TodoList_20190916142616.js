import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'
import Store from './stroe';
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes';

const data=[
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
]

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = Store.getState();
        // 关键代码start
        Store.subscribe(this.stroeChange.bind(this));   //订阅Redux的状态
        // 关键代码 end
    }
    onChange(e){
        // console.log(e.target.value);
        const action ={
            type:CHANGE_INPUT,
            value:e.target.value
        };
        Store.dispatch(action);
    }
    stroeChange(){
        this.setState(Store.getState());
    }
    addItem(){
        const action = {type:'addItem'};
        Store.dispatch(action);
    }
    onDeletItem(index){
        const action = {type:'deletItem',index};
        Store.dispatch(action);
    }
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input placeholder='write someting' style={{ width:'250px', marginRight:'10px'}} onChange={this.onChange.bind(this)} value={this.state.inputValue}/>
                    <Button type="primary" onClick={this.addItem.bind(this)}>增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index)=>(<List.Item onClick={this.onDeletItem.bind(this,index)}>{item}</List.Item>)}
                    />    
                </div>
            </div>
         );
    }
}
export default TodoList;