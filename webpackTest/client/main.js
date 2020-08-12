import React from 'react'
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
import store from './reducer'
import App from './pages/App'
import './style/reset';
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );   
ReactDOM.render(
  <App />,
  document.getElementById('root')
);   