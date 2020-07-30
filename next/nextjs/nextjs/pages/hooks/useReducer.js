import React, { useReducer, useEffect } from 'react';
const countReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'minus':
            return state - 1;
        default:
           return state;
    }
}
const HooksR = () => {
    const [count, dispatchCount] = useReducer(countReducer, 0)
    useEffect(() => {
        const interval = setInterval(() => {
            dispatchCount({type: 'minus'});
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <div>
            counts: {count}
        </div>
    )
}
export default HooksR;