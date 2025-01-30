
import './App.css'
import ConnectionModal from './components/ConnectionModal/ConnectionModal'
import MyCard from './components/MyCard/MyCard'
import SodaCard from './components/SodaCard/SodaCard'
import Welcome from './components/Welcome/Welcome'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'

function App() {
  // ces données seront fournit au component MyCard pour le paramètre content
  const dataCard = {
    name : "ryad",
    age : 55
  }

  const dataProduct = [
  {"name" : "Nalu", "price" : 1.00, "promo": false},
  {"name" : "Arizona", "price" : 1.20, "promo": true},
  {"name" : "Selecto", "price" : 0.80, "promo": false},
  ]
  const m = "light"

  // ce state boolean conserve si oui ou non le modal est afficher
  // modalOpen est le nom du state (état)
  // setModalOpen est une fonction qui prend la nouvelle valeur de modalOpen
  // setModalOpen est le seul moyen de changer la valeur du state
  // la valeur fourni dans useState (false) est la valeur initial du state (modalOpen)
  const [modalOpen, setModalOpen] = useState(false)
  
  return (
    <>


        {
          //cette affichage conditionel fait apparaitre
          // ou non le modal selon la valeur de modalOpen 
          modalOpen === true ?
          // le composant ConnectionModal aura besoin de la fonction
          // setModalOpen pour remettre modalOpen a false et ainsi fermer le modal
          <ConnectionModal setModalOpen={setModalOpen}/>
          :
          ""
        }
        <Welcome/>
        {/* ce bouton à pour but d'ouvrir le ConnectionModal
        en mettant le state modalOpen à true */}
        <button style={{backgroundColor: "red", color : "white"}} onClick={()=>{setModalOpen(true)}}><FaUser/></button>
        {/* ici, nous allons générer un composant SodaCard pour
        chaque soda dans la liste dataProduct. 
        la fonction map prend en paramètre une fonction anonyme
        qui prend, elle même, en paramètre un nom à donné à un élément de la liste
        et un id à fournir au resultat
        finalement la fonction anonyme retourne le composant désiré*/}
        {
          dataProduct.map((soda, i)=>{
            return (
              <SodaCard key={i} data={soda}/>
            )
          })
        }



    
      
      {/* ici, on fourni à content une constent */}
      {/* <MyCard content={dataCard} m={m}/>  */}
      {/* ici on fourni une valeur brut à content */}
      {/* <MyCard content={{name:"Pawl", age: 12}} m={m}/> */}
      {/* <MyCard content={{name:"Pawl", age: 42}} m={m}/> */}

      
    </>
  )
}

export default App
