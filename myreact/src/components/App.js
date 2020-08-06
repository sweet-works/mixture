import React, { Component } from 'react'
import { mapDispatchToProps, mapStateToProps } from './mapProps';
import { connect } from 'react-redux';
import { Button } from 'antd';
import Home from './pages/home'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
    console.log(this.props)
    this.props.setTodo({ age: 0 })
  }
  // 加减年龄
  computed = (type) => {
    let { setTodo } = this.props;
    let ages = this.props.state.age;
    if (type === 'add') {
      ages += 1
    } else if (type === 'minus') {
      ages -= 1
    }
    setTodo({ age: ages })
  }
  render() {
    let { age, auth } = this.props.state;
    return (
      <div>
        <Home {...this.props} />
        <h1>{auth}:{age}</h1>
        <Button type="primary" onClick={() => this.computed('add')}>+</Button>
        <Button danger onClick={() => this.computed('minus')}>-</Button>
      </div >
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
