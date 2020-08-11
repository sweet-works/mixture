import React from 'react'
import { Button } from 'antd-mobile'
const Footer = (props) => {
  // let { setTodo } = props;
  const changeRedux = (type) => {
    // type-> undone | done | all | clear | delete
      // setTodo({showType : type});
      console.log(type)
  }
  return (
    <div>
      <Button type="primary" onClick={() => changeRedux('undone')}>未完成</Button>
      <Button type="primary" onClick={() => changeRedux('done')}>完成</Button>
      <Button type="primary" onClick={() => changeRedux('all')}>显示全部</Button>
      <Button type="primary" onClick={() => changeRedux('clear')}>清空</Button>
      <Button danger onClick={() => changeRedux('delete')}>删除</Button>

    </div >
  )
}

export default Footer