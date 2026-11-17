import React from 'react'
import Navbar from '../Navbar'
import ResultTab from '../ResultTab'
import SearchBar from '../SearchBar'
import { useSelector } from 'react-redux'
import DisplayResult from '../DisplayResult'
import ShowMedia from '../ShowMedia'

const Home = () => {
    const {query}=useSelector((state)=>state.SliceStore)
  return (
    <div>
        <Navbar/>
        <SearchBar/>

        {
            query?<><ResultTab/><DisplayResult/></>:""
        }
    </div>
  )
}

export default Home