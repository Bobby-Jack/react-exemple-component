import React from 'react'
import "./SodaCard.css"
import { FaStar } from 'react-icons/fa'

export default function SodaCard({data}) {

    // cette fonction affiche le produit acheter en paramètre
    function buy(name){
      alert("vous avez ajouté "+name+" dans le panier !");
      
    }
    

  return (
    // ce composant aura une classe suplementaire si il est en promo
    // en appuyant sur la carte on appelera la fonction buy
    // MAIS puisque cette dernière possède un paramètre,
    // il faudra stocké l'appel dans dans une fonction anonyme 
    <div onClick={()=>{buy(data.name)}} className={data.promo ? "SodaCard promo" : "SodaCard"}>
        <span>{data.name}</span>
        <span>{data.price} €</span>
        {/* autre affichage conditionel dans le cas où le produit est en promo */}
        {
            data.promo ?
            <div className='promoPin'>
                <FaStar/>
            </div> 
            :
            ""
        }
    </div>
  )
}
