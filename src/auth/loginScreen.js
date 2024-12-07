import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
  return (
      <>
      <div className='container'>
        <h3 className='auth__title'> Login </h3>
        <form>
        <input 
        type='text'
        placeholder='email'
        name="email"
        className='auth__input'
        />
        
        <input
            type='password'
            placeholder='pasword'
            name='password'
            className='auth__input'
        />

        <button 
        type='submit'
        className='btn btn-primary btn-block'
        disabled = { true }
        
        >
            Login
        </button>
        <hr/>
        <div className='auth__social-networks'>
            <p>
                Login with Google
            </p>
            <div 
                className="google-btn"
            >
                <div className="google-icon-wrapper">
                    <img className="google-icon" src="https://img.icons8.com/?size=100&id=JvOSspDsPpwP&format=png&color=000000" alt="google button" />
                </div>
                <p className="btn-text">
                    <b>Sign in with google</b>
                </p>
            </div>
        </div>
        <Link to="/auth/register" className='link'>
            Create new account
        </Link>
        </form>
        </div>
    </>

  )
}
