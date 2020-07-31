import React, { useReducer, useState, useEffect, useMemo,memo, useCallback } from 'react';
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
const MyCountFunc = () => {
    const [count, dispatchCount] = useReducer(countReducer, 0)
    const [name, setName] = useState('kings');
    // const config = {
    //     text: `count is ${count}`,
    //     color: count > 3 ? 'red' : 'blue'
    // }
    const config = useMemo(() => ({
        text: `count is ${count}`,
        color: count > 3 ? 'red' : 'blue'
    }), [count])
    // const handleClick = () => {
    //     dispatchCount({ type: 'add' })
    // }
    // const handleClick = useCallback(() => {
    //     return dispatchCount({ type: 'add' })
    // }, []);
    const handleClick = useMemo(() => () =>{ 
        dispatchCount({ type: 'add' });
    }, []);
    return (
        <div>
            <input value={name} onChange={(e) => {
                setName(e.target.value)
            }} />
            <Child
                config={config}
                onButtonClick={handleClick}
            />
        </div>
    )
};
const Child = memo(function Child({ onButtonClick, config }) {
    console.log('Child render')
    return (
        <button onClick={onButtonClick} style={{ color: config.color }}>
            {config.text}
        </button>
    )
});
export default MyCountFunc;