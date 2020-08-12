import Add from '../pages/components/Add'
import Home from '../pages/components/Home'
import TodoList from '../pages/components/TodoList'
import NotFount from '../pages/404'

const routers = [
    { 'id': 'home', 'path': '/home', 'exact': true, 'component': Home },
    { 'id': 'add', 'path': '/add', 'component': Add },
    { 'id': 'todoList', 'path': '/todoList', 'component': TodoList },
    { 'id': 'NotFount', 'component': NotFount },
]
export default routers;