import React from 'react'
import './Welcome.css'

export default function Welcome() {
    const firstName = "intrus" 
  return (
    <div className='Welcome'>
        {
            firstName=="ryad"?
            <h1>Bienvenue cher Admin</h1>
            :
            <>
            <h1>BARRE-TOI SALE INTRUS !!!</h1>
            <h2>ET NE REVIENS JAMAIS</h2>
            </>
        }
    </div>
  )
}
