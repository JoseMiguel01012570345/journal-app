import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../auth/loginScreen'
import { registerScreen } from '../auth/registerScreen'

export const AuthRouter = () => {
  
    return (
        <div className="auth__main">
            <div className='auth__box-container container' >
            <Routes>
                <Route path='/' Component={LoginScreen}/>
                <Route path='/register' Component={registerScreen}/>
                <Route path='/*' Component={ LoginScreen }/>
            </Routes>
            </div>
        </div>
  )
}
