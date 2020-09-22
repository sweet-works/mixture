import React, { Component } from 'react'
import Footer from './comm/Footer'
import Inputs from './Inputs'
// import { Space, Button } from 'antd'
import TodoList from './comm/TodoList'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (<div>
            <Inputs {...this.props} />
            <TodoList {...this.props} />
            <Footer {...this.props} />
        </div >
        )
    }
}

export default Home;
