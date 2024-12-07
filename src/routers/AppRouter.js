import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { JournalScreen } from '../auth/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
    return (
    <Router>
        <Routes>
            <Route path='/' Component={ JournalScreen }/>
            <Route path='/auth/*' Component={ AuthRouter } />
            <Route path='*' Component={ JournalScreen } />
        </Routes>
    </Router>
  )
}
