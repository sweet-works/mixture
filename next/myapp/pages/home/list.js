import React, { Component } from 'react';
import NavBar from '../../commponent/navBar';
import Hspace from '../../commponent/Hspace';
import { Button, DatePicker, List } from 'antd-mobile';
export default class componentName extends Component {
    state = {
        date: new Date()
    }
    render() {
        return (
            <div>
                <NavBar
                    callback={true}
                    title='我是首页'
                    menu={true}
                    colors={['#fff', '#fff', '#fff']}
                />
                <Hspace number='0' />
                <NavBar
                    callback={false}
                    title='我是首页2'
                    menu={true}
                />
                <Hspace size='lg' />
                <NavBar
                    callback={false}
                    title='我是首页3'
                    menu={true}
                />
                <Hspace />
                <Button type='primary' disabled={false}>确认</Button>
                <Hspace number='100' />
               <DatePicker
                    mode="date"
                    title="Select Date"
                    extra="Optional"
                    value={this.state.date}
                    onChange={date => this.setState({ date })}
                >
                    <List.Item arrow="horizontal">Date</List.Item>
                </DatePicker>
                123
            </div>
        )
    }
}
