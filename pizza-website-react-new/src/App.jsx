import Home from "./pages/Home.jsx";
import {Routes, Route,} from "react-router-dom";
import Header from "./Components/Header.jsx";
import Navbar from "./Components/Navbar.jsx";
import ResponNavBar from "./Components/ResponNavBar.jsx";


function App() {

  return (
      <div className="App">
        <ResponNavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
  )
}

export default App
