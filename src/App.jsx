import {Navbar} from "./components/layout/Navbar"
import ItemListContainer from "./components/pages/ItemListContainer"

const App = ()=> {
  
  return (
    <div>
      <ItemListContainer greeting= "Bienvenido a Last Game" />
      <Navbar />
    </div>
  )
}

export default App
