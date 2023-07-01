import React, { useState } from 'react'
import "./style.css"

const UseState = () => {
    const initialData = 10;
    const [myNum, setMyNum] = useState(initialData)
    return (
        <>
            <div className='center_div'>
                <p>{myNum}</p>
                <div class="button2" onClick={() => setMyNum(myNum + 1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Increment
                </div>
                <div class="button2" onClick = {() => (myNum > 0 ? setMyNum(myNum - 1)
                    : setMyNum(0)
                )}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Decrement
                </div>

            </div>
        </>
    )
}

export default UseState