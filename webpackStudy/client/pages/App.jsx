import React, { Component } from 'react'
import Home from './home'
import Footer from './comm/Footer'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cont: 0
    }
  }
  render () {
    return (
      <div>
       <Home/>
       <Footer/>
      </div>
    )
  }
}

export default App
