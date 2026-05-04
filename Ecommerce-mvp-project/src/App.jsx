import Home from "./pages/Home"
import Auth from "./pages/Auth"
import CheckOut from "./pages/CheckOut"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import './App.css'

function App() {

  return (
    <div className="app">
      <NavBar />
     <Routes>
      <Route path="/" element ={<Home />} />
      <Route path="/auth" element ={<Auth/>} />
      <Route path="/checkout" element ={<CheckOut />}/>

      
     
    </Routes>
    </div>
      
  )
}

export default App
