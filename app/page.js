
"use client"
import React, { useState } from 'react'

const page = () => {
  const [text, settext] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHendalar = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask ,{text,desc}])
    settext("")    
    setdesc("")    

  }

const deleteHandler =(i)=>{
  let copyText = ([...mainTask])
  copyText.splice(i,1)
  setmainTask(copyText)
}

  let rendertask = <h2>No Task Available</h2>
  
  if(mainTask.length>0){
    rendertask = mainTask.map((t,i)=>{
      return(
        <li className='flex text-center justify-between mb-5'>
          <div className='flex justify-between w-2/3'>
          <h5 className='text-2xl font-semibold '>{t.text}</h5>
          <h6 className='text-lg font-medium'>{t.desc}</h6>
        </div>
        <button
        onClick={()=>{
          deleteHandler(i)
        }}
        className='bg-red-400 font-bold text-white px-4 py-2 rounded'
        >Delete</button>
        </li>
      )
    })
  }
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center '>Aryan Raj TodoList</h1>

    <form onSubmit={submitHendalar}>
      <input 
      type='text' 
      className= "text-2xl border-zinc-800 border-4 m-8 px-4 py-2 rounded"
      placeholder= "Enter your Task"
      value={text}
      onChange={(e)=>{
        settext(e.target.value)
      }}
      />
      <input 
      type='text' 
      className= "text-2xl border-zinc-800 border-4 m-8 px-4 py-2 rounded"
      placeholder= "Enter your Description"
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />
      <button className='bg-black m-5 text-white text-2xl px-4 py-2 rounded font-bold cursor-pointer'>Add Task</button>

    </form>

    <hr/>
    <div className='bg-slate-500 p-8'>
     <ul>{rendertask}</ul>
    </div>

    </>
  )
}

export default page
