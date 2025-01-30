import React, { useState } from 'react'
import './ConnectionModal.css'
import LoginModal from '../LoginModal/LoginModal'
import SignUpModal from '../SignUpModal/SignUpModal'
import { FaX } from 'react-icons/fa6'


export default function ConnectionModal({setModalOpen}) {

    const [allreadyConnected, setAllreadyConnected] = useState("true")
  
    function goToSignUp(){
      setAllreadyConnected("false")
    }
    


    return (
    <div className='ConnectionModal'>
        <div className='ConnectionModalClose' onClick={()=>{setModalOpen(false)}}>
            <FaX/>
        </div>
        <div className='ConnectionModalWindow'>
            <h1>CONNECTED : {allreadyConnected}</h1>
            {
                allreadyConnected === "true" ?
                <>
                <LoginModal/>
                <button onClick={goToSignUp}>NEW ACCOUNT</button>

                </>
                :
                <>
                <SignUpModal/>
                <button onClick={()=>{setAllreadyConnected("true")}}>LOGIN</button>
            
                </>
            }

        </div>
    </div>
  )
}
