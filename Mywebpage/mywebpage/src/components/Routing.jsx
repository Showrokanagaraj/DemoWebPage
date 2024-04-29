import React from 'react'
import LoginMui from './LoginMui';
import HeAder from './Header';
import {  Routes,Route } from 'react-router-dom';
const Root = () => {
  return (
    <Routes>
      <Route exact path='/' element={<HeAder/>} />
      <Route path='/login' element={<LoginMui/>} />
    </Routes>
  )
}

export default Root