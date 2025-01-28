import "./MyCard.css"
import { FaBeer } from "react-icons/fa";


// le component est un fonction qui prend en paramètre des valeurs servant à son affichage.
// ces valeur sont fournient par le parent (App.jsx)
function MyCard({content, m}){
  
      // le return fourni le résultat html à charger dans la page index
    return (
          
      //      cette condition ternaire vérifie si le mode sombre est activé et applique une classe suplementaire en conséquence
          <div className={m=="dark" ? "MyCard dark" : "MyCard"}>
            
                {content.name} age : {content.age} 
                
                <FaBeer/>
                <hr />
                {/* autre affichage conditionelle */}
                {
                  content.age >= 50 ?
                  <>
                        <h3>OLD!</h3>
                  </>
                  :
                  ""
                }
          </div>
          
    
    )
}

// ne pas oublier l'export pour pouvoir l'utilisé dans son parent

export default MyCard