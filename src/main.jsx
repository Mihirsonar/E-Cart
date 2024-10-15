import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routing from './Routing'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <Routing/>
</BrowserRouter>
)