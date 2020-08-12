import React, { useState, useEffect } from 'react'
import { List, Checkbox } from 'antd';
import Inputs from '../comm/Inputs';
import Footer from '../comm/Footer';
const TodoList = (props) => {
    const { state, setTodo } = props;
    const [dataList, setDataList] = useState([])
    const filterToList = () => {
        let { showType, todoList } = state;
        let list = [];
        if (showType === 'undone') {
            list = todoList.filter(item => item.show === false);
        } else if (showType === 'done') {
            list = todoList.filter(item => item.show === true);
        } else if (showType === 'all') {
            list = todoList;
        } else if (showType === 'clear') {
            list = [];
        } else if (showType === 'delede') {
            setTodo({ todoList: [] })
            return;
        }
        console.log(list)
        setDataList(list)
    }
    useEffect(() => {
        filterToList()
        return () => { }
    }, [state])
    return (
        <div>
            <Inputs {...props}/>
            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={dataList}
                style={{mainHeight: '300px'}}
                renderItem={item => (
                    <List.Item>
                        <Checkbox
                            checked={item.show}
                            onChange={(e) => {
                                console.log(e.target.checked)
                                item.show = e.target.checked
                                console.log(item)
                                let newList = state.todoList.map(items => {
                                    if (items.id === item.id) {
                                        items = item
                                    }
                                    return items;
                                })
                                console.log(newList, 'newList')
                                setTodo({ todoList: newList })
                            }}
                        >
                            {item.title}---------{item.id}
                        </Checkbox>
                    </List.Item>
                )}
            />
            <Footer {...props}/>
        </div>
    )
}

export default TodoList