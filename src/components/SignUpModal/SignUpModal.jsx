import React from 'react'
import "./SignUpModal.css"

export default function SignUpModal() {
  return (
    <form className='SignUpModal'>
        <h2>Start your Journey Today !</h2>
        <label htmlFor="">Usernameemail</label>
        <input type="text" />
        <label htmlFor="">email</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="password" />
        <label htmlFor="">Confirm Password</label>
        <input type="password" />
        <button>Create Account</button>
    </form>
  )
}
