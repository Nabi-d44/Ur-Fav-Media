import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TabsActive } from '../redux/searchSlice'

const ResultTab = () => {
  const tabs = ["photo","video","gif"]
  const dispatch = useDispatch()
  const {TabActive} =useSelector((state)=>state.SliceStore)
  // console.log(TabActive)
  return (
    <div className='mt-4 p-5 flex justify-start gap-5'>
      {
        tabs.map((item,idx)=>(
          <button onClick={()=>dispatch(TabsActive(item))}
          className={`${TabActive == item ?"bg-amber-500":"bg-gray-900"} px-4 py-3 border rounded-2xl 
          active:scale-95  `}
           key={idx}>{item}</button>
        ))
      }
    </div>
  )
}

export default ResultTab