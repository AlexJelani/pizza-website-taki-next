import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./Components/Menu.jsx";
import {Routes, Route} from "react-router-dom";
import Header from "./Components/Header.jsx";


function App() {

  return (
      <div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/menu' element={<Menu/>}/>
        </Routes>
      </div>
  )
}

export default App
