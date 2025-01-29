
import './App.css'
import MyCard from './components/MyCard/MyCard'
import SodaCard from './components/SodaCard/SodaCard'

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
  
  return (
    <>


      <div>
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
      </div>



    
      
      {/* ici, on fourni à content une constent */}
      {/* <MyCard content={dataCard} m={m}/>  */}
      {/* ici on fourni une valeur brut à content */}
      {/* <MyCard content={{name:"Pawl", age: 12}} m={m}/> */}
      {/* <MyCard content={{name:"Pawl", age: 42}} m={m}/> */}

      
    </>
  )
}

export default App
