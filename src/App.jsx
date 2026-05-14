import Home from "./pages/Home"
import Auth from "./pages/Auth"
import CheckOut from "./pages/CheckOut"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import AuthProvider from "./context/authContext"
import CartProvider from "./context/Cart"
import './App.css'
import ProductDetails from "./pages/ProductDetails"

function App() {

  return (
    <AuthProvider>
      <CartProvider>
    <div className="app">
      <NavBar />
     <Routes>
      <Route path="/" element ={<Home />} />
      <Route path="/auth" element ={<Auth/>} />
      <Route path="/checkout" element ={<CheckOut />}/>
      <Route path="/products/:id" element ={<ProductDetails />}/>
    </Routes>
    </div>
    </CartProvider>
     </AuthProvider> 
     
  )
}

export default App
