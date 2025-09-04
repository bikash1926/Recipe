import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import RecipesContextes from'./context/RecipesContextes.jsx'

createRoot(document.getElementById('root')).render(
  <RecipesContextes>
   <BrowserRouter>
    <App />
  </BrowserRouter>
  </RecipesContextes>
)
