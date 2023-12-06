import Home from "./pages/Home.jsx";
import {Routes, Route,} from "react-router-dom";
import Header from "./Components/Header.jsx";


function App() {

  return (
      <div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
  )
}

export default App
