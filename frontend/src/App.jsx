import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route
      path="/"
      element={<Dashboard/>}
      /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
