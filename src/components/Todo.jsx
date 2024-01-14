import React, { useState } from 'react'

function Todo() {
    const [task,setTask]=useState("")
    const [desc,setDesc]= useState("")
    const [main,setmain]=useState([])

    function handleSubmit(e){
        // console.log(e);
        e.preventDefault();
        // console.log(task)
        // console.log(desc)
        setmain([...main,{task,desc}])
        setTask("")
        setDesc("")
        console.log(main)
    }
    function handleDelete(index){
        let mainCopy=[...main]
        mainCopy.splice(index,1)

        setmain(mainCopy)
    }
    let rendertask = <h2>Nothing to show</h2>

    if (main.length>0) {
        rendertask = main.map((item,index)=>{
            return (
            <li key={index}>
            <div >
                <h2>{item.task}</h2>
                <h4>{item.desc}</h4>
            </div>
            <button onClick={()=> handleDelete(index)}>Delete</button>
            </li>
            
            )
        })
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your task' value={task} onChange={(e)=>{
            setTask(e.target.value)
        }} />
        <input type="text" placeholder='Description' value={desc} onChange={(e)=>{
            setDesc(e.target.value)
        }} />
        <button >Add Task</button>
    </form>
    <hr />
    <hr />
    <hr />
    <div>
        <ul >
           {rendertask }
            </ul>
    </div>
    
    
    </>
  )
}

export default Todo
