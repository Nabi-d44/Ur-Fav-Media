import React from 'react'
import { useDispatch } from 'react-redux'
import { addmyCollection } from '../redux/CollectonSlice'

const ShowMedia = ({item}) => {
    // console.log(item)
    const dispatch = useDispatch()
    const AddCollection=(item)=>{
        dispatch(addmyCollection(item))
    }
  return (

        <div className='bg-white h-60 w-60 overflow-hidden relative '>
            <a  href={item.url} target='_blank'>
                {item.type == "photo"?<img className='w-full h-full object-cover object-center' src={item.src}/>:""}
                {item.type == "video"?<video className='w-full h-full object-cover object-center' src={item.src}></video>:""}
                {item.type == "gif"?<img className='w-full h-full object-cover object-center' src={item.src}/>:""}
            </a>
            <div className='absolute bottom-0 flex gap-3 justify-between items-center p-2 w-full bg-linear-to-t from-black/60 to-transparent'>
                <p className='text-white'>{item.title}</p>
                <button onClick={()=>{AddCollection(item)}}
                className='bg-[#466995] px-3 py-2 rounded-xl'>Save</button>
            </div>     
        </div>
  )
}

export default ShowMedia