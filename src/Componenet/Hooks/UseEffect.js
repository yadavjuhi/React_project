import React, { useEffect, useState } from 'react'
import "./style.css"

const UseEffect = () => {
    const initialData = 0;
    const [myNum, setMyNum] = useState(initialData)
    useEffect(()=>{
    //    console.log("hello");
    document.title=`chats(${myNum})`
    // },[]) with this it does not change after removing it will chande on veery click
},)
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
                

            </div>
        </>
    )
}

export default UseEffect