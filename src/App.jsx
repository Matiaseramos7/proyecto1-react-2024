import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent"
import 'bootstrap/dist/css/bootstrap.min.css';


// import './App.css'

function App() {

  return (
    <div>
      <NavBarComponent />
      <ItemListContainer greeting="Hola 1" />
      <ItemListContainer greeting="Hola 2" />
      <ItemListContainer greeting="Hola 3" />
    </div>
  )
}

export default App
