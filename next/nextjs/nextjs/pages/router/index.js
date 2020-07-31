// 动态路由 只能通过 query 获取
import { withRouter } from 'next/router'
import styled from 'styled-components'
const Abc = styled.span`
font-size:20px;
background-color: rgba(155,234,278, .5);
`;
import {Button} from 'antd'
const A = (props) => {
    let {router} = props
    console.log(props)
    return (
        <div>
            <Button>ID={router.query.id}</Button>
            <p>通过 router.query.id 拿到参数</p>
            <div style={{ color: 'red' }}>
                <Abc> href="/router?id=1" as="router/1" </Abc><br/>
                有点： 美化、隐藏信息<br/>
                缺点： 刷新页面会404 <br/>
                原因： 在点击按钮的时候页面操作都是在浏览器端，他可以找到路由的映射关系。刷新页面是服务端渲染 它不存在这个路由就造成404<br/>
                <s>解决: 通过 koa 拦截设置 通过映射为 服务端可读 路由</s><br/>
                亲测：有bug 通过koa 映射完后 404 是解决了  但是刷新页面 参数丢失
            </div>
            <style jsx>
                {
                `
                span {
                    font-size:20px;
                    color: blue;
                }
                `}
            </style>
        </div>
    )
}
export default withRouter(A)