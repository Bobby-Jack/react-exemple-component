import React, { useState } from 'react'
import './ConnectionModal.css'
import LoginModal from '../LoginModal/LoginModal'
import SignUpModal from '../SignUpModal/SignUpModal'
import { FaX } from 'react-icons/fa6'


export default function ConnectionModal({setModalOpen}) {

    // ce useState sert a savoir quel formulaire il faut afficher
    const [allreadyConnected, setAllreadyConnected] = useState("true")
  
    // cette fonction affiche le component d'inscription en mettant le state
    // allreadyConnected à false
    function goToSignUp(){
      setAllreadyConnected("false")
    }
    


    return (
    <div className='ConnectionModal'>
        {/* ce bouton utilise la fonction passer par son parent
        pour changer le state modalOpen à false et ainsi fermer la fenètre.  */}
        <div className='ConnectionModalClose' onClick={()=>{setModalOpen(false)}}>
            <FaX/>
        </div>
        <div className='ConnectionModalWindow'>
            <h1>CONNECTED : {allreadyConnected}</h1>
            {/* affiche le formulaire correspondant à l'aide du state allreadyConnected */}
            {
                allreadyConnected === "true" ?
                <>
                <LoginModal/>
                {/* permet de changer la valeur de allreadyConnected pour passer à l'autre formulaire */}
                <button onClick={goToSignUp}>NEW ACCOUNT</button>

                </>
                :
                <>
                <SignUpModal/>
                {/* permet de changer la valeur de allreadyConnected pour passer à l'autre formulaire */}
                <button onClick={()=>{setAllreadyConnected("true")}}>LOGIN</button>
            
                </>
            }

        </div>
    </div>
  )
}
