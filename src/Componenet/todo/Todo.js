import React, { useState, useEffect } from 'react'
import "./style.css"



// get the localStorage data back
const getLocalData = () => {
  const lists = localStorage.getItem("mytodo");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputdata, setInputData] = useState("");
  // const [items, setItems] = useState([]);
  // for local storage
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [togglebutton, setToggleButton] = useState(false);



  // add the items function
  const addItem = () => {
    if (!inputdata) {
      alert("plz enter something")
    }
    else if(inputdata && togglebutton){
      setItems(
        items.map((curElem)=>{
          if(curElem.id==isEditItem){
            return{...curElem,name:inputdata}
          }
          return curElem;
        })
      )
      setInputData("");
    setIsEditItem(null);
    setToggleButton(false)
    }
    else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata
      }
      // setItems([...items,inputdata]); firstly this after  //confusing******
      setItems([...items, myNewInputData]);
      setInputData("")
    }

  }

  // edit the items
  const editItem = (index) => {
    const item_todo_edited = items.find((curElem) => {
      return curElem.id === index;
    })
    //forshowing name in input whicd we want to modify
    setInputData(item_todo_edited.name);
    setIsEditItem(index);
    setToggleButton(true)
  }

  // how to delete items;
  const deleteItem = (index) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItems);
  };

  // remove all the items
  const removeAll = () => {
    setItems([])
  }

  // adding local storage
  useEffect(() => {
    localStorage.setItem("mytodo", JSON.stringify(items))
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div clasName="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" className="img"></img>
            <figcaption>Add your list here✌️</figcaption>
          </figure>
          <div className="addItems">
            <input type="text" placeholder='✍️ Add items' className="form-control" value={inputdata} onChange={(event) => setInputData(event.target.value)}></input>
            {togglebutton ? (
               <i className="far fa-edit  add-btn" onClick={addItem}></i>
               ): (
               <i className="fa fa-plus add-btn" onClick={addItem}></i>
               )}
            
          </div>
          {/* show our items */}
          <div className="showItems">
            {items.map((curElem) => {
              return (
                <div className="eachItem" key={curElem.id}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn" onClick={() => editItem(curElem.id)}>
                    </i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(curElem.id)}></i>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Remove All itemms */}



          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo