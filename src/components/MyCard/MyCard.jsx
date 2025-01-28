import "./MyCard.css"
import { FaBeer } from "react-icons/fa";


// le component est un fonction qui prend en paramètre des valeurs servant à son affichage.
// ces valeur sont fournient par le parent (App.jsx)
function MyCard({content}){
  
      // le return fourni le résultat html à charger dans la page index
    return (
          <div className="MyCard">
            
                {content.name} age : {content.age} 
                <FaBeer/>
          </div>
    
    )
}

// ne pas oublier l'export pour pouvoir l'utilisé dans son parent

export default MyCard