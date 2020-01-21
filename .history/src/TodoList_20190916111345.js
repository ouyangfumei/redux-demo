import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'
import Store from './stroe';

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
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.stroeChange);   //订阅Redux的状态
    }
    onChange(e){
        // console.log(e.target.value);
        const action ={
            type:'inputValue',
            value:e.target.value
        };
        Store.dispatch(action);
    }
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input placeholder='write someting' style={{ width:'250px', marginRight:'10px'}} onClick={this.onChange.bind(this)}/>
                    <Button type="primary">增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item=>(<List.Item>{item}</List.Item>)}
                    />    
                </div>
            </div>
         );
    }
}
export default TodoList;