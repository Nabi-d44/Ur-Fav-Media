import React from 'react'
import {useSelector  } from "react-redux";
import Collection from '../Collection';
import {Link  } from "react-router-dom";
import {useDispatch  } from "react-redux";
import { clearALLcollection } from '../../redux/CollectonSlice';

const CollectionPage = () => {
    const collection = useSelector((state)=>state.CollectionStore.items)
    console.log(collection)
    const dispatch = useDispatch()
    const clearAll = ()=>{
        dispatch(clearALLcollection())
    }

  return (
  <div>
    <div className='flex justify-between p-5'>
    <Link to={"/"}  className='text-xl cursor-pointer'>Home</Link>
    <button onClick={()=>clearAll()}
     className='bg-red-600 rounded px-4 py-3 cursor-pointer active:scale-95 '>Clear Collection</button>
    </div>
    
        <div className='flex flex-wrap gap-5 p-5'>
        {
            collection.map((items,idx)=>(
               <div key={idx} >
               <Collection collection={items}/>
               </div> 
            ))
        }
    </div>
  </div>
    
  )
}

export default CollectionPage