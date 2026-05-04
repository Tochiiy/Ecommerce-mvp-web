import { useState, createContext } from "react"

export const AuthContext = createContext({
  user: null,
  signUp: () => {},
  login: () => {},
  logout: () => {}
})

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("currentUserEmail")
      ? { email: localStorage.getItem("currentUserEmail") }
      : null
  )

  async function signUp(email, password) {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || []
    
    // 1. Check if the user already exists before signing them up!
    const userExists = existingUsers.some(u => u.email === email)
    if (userExists) {
      throw new Error("An account with this email already exists.")
    }

    const newUser = { email, password }
    existingUsers.push(newUser)
    localStorage.setItem("users", JSON.stringify(existingUsers))
    localStorage.setItem("currentUserEmail", email)
    setUser(newUser)
  }

  async function login(email, password) {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || []
    const found = existingUsers.find(u => u.email === email && u.password === password)
    
    if (found) {
      setUser(found)
      localStorage.setItem("currentUserEmail", email)  // ✅ persist login too
    } else {
      // 2. THROW the error so Auth.jsx can catch it and display it
      throw new Error("Invalid email or password.")
    }
  }

  function logout() {
    setUser(null)
    localStorage.removeItem("currentUserEmail")
    // Note: Usually better to handle alerts/navigation in the component, not the context
    alert("Logged out successfully!") 
  }

  return (
    <AuthContext.Provider value={{ user, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}