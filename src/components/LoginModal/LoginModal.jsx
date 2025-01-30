import React from 'react'

import './LoginModal.css'

export default function LoginModal() {
  return (
    <form className='LoginModal'>
        <h2>Welcome back !</h2>
        <label htmlFor="">Username or email</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="password" />
        <button>Login</button>
    </form>
  )
}
