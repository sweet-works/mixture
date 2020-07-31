import Comp from "./Comp"
import Link from 'next/link'
import Router from 'next/router'
const LayOut = ({children}) => {
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
            <header>
                <Comp>
                    <Link href="/"><a>首页</a></Link>
                </Comp>
                <Comp>
                    <Link href="/##"><a>## 哈希</a></Link>
                </Comp>
                <Comp>
                    <Link href="/tools/light"><a>红绿灯</a></Link>
                </Comp>
                <button onClick={goToState}>
                    useState（编程式跳转）
                </button>
                <Comp>
                    <Link href="/router?id=1"><a>路由传参数</a></Link>
                </Comp>
                <button onClick={goTo}>
                    路由传参数（编程式跳转）
                </button>
                <Comp>
                    <Link href="/router?id=1" as='/router/1'><a>路由映射</a></Link>
                </Comp>
                <Comp>
                    <Link href="/getInitialProps?id=10086"><a>getInitialProps</a></Link>
                </Comp>
            </header>
            <div>{children}</div>
        </div>
    )
}
export default LayOut;
