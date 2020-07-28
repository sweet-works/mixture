import React, { Component } from 'react';
import NavBar from '../../commponent/navBar';
import Hspace from '../../commponent/Hspace';
import { Button } from 'antd';
export default class componentName extends Component {
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
                <Button type='primary' disabled={false}>确认12312312312</Button>
            </div>
        )
    }
}
