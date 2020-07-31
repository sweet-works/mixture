import { withRouter } from 'next/router'
import { Button } from 'antd'
import moment from 'moment'
const A = ({ router, name, timer }) => {
    return (
        <div>
            <Button>ID={router.query.id}-----{name}</Button>
            <Button>TIMER:{timer}</Button>
        </div>
    )
}
// A.getInitialProps = async () => {
//     return {
//         name: 'king'
//     }
// }
// 正常我们这里是处理异步的 不可能直接return出去
A.getInitialProps = async () => {
    const moments = (await import('moment'))
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'kingsss',
                timer: moments.default(new Date()).fromNow()
            })
            console.log('in')
        }, 1000)
    })
    console.log('out')
    return await promise;
}
export default withRouter(A);