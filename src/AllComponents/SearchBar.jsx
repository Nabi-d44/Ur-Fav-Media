import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Queryset } from '../redux/searchSlice'

const SearchBar = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch(Queryset(text))
        setText("")
    }
  return (
    <div className=''>
        <form onSubmit={(e)=>submitHandler(e)}
        className='bg-[#D67AB1] h-30 px-7 py-6 flex gap-5'>

            <input onChange={(e)=>setText(e.target.value)}
            value={text}
            className='w-30rem text-xl text-black border-2 outline-none px-4 py-3 rounded-xl bg-[#A8DCD9]'
            required type='text' placeholder='Search Videos & Images'/>

            <button className='border-2 px-3 py-5 w-17 rounded-xl bg-[#1B2845] ' >GO</button>
        </form>
    </div>
  )
}

export default SearchBar