import React, {useState, useEffect, useRef } from 'react';
const HooksUseEef = () => {
    const [name, setName] = useState('kings');
    const inputRef = useRef();
    useEffect(() => {
        console.log(inputRef.current.value)
        return () => console.log('useEffect calback')
    }, [name])
    return (
        <div> 
            <input ref={inputRef} value={name} onChange={(e) => {
                setName(e.target.value)
            }} />
        </div>
    )
}
export default HooksUseEef;