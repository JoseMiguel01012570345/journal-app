import React from 'react'
import { Link } from 'react-router-dom'
export const registerScreen = () => {
  return (
<>

        <h3 className='auth__title'> Register </h3>
        <form>
        <input 
        type='text'
        placeholder='name'
        name="name"
        className='auth__input'
        />
        
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
        
        <input
            type='password'
            placeholder='confirm pasword'
            name='password2'
            className='auth__input'
        />

        <button 
        type='submit'
        className='btn btn-primary btn-block mb-20'
        >
            Register
        </button>

        <Link to="/auth/login" className='link'>
            Already have a account
        </Link>
        </form>
    </>

  )
}
