import { Button } from 'antd'
import React, { useState, useEffect } from 'react'
// 红绿灯效果
// 初始 红灯亮 5s后 绿灯亮 3s 后黄灯亮 2s后 红灯亮
let timer = ''
const Lern = ({ color, on }) => {
    return (
        <div style={{
            width: '100px',
            border: '1px #fff solid',
            margin: '0 auto',
            borderRadius:'50px',
            height: '100px',
            backgroundColor: on ? color : '#eee',
        }}></div>
    )
}
// 初始 红灯亮 5s后 绿灯亮 3s 后黄灯亮 2s后 红灯亮
// 控制 每个灯亮的时间
const redTime = 5;
const yellowTime = 3;
const greenTime = 2;
const start = 0;
const App = () => {
    const [cont, setCont] = useState(0)
    const [reds, setRed] = useState(true)
    const [greens, setGreen] = useState(false)
    const [yellows, setYellow] = useState(false)
    const setTimer = () => {
        clearInterval(timer)
        timer = setInterval(() => {
            setCont((cont) => {
                if (cont >= start && cont < redTime) {
                    console.log('red', cont)
                    // setRed('red')
                } else if (cont >= redTime && cont < (redTime + yellowTime)) {
                    console.log('green', cont)
                    setRed(false)
                    setGreen(true)
                    setYellow(false)
                } else if (cont >= (redTime + yellowTime) && cont < (redTime + yellowTime + greenTime)) {
                    console.log('yellow', cont)
                    setRed(false)
                    setGreen(false)
                    setYellow(true)
                } else if (cont === (redTime + yellowTime + greenTime)) {
                    setCont(start)
                    setRed(true)
                    setGreen(false)
                    setYellow(false)
                }
                return cont + 1
            })
        }, 1000);
        return () => clearInterval(timer)
    }
    useEffect(() => {
        setTimer()
    }, [])
    return (
        <div>
            <Button>时间：{cont}</Button>
            <Lern color='red' on={reds} />
            <Lern color='green' on={greens} />
            <Lern color='yellow' on={yellows} />
            <Button type="primary" onClick={() => setTimer()}>START</Button>
            <Button type="warning" onClick={() => clearInterval(timer)}>STOP</Button>
        </div>
    )
}
export default App;