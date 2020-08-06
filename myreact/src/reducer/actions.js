export const SET_TODO = 'SET_TODO';
/*
 * action 创建函数
 */

export function setTodo(obj) {
    return {
        type: SET_TODO,
        obj: obj
    };
}