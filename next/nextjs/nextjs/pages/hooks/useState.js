import React, {useState, useEffect} from 'react'
class MyCount extends React.Component {
    state = {
        count: 0
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ count: this.state.count + 1 })
        }, 1000);
    };
    componentwillUnmount() {
        if (this.interval) { clearInterval(this.interval) }
    }
    render() {
        return <span>{this.state.count}</span>
    }
}
function MyCountFunc() {
    const [count, setCount] = useState(0)
    // hooks没有钩子函数概念 所以引入 useEffect
    useEffect(() => {
        const interval = setInterval(() => {
           setCount((count) => count + 1 )
        //    setCount(count + 1)
        }, 1000);
        return () => clearInterval(interval); // 卸载的时候会执行
    }, [])
    return <span>{count}</span>
}
export default MyCountFunc;