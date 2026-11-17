import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGIPHy, fetchPhotos, fetchVideos } from '../ApiFetch'
import { CurrentResults, LoadingStatus ,ErrorStatus } from '../redux/searchSlice'
import ShowMedia from './ShowMedia'

const DisplayResult = () => {
  const {TabActive,query,loading,results,error} = useSelector((state)=>state.SliceStore)
  const dispatch = useDispatch()
  useEffect(() => {
    getData()
  }, [query,TabActive])
  
  const getData =async ()=>{
    if(!query) return
    dispatch(LoadingStatus())
    try {
      let allData
    let reqData
    if(TabActive == "photo")
    {
     allData = await fetchPhotos(query)
     reqData = allData.map((item)=>({
      id:item.id,
      type:"photo",
      title:item.alt_description,
      thumbnail:item.links.download,
      src:item.urls.full,
      url:item.links.html
      }
     ))
    }
    if(TabActive == "video"){
      allData =  await fetchVideos(query)
      reqData = allData.map((item)=>(
      {
        id:item.id,
        type:"video",
        title:item.user.name,
        thumbnail:item.image,
        src:item.video_files[0].link,
        url:item.url
      }
    ))
    }
    if(TabActive == "gif"){
      allData = await fetchGIPHy(query)
      reqData = allData.map((item)=>({
      id:item.id,
      title:item.title,
      type:"gif",
      thumbnail:item.images.fixed_height_small.url,
      src:item.images.original.url,
      url:item.url 
      }))
    }
    dispatch(CurrentResults(reqData))  
    } catch (error) {
      console.log(error)
      dispatch(ErrorStatus())
    } 
  }

  if(loading) return <p>Loading....</p>
  if(error) return <p>Something went wrong.Please try again...</p>
  if(results.length === 0 && query) return <p>No results for {query}</p>
  return (
    <div className='flex flex-wrap gap-5 p-5'>
      {
        results.map((item,idx)=>( 
          <div key={idx}>
            <ShowMedia item={item}/>
          </div>
        ))
      }
    </div>
  )
}

export default DisplayResult