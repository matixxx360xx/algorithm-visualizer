import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import BubbleSort from "./algorithms/bubbleSort.jsx"

createRoot(document.getElementById('root')).render(

   <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/algorithms/bubbleSort" element={<BubbleSort />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)