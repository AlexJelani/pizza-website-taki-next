import Home from "./pages/Home.jsx";
import {Routes, Route,} from "react-router-dom";
import Header from "./Components/Header.jsx";
import Navbar from "./Components/Navbar.jsx";


function App() {

  return (
      <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
  )
}

export default App
