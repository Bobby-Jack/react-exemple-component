
import './App.css'
import MyCard from './components/MyCard/MyCard'

function App() {
  // ces données seront fournit au component MyCard pour le paramètre content
  const dataCard = {
    name : "ryad",
    age : 24
  }
  
  return (
    <>
    
      
      {/* ici, on fourni à content une constent */}
      <MyCard content={dataCard}/> 
      {/* ici on fourni une valeur brut à content */}
      <MyCard content={{name:"Pawl", age: 12}}/>

      
    </>
  )
}

export default App
