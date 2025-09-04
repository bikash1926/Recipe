import { Route, Routes } from "react-router-dom"

import Recipes from "../src/pages/Recipes"
import Create from "../src/pages/Create"
import Home from "../src/pages/Home"
import RecipesDetiles from "../src/pages/RecipesDetails"
import Fav from "../src/pages/Fav"


const Mainroutes = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/Create" element={<Create />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/detalis/:id" element={<RecipesDetiles />} />
        <Route path="/fav" element={<Fav/>} />
      </Routes>
        
    </div>
  )
}

export default Mainroutes
