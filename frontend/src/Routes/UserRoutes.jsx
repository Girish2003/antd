import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "../Components/Home"
import Loyalty from "../Components/Loyalty"
function UserRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Loyalty" element={<Loyalty/>} />
      </Routes>
  )
}

export default UserRoutes