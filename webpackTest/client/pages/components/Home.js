import React, { Component } from 'react'
import { Button } from 'antd';
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cont: 0
    }
  }
  render() {
    return (
      <div>
        <h1 style={{ color: this.state.cont > 8 ? 'blue' : 'red' }}>
          王耀杰--{this.state.cont}
        </h1>
        <Button
          type="primary"
          onClick={() => {
            this.setState({
              cont: this.state.cont + 1
            })
          }}
        >
          按钮
        </Button>
      </div>
    )
  }
}

export default Home
