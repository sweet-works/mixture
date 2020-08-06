

import {setTodo} from '../reducer/actions';
/*
 * Redux
 */
// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
export function mapStateToProps(state) {
    return {
        state
    };
}

// 获取 action 创建函数
export function mapDispatchToProps(dispatch) {
    return {
        setTodo: async(data) => {
            dispatch(setTodo(data));
        }
    };
}
