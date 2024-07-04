import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

const AddTodo = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <>
    <div>
      <form 
      onSubmit={addTodoHandler}
      className='space-x-3 mt-12'
      >
    <input 
    type='text'
        className='bg-slate-800 rounded-xl border border-slate-500 focus:border-teal-600 focus:ring-2 focus:ring-teal-900 text-base outline-none text-slate-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        placeholder='Enter a Todo....'
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        />
        <button
            type='submit'
            className='text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-700 rounded-xl text-lg'
        >
                Add Todo
        </button>
      </form> 
    </div>
    </>
  )
}

export default AddTodo
