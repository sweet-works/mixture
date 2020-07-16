/*
 * @Autor: yaojie
 * @Date: 2020-04-27 11:11:49
 * @LastEditors: yaojie
 * @LastEditTime: 2020-04-28 18:33:53
 * @Description: 
 * @JiraID: SOMPO-
 */
import React from 'react';
// import { hot } from 'react-hot-loader/root';
import {Button} from 'antd'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>react</h1>
        <Button type='primary'>storyBook</Button>
        <br/>
         <Button type="dashed">warning</Button>
        <br/>
         <Button type="link">warning</Button>
      </header>
    </div>
  );
}
// export default process.env.NODE_ENV === 'development' ? hot(App) : App;
export default App;
