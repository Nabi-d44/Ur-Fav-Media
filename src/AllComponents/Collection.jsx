import React from 'react'
import {useDispatch  } from "react-redux";
import { removemyCollection } from '../redux/CollectonSlice';

const Collection = ({collection}) => {

  console.log(collection)
  const dispatch = useDispatch()
  const RemoveCollection =(collection)=>{
    dispatch(removemyCollection(collection))

  }
  return (
    <div>
        <div className='bg-white h-60 w-60 overflow-hidden relative '>
            <a  href={collection.url} target='_blank'>
                {collection.type == "photo"?<img className='w-full h-full object-cover object-center' src={collection.src}/>:""}
                {collection.type == "video"?<video className='w-full h-full object-cover object-center' src={collection.src}></video>:""}
                {collection.type == "gif"?<img className='w-full h-full object-cover object-center' src={collection.src}/>:""}
            </a>
            <div className='absolute bottom-0 flex gap-3 justify-between items-center p-2 w-full bg-linear-to-t from-black/60 to-transparent'>
                <p className='text-white'>{collection.title}</p>
                <button onClick={()=>{RemoveCollection(collection)}}
                className='bg-[#ce1616] px-3 py-2 rounded-xl'>Remove</button>
            </div>     
        </div>
    </div>
  )
}

export default Collection