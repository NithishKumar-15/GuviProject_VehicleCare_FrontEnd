import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Login} from "./LoginComponent/Login"
import { NewAccount } from './NewAccountComponent/NewAccount'
import { HomePage } from './HomePage/HomePage'
import { PaymentSuccessPage } from './PaymentPage/PaymentSuccessPage'
import { PaymentCanclePage } from './PaymentPage/PaymentCanclePage'
import { Provider } from 'react-redux'
import store from './Store/store'

export const Routing = () => {
  return (

   
    <BrowserRouter> 
    <Routes>
    <Route path='/' element={<Login></Login>}></Route>
    <Route path='/NewAccount' element={<NewAccount></NewAccount>}></Route>

    <Route path='/Home/:token' element={ <Provider store={store}>
      <HomePage></HomePage>
      </Provider>}>
      </Route>
      
      <Route path='/PaymentSuccess/:user' element={<PaymentSuccessPage></PaymentSuccessPage>}></Route>
      <Route path='/PaymentCancel' element={<PaymentCanclePage></PaymentCanclePage>}></Route>


    </Routes> 
    </BrowserRouter>
    
  )
}
