import React, { useContext} from "react";
import RecipesCard from '../components/RecipesCard'


const Fav = () => {
const favorite = JSON.parse(localStorage.getItem("fav") || "[]")
  const reciperendering =favorite.map((recipe) =>
    <RecipesCard key={recipe.id} recipe={recipe}/>
  )
  return (
    <div className="flex flex-wrap gap-6 p-4">
      {reciperendering}
    </div>
  )
}

export default Fav
