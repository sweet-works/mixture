import Comp from "../component/Comp"
import Link from 'next/link'
import Router from 'next/router'
const events = [
    'routeChangeStart',
    'routeChangeComplete',
    'routeChangeError',
    'beforeHistoryChange',
    'hashChangeStart',
    'hashChangeComplete'
]
function makeEvent(type) {
    return (...args) => { console.log(type, ...args) }
}
events.forEach(event => {
    Router.events.on(event, makeEvent(event))
})

const App = () => {
const goToState = () => {
        Router.push('/hooks/useState')
    }
    const goTo = () => {
        // Router.push('/hooks/useState')
        Router.push({
            pathname: '/router',
            query: {
                id: 2
            }
        })
    }
    return (
        <div>
            {/* <Comp>
                <Link href="/##" title="首页">首页</Link>
            </Comp>
            <Comp>
                <Link href="/tools/light" title="红绿灯">红绿灯</Link>
            </Comp>
            <button onClick={goToState}>
                useState（编程式跳转）
            </button>
            <Comp>
                <Link href="/router?id=1" title="路由传参数">路由传参数</Link>
            </Comp>
            <button onClick={goTo}>
                路由传参数（编程式跳转）
            </button>
            <Comp>
                <Link href="/router?id=1" as='/router/1' title="路由映射">路由映射</Link>
            </Comp>
            <Comp>
                <Link href="/getInitialProps?id=10086" title="getInitialProps">getInitialProps</Link>
            </Comp> */}
            123
        </div>
    )
}
export default App;
