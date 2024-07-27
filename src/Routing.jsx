import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Login} from "./LoginComponent/Login"
import { NewAccount } from './NewAccountComponent/NewAccount'
import { HomePage } from './HomePage/HomePage'
import { Provider } from 'react-redux'
import store from './Store/store'

export const Routing = () => {
  return (

    <Provider store={store}>
    <BrowserRouter> 
    <Routes>
    <Route path='/' element={<Login></Login>}></Route>
    <Route path='/NewAccount' element={<NewAccount></NewAccount>}></Route>
    <Route path='/Home/:token' element={<HomePage></HomePage>}></Route>
    </Routes> 
    </BrowserRouter>
    </Provider>
    
  )
}
