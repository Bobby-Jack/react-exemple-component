
import './App.css'
import MyCard from './components/MyCard/MyCard'

function App() {
  // ces données seront fournit au component MyCard pour le paramètre content
  const dataCard = {
    name : "ryad",
    age : 55
  }
  const m = "light"
  
  return (
    <>
    
      
      {/* ici, on fourni à content une constent */}
      <MyCard content={dataCard} m={m}/> 
      {/* ici on fourni une valeur brut à content */}
      <MyCard content={{name:"Pawl", age: 12}} m={m}/>
      <MyCard content={{name:"Pawl", age: 42}} m={m}/>

      
    </>
  )
}

export default App
