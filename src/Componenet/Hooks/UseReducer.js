
import React, {useReducer} from 'react'
import "./style.css"


const reducer = (state, action) => {
  if(action.type==="INC"){
    state=state+1;
  }
  if(state>0 && action.type==="DEC"){
    state=state-1  
  }
  return state;
}

const UseReducer = () => {
    const initialdata = 10;
    const [state, dispatch] = useReducer(reducer, initialdata );
    // const [myNum, setMyNum] = useState(initialData)
    // we cant chage value through dispatch
    // dipatch is used to trigger our reducer function
    // through reducer we change the value
    return (
        <>
            <div className='center_div'>
                <p>{state}</p>
                <div class="button2" onClick={() => dispatch({type:"INC"})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INC
                </div>
                <div class="button2" onClick={() => dispatch({type:"DEC"})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DEC
                </div>

             </div>
        </>
    )
}

export default UseReducer