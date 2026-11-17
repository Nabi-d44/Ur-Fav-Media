import React from 'react'
import Home from './AllComponents/Page/Home'
import { Routes,Route } from "react-router-dom";
import CollectionPage from './AllComponents/Page/CollectionPage'

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<CollectionPage/>} />
      </Routes>

    </div>
  )
}

export default App