import React, {useReducer, useState, useEffect, useLayoutEffect, useContext, useRef } from 'react';
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
const HooksUseEffect = () => {
    const [count, dispatchCount] = useReducer(countReducer, 0)
    const [name, setName] = useState('kings');
    useEffect(() => {
        console.log('useEffect')
        return () => console.log('useEffect calback')
    }, [count])
    return (
        <div> 
            <input value={name} onChange={(e) => {
                setName(e.target.value)
            }} />
            <button onClick={() => dispatchCount({type: 'add'})}>{count}</button>
        </div>
    )
}
export default HooksUseEffect;