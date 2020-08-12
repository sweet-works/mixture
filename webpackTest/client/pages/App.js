import React, { Component } from 'react'
import { mapDispatchToProps, mapStateToProps } from './mapProps.js'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Route,
  Switch,
  Redirect
  // Link
} from 'react-router-dom'
import Routers from '../router'
import NavBars from './comm/NavBar'

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
        {/* <Router>
          <NavBars/>
          <Switch>
            <Redirect exact from='/' to='/home' />
            {Routers.map(route => {
              const { id, exact, path, component, ...rest } = route
              return (
                <Route
                  key={id}
                  exact={exact}
                  path={path}
                  render={props => {
                    return (
                      <route.component {...this.props} {...props} {...rest} />
                    )
                  }}
                />
              )
              // }
            })}
          </Switch>
        </Router> */}
        123
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
