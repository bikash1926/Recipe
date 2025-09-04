import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipesContextes'
import RecipesCard from '../components/RecipesCard'


const Recipes = () => {
  const {data} = useContext(recipecontext)
  const reciperendering = data.map((recipe) =>
    <RecipesCard key={recipe.id} recipe={recipe}/>
  )
  return (
    <div className="flex flex-wrap  p-4">
      {reciperendering}
    </div>
  )
}

export default Recipes
