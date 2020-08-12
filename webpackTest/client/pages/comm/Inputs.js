import React, { useState } from 'react'
import { Button, Space, Input } from 'antd'
let Index=0
const Inputs = (props) => {
  const [value, setValue] = useState('');
  const [war, setWar] = useState('');
  const checkout = () => {
    let bl = true;
    if (!value) {
      setWar('不能为空！')
      bl = false;
    }
    return bl;
  }
  return (
    <div>
      <Input
        style={{ width: 300 }}
        value={value}
        placeholder="请输入内容"
        onChange={(e) => {
          if(war) setWar('')
          setValue(e.target.value)
        }}
      />
      <Space size="middle" />
      <Button danger type="ghost" onClick={() => {
      let bl = checkout()
        if (bl) {
          console.log(value)
          let { setTodo, state: {todoList}} = props;
          todoList.push({id: Index++, title: value, show: false})
          setTodo(todoList)
          setValue('')
        }
      }
      }
      >+ADD</Button>
      {!!war && <p style={{ color: 'red' }}>{war}</p>}
    </div>
  )
}

export default Inputs