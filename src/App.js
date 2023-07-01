import React from 'react'
// import Resturant from "./Componenet/Basics/Resturant"
// import UseState from './Componenet/Hooks/useState'
// import UseEffect from './Componenet/Hooks/UseEffect'
import UseReducer from './Componenet/Hooks/UseReducer'
import Todo from "./Componenet/todo/Todo"



const App = () => {
  return (
     <div>
    {/* <Resturant/> */}
    {/* <UseState/> */}
    {/* <UseEffect/> */}
   {/* <UseReducer/> */}
   <Todo/>
    </div>
  )
}

export default App 



// rules
// 1)inside div for storimg more tham one element
// 2)section and article also used for same
// 3) we can use React.Fragment
// for this we have to import React from "react"
// syntetic sugar is a format for React fragment 
// syntax <></> 

// function App() {
//   return (
//     <div>React tutorial</div>
//   )
// }
 

// basics
// const  App =  () => {
//   return (
//     <>
//     <div>
//       <Funname/>
//       <h2>Hello </h2>
//     </div>
//     </>
//   )
// }

// const Funname = () =>{
//   return <p>in this we are lerninga bout react</p>;
  
// }